import { formatModelInfoName, ModelInfo } from "@/lib/vin";
import { translateVinError } from "@/lib/vin-errors";
import React from "react";
import { decodeVIN } from "universal-vin-decoder";

type DecodedVINInfoProps = {
  decodedVIN: ReturnType<typeof decodeVIN>;
  modelInfo?: ModelInfo;
};

export const DecodedVINInfo = ({
  decodedVIN,
  modelInfo,
}: DecodedVINInfoProps) => {
  const manufacturer = modelInfo?.manufacturer || decodedVIN.info?.manufacturer;
  return (
    <div className="grid grid-cols-2 gap-2 text-sm">
      <div>
        <span className="font-semibold">VIN : </span>
        <span className="break-all">{decodedVIN.vin}</span>
      </div>
      {decodedVIN.message && (
        <div className="col-span-2">
          <span className="font-semibold">Message : </span>
          <span className="break-all">
            {translateVinError(decodedVIN.message)}
          </span>
        </div>
      )}
      {decodedVIN.info && (
        <>
          <div>
            <span className="font-semibold">Constructeur : </span>
            <span>{manufacturer}</span>
          </div>
          <div>
            <span className="font-semibold">Modèle : </span>
            <span className="break-all">
              {modelInfo ? formatModelInfoName(modelInfo) : "N/A"}
            </span>
          </div>
          <div>
            <span className="font-semibold">Année modèle : </span>
            {decodedVIN.info.possibleModelYears.length ? (
              decodedVIN.info.possibleModelYears.join(", ")
            ) : (
              <i>Inconnue</i>
            )}
          </div>
          <div>
            <span className="font-semibold">Région : </span>
            {decodedVIN.info.region}
          </div>
          <div>
            <span className="font-semibold">Pays : </span>
            {decodedVIN.info.country}
          </div>
        </>
      )}
    </div>
  );
};
