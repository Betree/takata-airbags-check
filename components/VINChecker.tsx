"use client";

import { useState } from "react";
import { checkAffectedCar } from "@/lib/vin";
import { VINForm } from "./VINForm";
import { VINCheckResultDetails } from "./VINCheckResultDetails";
import { Disclaimers } from "./Disclaimers";
import { Card, CardContent } from "./ui/card";
import { VinCheckResultAffectedMessage } from "./VinCheckResultAffectedMessage";

export function VINChecker() {
  const [checkResult, setCheckResult] = useState<ReturnType<
    typeof checkAffectedCar
  > | null>(null);

  const onSubmit = async (vin: string) => {
    const result = checkAffectedCar(vin);
    setCheckResult(result);
  };

  return (
    <div className="w-full max-w-2xl mx-auto space-y-8">
      <Card>
        <CardContent className="pt-6">
          <VINForm onSubmit={onSubmit} />
        </CardContent>
      </Card>
      {checkResult && (
        <div className="animate-fadeIn">
          <VinCheckResultAffectedMessage
            checkResult={checkResult}
            className="mb-4"
          />
          <VINCheckResultDetails checkResult={checkResult} />
          <Disclaimers />
        </div>
      )}
    </div>
  );
}
