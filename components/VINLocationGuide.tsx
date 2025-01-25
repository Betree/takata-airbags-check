"use client";

import { HelpCircle } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export function VINLocationGuide() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="link"
          size="sm"
          className="text-xs h-auto pt-1 text-neutral-600"
        >
          <HelpCircle size="1em" className="mr-2" />
          Où trouver votre VIN ?
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Où trouver votre VIN</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <ul className="list-disc list-inside space-y-3 mt-3 text-sm">
          <li className="text-black">
            Sur la carte grise
            <ul className="list-[circle] list-inside ml-4 mt-2 space-y-1 text-neutral-600">
              <li>Format européen : dans la case &quot;E&quot;</li>
              <li>
                Ancien format : section &quot;Numéro d&apos;Identification&quot;
              </li>
            </ul>
          </li>

          <li className="text-black">
            Dans la voiture
            <ul className="list-[circle] list-inside ml-4 mt-2 space-y-1 text-neutral-600">
              <li>
                Sur le châssis (traverse du moteur ou tête d&apos;amortisseur)
              </li>
              <li>Sur la plaque constructeur</li>
              <li>Sur la partie basse du pare-brise</li>
              <li>Sous le capot</li>
              <li>Sur le bas-côté de la porte conducteur</li>
              <li>Dans le bac de la roue de secours</li>
              <li>Dans l&apos;ordinateur de bord (si équipé)</li>
            </ul>
          </li>
        </ul>
      </DialogContent>
    </Dialog>
  );
}
