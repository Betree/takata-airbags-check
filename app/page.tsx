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
          <Dialog>
            <DialogTrigger asChild>
              <Button
                variant="outline"
                className="text-wrap h-auto sm:h-10 sm:text-sm text-xs"
              >
                <List size={16} className="mr-2" />
                Voir la liste des véhicules concernés
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>Liste des véhicules concernés</DialogTitle>
              </DialogHeader>
              <DialogDescription>
                <ScrollArea className="sm:h-[60vh] border-t">
                  <AffectedModelsList className="p-4" />
                </ScrollArea>
              </DialogDescription>
            </DialogContent>
          </Dialog>
        </div>

        <VINChecker />
        <Separator className="max-w-2xl mx-auto my-12" />
        <FAQ />
      </div>
    </main>
  );
}
