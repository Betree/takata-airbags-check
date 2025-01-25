"use client";

import { Card } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertTriangle, CheckCircle, ExternalLink, Info } from "lucide-react";
import { checkAffectedCar, formatModelInfoName } from "@/lib/vin";
import { translateVinError } from "@/lib/vin-errors";
import { DecodedVINInfo } from "./DecodedVINInfo";
import { VinCheckResultAffectedMessage } from "./VinCheckResultAffectedMessage";
import { Button } from "./ui/button";

type VINCheckResultProps = {
  checkResult: ReturnType<typeof checkAffectedCar>;
};

export function VINCheckResultDetails({ checkResult }: VINCheckResultProps) {
  const manufacturer =
    ("modelInfo" in checkResult && checkResult.modelInfo?.manufacturer) ||
    checkResult.decodedVIN.info?.manufacturer;

  return (
    <Card className="p-8">
      <div className="space-y-4 mb-4">
        <h4 className="font-medium text-lg">Informations du véhicule :</h4>

        <DecodedVINInfo
          decodedVIN={checkResult.decodedVIN}
          modelInfo={
            "modelInfo" in checkResult ? checkResult.modelInfo : undefined
          }
        />
      </div>

      {/* Show sibling models if they exist */}
      {"siblingReports" in checkResult &&
        checkResult.siblingReports.length > 0 && (
          <div className="mt-4 p-4 bg-gray-50 rounded-lg">
            <h4 className="font-medium mb-2 flex items-center gap-2">
              <AlertTriangle size={16} />
              Ces autres modèles proches du vôtre sont concernés :
            </h4>
            <ul className="list-disc list-inside space-y-2 pl-2">
              {checkResult.siblingReports.map((model, index) => (
                <li key={index} className="text-sm">
                  {manufacturer} {model.model} ({model.yearFrom}-{model.yearTo})
                </li>
              ))}
            </ul>
          </div>
        )}

      {/* Show recall campaign links if they exist */}
      {"links" in checkResult &&
        checkResult.links &&
        Object.keys(checkResult.links).length > 0 && (
          <div className="mt-4 p-4 bg-blue-50 rounded-lg">
            <h4 className="font-medium mb-2 flex items-center gap-2">
              <Info size={16} />
              Informations sur les campagnes de rappel
            </h4>
            <ul className="space-y-2 pl-2 list-disc list-inside">
              {Object.entries(checkResult.links || {}).map(([region, url]) => (
                <li key={region}>
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    {region === "hexagon"
                      ? "Hexagone"
                      : region.charAt(0).toUpperCase() + region.slice(1)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}

      <div className="mt-8 text-center">
        <a
          href="https://github.com/Betree/takata-airbags-check/issues/new"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="link" size="sm" className="text-neutral-600">
            <ExternalLink size={16} className="mr-2" />
            Signaler une erreur
          </Button>
        </a>
      </div>
    </Card>
  );
}
