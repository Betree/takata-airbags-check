import { decodeVIN, splitVIN, validateVIN } from "universal-vin-decoder";
import { words } from "lodash";
import {
  ManufacturersInfo,
  AffectedModel,
  AllManufacturers,
  Manufacturer,
  ManufacturerData,
  NeverAffectedManufacturers,
} from "./data/affected-cars";

type CarReference = {
  ma: string; // model abbreviation
  me?: string; // model extended name
};

type CarReferences = {
  [key: string]: CarReference;
};

import rawCarReferences from "./data/car-references.json";
const carReferences = rawCarReferences as CarReferences;

export const validateVINI18n = (
  vin: string
):
  | { isValid: true }
  | {
      isValid: false;
      error: string;
    } => {
  const result = validateVIN(vin);
  if (result.isValid) {
    return { isValid: true };
  } else {
    return { isValid: false, error: result.error || "Unknown error" };
  }
};

const removeDiacritics = (
  manufacturer: Exclude<
    ReturnType<typeof decodeVIN>["info"],
    undefined
  >["manufacturer"]
): string => {
  return manufacturer.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
};

export const mapLibManufacturer = (
  manufacturer: string
): Manufacturer | undefined => {
  const cleanManufacturer = removeDiacritics(
    manufacturer.replace(/\s+/g, " ").trim()
  ).toLowerCase();
  const splitManufacturer = words(cleanManufacturer);
  for (const [manufacturer, settings] of Object.entries(ManufacturersInfo)) {
    if (
      settings.words?.some((word) => splitManufacturer.includes(word)) ||
      // For simple names, we check with word to make sure "Ford" doesn't match "Bedford"
      splitManufacturer.includes(manufacturer.toLowerCase()) ||
      // When the name includes a space (e.g. "Land Rover"), we permit a direct check
      (cleanManufacturer.includes(" ") &&
        manufacturer.includes(cleanManufacturer))
    ) {
      return manufacturer as Manufacturer;
    }
  }

  return undefined;
};

export type ModelInfo = {
  manufacturer: string;
  name: string;
  extendedName?: string;
};

const transformModel = (
  model: Record<string, string>
): ModelInfo | undefined => {
  return !model
    ? undefined
    : {
        manufacturer: model.ma,
        name: model.mo,
        extendedName: model.me,
      };
};

export const formatModelInfoName = (modelInfo: ModelInfo) => {
  if (!modelInfo) {
    return "Inconnu";
  } else {
    return [modelInfo.name, modelInfo.extendedName].filter(Boolean).join(" - ");
  }
};

const getAffectedCarByModel = (
  manufacturer: Manufacturer,
  modelInfo: ModelInfo
) => {
  const lowerCaseModel = modelInfo.name.toLowerCase();
  const lowerCaseModelExtendedName = modelInfo.extendedName?.toLowerCase();
  return ManufacturersInfo[manufacturer]?.affected?.find(
    (affected) =>
      affected.model.toLowerCase() === lowerCaseModel ||
      affected.model.toLowerCase().includes(lowerCaseModel) ||
      (lowerCaseModelExtendedName &&
        affected.model.toLowerCase().includes(lowerCaseModelExtendedName))
  );
};

export const checkAffectedCar = (
  vin: string
): {
  splitVIN: ReturnType<typeof splitVIN>;
  decodedVIN: ReturnType<typeof decodeVIN>;
} & (
  | {
      isAffected: undefined;
      reason: "UNKNOWN_MANUFACTURER";
    }
  | {
      isAffected: undefined;
      reason: "UNKNOWN_MODEL";
      links: ManufacturerData["links"];
      siblingReports: AffectedModel[];
    }
  | {
      isAffected: undefined;
      reason: "UNKNOWN_YEAR";
      links: ManufacturerData["links"];
      modelReport: AffectedModel;
      siblingReports: AffectedModel[];
    }
  | {
      isAffected: false;
      reason: "MANUFACTURER_NEVER_AFFECTED";
      modelInfo?: ModelInfo;
    }
  | {
      isAffected: false;
      reason: "NO_REPORT";
      links: ManufacturerData["links"];
      modelInfo?: ModelInfo;
      siblingReports: AffectedModel[];
    }
  | {
      isAffected: false;
      reason: "YEAR_NOT_IN_RANGE";
      links: ManufacturerData["links"];
      modelInfo?: ModelInfo;
      modelReport?: AffectedModel;
      siblingReports: AffectedModel[];
    }
  | {
      isAffected: true;
      manufacturer: Manufacturer;
      links: ManufacturerData["links"];
      modelReport: AffectedModel;
      siblingReports: AffectedModel[];
    }
) => {
  const rawVinInfo = splitVIN(vin);
  const decodedVIN = decodeVIN(vin);
  const base = { splitVIN: rawVinInfo, decodedVIN };

  // Check manufacturer
  if (!decodedVIN.info?.manufacturer) {
    return { ...base, isAffected: undefined, reason: "UNKNOWN_MANUFACTURER" };
  }

  // VIN year codes are circular over a 30 years period. For the Takata case in France, only
  // cars from 1998 and 2019 are affected (see https://www.ecologie.gouv.fr/rappel-airbag-takata).
  const checkToYear = Math.min(new Date().getFullYear(), 2028);
  const checkFromYear = checkToYear - 30;

  decodedVIN.info.possibleModelYears =
    decodedVIN.info.possibleModelYears?.filter(
      (year) => year >= checkFromYear && year <= checkToYear
    );

  const manufacturer = mapLibManufacturer(decodedVIN.info.manufacturer);
  if (!manufacturer) {
    return { ...base, isAffected: undefined, reason: "UNKNOWN_MANUFACTURER" };
  }

  const modelInfo = transformModel(carReferences[rawVinInfo.vds]);
  if (NeverAffectedManufacturers.includes(manufacturer)) {
    return {
      ...base,
      isAffected: false,
      reason: "MANUFACTURER_NEVER_AFFECTED",
      modelInfo,
    };
  }

  // Check model
  let siblingReports = ManufacturersInfo[manufacturer]?.affected || [];
  if (!modelInfo) {
    return {
      ...base,
      isAffected: undefined,
      reason: "UNKNOWN_MODEL",
      links: ManufacturersInfo[manufacturer]?.links || {},
      siblingReports,
    };
  }

  // Check model report
  const modelReport = getAffectedCarByModel(manufacturer, modelInfo);
  if (!modelReport) {
    return {
      ...base,
      isAffected: false,
      reason: "NO_REPORT",
      links: ManufacturersInfo[manufacturer]?.links || {},
      modelInfo,
      siblingReports,
    };
  }

  siblingReports = siblingReports.filter((report) => report !== modelReport);

  if (!decodedVIN.info?.possibleModelYears?.length) {
    return {
      ...base,
      isAffected: undefined,
      reason: "UNKNOWN_YEAR",
      links: ManufacturersInfo[manufacturer]?.links || {},
      modelReport,
      siblingReports,
    };
  }

  for (const year of decodedVIN.info.possibleModelYears) {
    if (modelReport.yearFrom > year || modelReport.yearTo < year) {
      return {
        ...base,
        isAffected: false,
        reason: "YEAR_NOT_IN_RANGE",
        links: ManufacturersInfo[manufacturer]?.links || {},
        modelInfo,
        modelReport,
        siblingReports,
      };
    }
  }

  return {
    ...base,
    isAffected: true,
    manufacturer,
    links: ManufacturersInfo[manufacturer]?.links || {},
    modelReport,
    siblingReports,
  };
};
