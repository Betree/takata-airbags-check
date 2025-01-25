import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Takata Airbag vehicle check",
  description:
    "Check if your French vehicle is affected by the Takata airbag issue",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://tatakata.fr" />
        <title>
          Vérificateur d'Airbags Takata pour la France et les Outre-Mers
        </title>
        <meta
          name="description"
          content="Pour vérifier si votre véhicule est équipé d'airbags Takata défectueux."
        />

        <meta property="og:url" content="https://tatakata.fr" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Vérificateur d'Airbags Takata pour la France et les Outre-Mers"
        />
        <meta
          property="og:description"
          content="Pour vérifier si votre véhicule est équipé d'airbags Takata défectueux."
        />
        <meta property="og:image" content="/img/tatakata-cover.png" />
      </head>
      <body className={inter.className}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
