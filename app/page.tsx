"use client";

import { VINChecker } from "@/components/VINChecker";
import { FAQ } from "@/components/FAQ";
import { List, Shield } from "lucide-react";
import AffectedModelsList from "@/components/AffectedModelsList";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 pt-8">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <Image
              src="/img/tatakata-logo.png"
              alt="Tatakata"
              width={100}
              height={100}
              className="drop-shadow-[0px_5px_5px_#24364630]"
            />
          </div>
          <h1 className="text-4xl font-bold mb-4 max-w-2xl mx-auto">
            Vérificateur d'Airbags Takata pour la France et les Outre-Mers
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
            Pour vérifier si votre véhicule est équipé d'airbags Takata
            défectueux.
          </p>

          <Card className="max-w-md mx-auto">
            <CardHeader>
              <CardTitle>Ce site est en maintenance. </CardTitle>
            </CardHeader>
            <CardContent>
              Rendez-vous sur{" "}
              <a
                href="https://www.ecologie.gouv.fr/rappel-airbag-takata"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
              >
                https://ecologie.gouv.fr/airbag-takata
              </a>{" "}
              ou{" "}
              <a
                href="https://www.francetvinfo.fr/replay-magazine/france-2/envoye-special/airbags-potentiellement-dangereux-votre-vehicule-est-il-concerne_7025981.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
              >
                https://franceinfo.fr/airbag-takata
              </a>{" "}
              pour consulter la liste des véhicules concernés.
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}
