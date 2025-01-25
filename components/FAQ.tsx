"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQ() {
  return (
    <div className="max-w-lg mx-auto">
      <h2 className="text-2xl font-semibold mb-4 text-center">
        Questions fréquentes
      </h2>
      <Accordion type="single" collapsible className="text-sm">
        <AccordionItem value="why">
          <AccordionTrigger>Pourquoi ce site web ?</AccordionTrigger>
          <AccordionContent>
            Les formulaires fournis par les constructeurs sont souvent
            incomplets ou trompeurs : ils vous indiquent que votre véhicule
            n'est pas concerné par une campagne de rappel même si un airbag
            Takata défectueux y est installé. Ce site se base sur les données
            publiques de véhicules impactés (voir la section{" "}
            <i className="font-medium">D'où proviennent les données ?</i>) pour
            déterminer si votre véhicule possède un airbag Takata défectueux,
            qu'il soit concerné par une campagne de rappel ou non.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="privacy">
          <AccordionTrigger>
            Qu'en est-il de la confidentialité ?
          </AccordionTrigger>
          <AccordionContent>
            Ce site ne collecte aucune donnée personnelle. Vérifiez par
            vous-même, le code source est disponible sur{" "}
            <a
              href="https://github.com/Betree/takata-airbags-check"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-blue-500"
            >
              GitHub
            </a>
            .
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="data">
          <AccordionTrigger>D'où proviennent les données ?</AccordionTrigger>
          <AccordionContent>
            Les données proviennent principalement de{" "}
            <a
              href="https://www.francetvinfo.fr/replay-magazine/france-2/envoye-special/airbags-potentiellement-dangereux-votre-vehicule-est-il-concerne_7025981.html"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-blue-500"
            >
              la liste publiée
            </a>{" "}
            par les équipes d'Envoyé Spécial sur France 2. Il sera également mis
            à jour au fur et à mesure des publications sur{" "}
            <a
              href="https://www.ecologie.gouv.fr/rappel-airbag-takata"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-blue-500"
            >
              le site du ministère de l'écologie
            </a>
            , si les constructeurs jouent le jeu.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="reuse">
          <AccordionTrigger>Puis-je réutiliser ce projet ?</AccordionTrigger>
          <AccordionContent>
            Oui, c'est un projet open-source (Licence EUPL). Vous pouvez
            réutiliser{" "}
            <a
              href="https://github.com/Betree/takata-airbags-check"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-blue-500"
            >
              le code source et les données
            </a>{" "}
            comme bon vous semble.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="who">
          <AccordionTrigger>Qui est derrière ce projet ?</AccordionTrigger>
          <AccordionContent>
            <a
              href="https://benjamin.piouffle.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-blue-500"
            >
              Benjamin Piouffle
            </a>
            , développeur logiciel et citoyen engagé.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
