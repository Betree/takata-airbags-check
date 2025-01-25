import { readFileSync } from "fs";
import { checkAffectedCar, mapLibManufacturer } from "../../lib/vin";
import { Manufacturer } from "@/lib/data/affected-cars";

const buildLibEuropeanManufacturers = () => {
  const libPath = "./node_modules/universal-vin-decoder/dist/index.js";
  const libFileContent = readFileSync(libPath).toString();
  const manufacturers: string[] = [];

  let isEUManufacturersSection = false;
  for (const line of libFileContent.split("\n")) {
    // Check start/end tokens
    if (line === `  manufacturers2["SA9"] = "Morgan Motor Company";`) {
      isEUManufacturersSection = true;
    } else if (
      line ===
      `  manufacturers2["1A4"] = "Chrysler brand  MPV/SUV 2006-2009 only";`
    ) {
      return manufacturers;
    }

    // Add manufacturers to the list
    if (isEUManufacturersSection) {
      manufacturers.push(
        line.split("=")[1].trim().replace(/;$/, "").replace(/["']/g, "")
      );
    }
  }

  throw new Error("Failed to find start/end tokens for EU manufacturers");
};

describe("VIN checker", () => {
  describe("invalid VINs", () => {
    it("should reject VIN that's too short", () => {
      const result = checkAffectedCar("ABC123");
      expect(result).toStrictEqual({
        decodedVIN: {
          message: "VIN must be 17 characters long",
          isValid: false,
          vin: "ABC123",
        },
        splitVIN: {
          modelYear: "",
          vds: "123",
          vis: "",
          wmi: "ABC",
        },
        isAffected: undefined,
        reason: "UNKNOWN_MANUFACTURER",
      });
    });

    it("should reject VIN with invalid characters", () => {
      const result = checkAffectedCar("VF7$XHMZ6JT00000");
      expect(result).toStrictEqual({
        decodedVIN: {
          message: "VIN must be 17 characters long",
          isValid: false,
          vin: "VF7$XHMZ6JT00000",
        },
        splitVIN: {
          modelYear: "J",
          vds: "$XHMZ6",
          vis: "JT00000",
          wmi: "VF7",
        },
        isAffected: undefined,
        reason: "UNKNOWN_MANUFACTURER",
      });
    });

    it("should reject empty VIN", () => {
      const result = checkAffectedCar("");
      expect(result).toStrictEqual({
        decodedVIN: {
          isValid: false,
          vin: "",
          message: "VIN must be 17 characters long",
        },
        splitVIN: {
          modelYear: "",
          vds: "",
          vis: "",
          wmi: "",
        },
        isAffected: undefined,
        reason: "UNKNOWN_MANUFACTURER",
      });
    });
  });

  describe("year-based safety checks", () => {
    it("should identify Citroen C3 as safe due to year", () => {
      const result = checkAffectedCar("VF7SXHMZ6JT000000");
      expect(result).toStrictEqual({
        decodedVIN: {
          info: {
            country: "France",
            manufacturer: "Citroën",
            modelYear: "2018",
            possibleModelYears: [2018],
            region: "Europe",
          },
          isValid: true,
          vin: "VF7SXHMZ6JT000000",
        },
        isAffected: false,
        links: {
          guadeloupe:
            "https://www.citroen.gp/entretenir/campagnes-de-rappel.html",
          guyane: "https://www.citroen.gf/services/campagnes-de-rappel/",
          hexagon: "https://www.citroen.fr/entretenir/campagnes-de-rappel.html",
          martinique: "https://www.citroen.mq/services/campagnes-de-rappel",
          reunion: "https://citroen-campagne-de-rappel.re/",
        },
        modelInfo: {
          extendedName: "C3 III",
          manufacturer: "CITROEN",
          name: "C3",
        },
        modelReport: {
          model: "C3 II",
          yearFrom: 2008,
          yearTo: 2017,
        },
        reason: "YEAR_NOT_IN_RANGE",
        siblingReports: [
          {
            model: "C4 II",
            yearFrom: 2010,
            yearTo: 2018,
          },
          {
            model: "DS3 I",
            yearFrom: 2008,
            yearTo: 2019,
          },
          {
            model: "DS4 I",
            yearFrom: 2010,
            yearTo: 2017,
          },
          {
            model: "DS5",
            yearFrom: 2010,
            yearTo: 2018,
          },
        ],
        splitVIN: {
          modelYear: "J",
          vds: "SXHMZ6",
          vis: "JT000000",
          wmi: "VF7",
        },
      });
    });

    it("should identify Honda Jazz as safe due to year", () => {
      const result = checkAffectedCar("JHMGK3770HX000000");
      expect(result).toStrictEqual({
        decodedVIN: {
          info: {
            country: "Japan",
            manufacturer: "Honda car",
            modelYear: "1987",
            possibleModelYears: [2017],
            region: "Asia",
          },
          isValid: true,
          vin: "JHMGK3770HX000000",
        },
        isAffected: false,
        links: {
          guadeloupe: "https://auto.honda.fr/cars/owners/airbag-recall.html",
          guyane: "https://auto.honda.fr/cars/owners/airbag-recall.html",
          hexagon: "https://auto.honda.fr/cars/owners/airbag-recall.html",
          martinique: "https://auto.honda.fr/cars/owners/airbag-recall.html",
        },
        modelInfo: {
          extendedName: undefined,
          manufacturer: "HONDA",
          name: "JAZZ",
        },
        modelReport: {
          model: "Jazz I, II et III",
          yearFrom: 2000,
          yearTo: 2015,
        },
        reason: "YEAR_NOT_IN_RANGE",
        siblingReports: [
          {
            model: "Accord VI, VII et VIII",
            yearFrom: 1998,
            yearTo: 2015,
          },
          {
            model: "Civic VI, VII, VIII et IX",
            yearFrom: 1996,
            yearTo: 2015,
          },
          {
            model: "CR-V I, II, III et IV",
            yearFrom: 1997,
            yearTo: 2015,
          },
          {
            model: "FR-V",
            yearFrom: 2004,
            yearTo: 2009,
          },
          {
            model: "Insight II",
            yearFrom: 2007,
            yearTo: 2014,
          },
          {
            model: "Legend IV",
            yearFrom: 2007,
            yearTo: 2010,
          },
          {
            model: "Stream",
            yearFrom: 2004,
            yearTo: 2005,
          },
        ],
        splitVIN: {
          modelYear: "H",
          vds: "GK3770",
          vis: "HX000000",
          wmi: "JHM",
        },
      });
    });
  });

  describe("manufacturer mapping", () => {
    let libEUManufacturers: string[] = [];

    beforeAll(() => {
      libEUManufacturers = buildLibEuropeanManufacturers();
    });

    it("should support all EU manufacturers", () => {
      const map: Record<string, Manufacturer | undefined> = {};
      for (const manufacturer of libEUManufacturers) {
        map[manufacturer] = mapLibManufacturer(manufacturer);
      }
      expect(map).toMatchSnapshot();
    });
  });
});
