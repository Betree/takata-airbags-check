import { CheckCircle } from "lucide-react";
import React from "react";
import { AlertDescription } from "./ui/alert";
import { Alert } from "./ui/alert";
import { AlertTriangle } from "lucide-react";
import { checkAffectedCar, formatModelInfoName } from "@/lib/vin";

export const VinCheckResultAffectedMessage = ({
  checkResult,
  ...props
}: {
  checkResult: ReturnType<typeof checkAffectedCar>;
} & React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div {...props}>
      {checkResult.isAffected === true ? (
        <Alert variant="destructive" data-cy="result">
          <AlertTriangle className="h-4 w-4" />
          <AlertDescription className="text-base">
            Votre véhicule pourrait être concerné par le rappel des airbags
            Takata
          </AlertDescription>
        </Alert>
      ) : checkResult.isAffected === false ? (
        <Alert variant="success" data-cy="result">
          <CheckCircle className="h-4 w-4" />
          <AlertDescription className="text-base">
            {checkResult.reason === "MANUFACTURER_NEVER_AFFECTED" ? (
              "Le constructeur n'a jamais signalé de véhicules concernés."
            ) : checkResult.reason === "NO_REPORT" ? (
              "Nous n'avons aucun signalement d'airbags Takata installés dans ce véhicule. Cependant, les données sont basées sur les rapports des constructeurs et peuvent être incomplètes."
            ) : checkResult.reason === "YEAR_NOT_IN_RANGE" ? (
              <>
                Le modèle de votre véhicule (
                <strong>
                  {checkResult.modelInfo
                    ? formatModelInfoName(checkResult.modelInfo)
                    : "N/A"}
                </strong>
                ) était équipé d'airbags Takata de{" "}
                <strong>{checkResult.modelReport?.yearFrom}</strong> à{" "}
                <strong>{checkResult.modelReport?.yearTo}</strong>, ce qui
                n'inclut pas l'année de votre véhicule (
                <strong>
                  {checkResult.decodedVIN.info?.possibleModelYears.join(", ")}
                </strong>
                ).
              </>
            ) : null}
          </AlertDescription>
        </Alert>
      ) : (
        <Alert variant="destructive" data-cy="result">
          <AlertTriangle className="h-4 w-4" />
          <AlertDescription className="text-base">
            {checkResult.reason === "UNKNOWN_MANUFACTURER"
              ? "Nous n'avons pas pu déterminer si votre véhicule est concerné car le constructeur est inconnu."
              : checkResult.reason === "UNKNOWN_MODEL"
              ? "Nous n'avons pas pu déterminer si votre véhicule est concerné car le modèle est inconnu."
              : checkResult.reason === "UNKNOWN_YEAR"
              ? "Nous n'avons pas pu déterminer si votre véhicule est concerné car l'année est inconnue."
              : "Une erreur est survenue"}
          </AlertDescription>
        </Alert>
      )}
    </div>
  );
};
