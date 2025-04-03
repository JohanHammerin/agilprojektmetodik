// Import av interfacet för pollen typer och bilder
import type { PollenTypeAndImage } from "./pollen-interface";

// Record = Gör varje string (id numret) till en nyckel som sedan hämtar name & img
// Den använder sig av ett interface som kräver
// Namn
// och bild

// Sen plockar den en bild för varje nivå nedan:

export const PollenTypes: Record<string, PollenTypeAndImage> = {
  "2a2a2a2a-2a2a-4a2a-aa2a-2a313a323236": {
    name: "Al",
    images: {
      ingen: "/Pollenikoner-dark-mode/Al (Ingen).png",
      låg: "/Pollenikoner-dark-mode/Al (Låg).png",
      mellan: "/Pollenikoner-dark-mode/Al (Mellan).png",
      hög: "/Pollenikoner-dark-mode/Al (Hög).png",
    },
  },
  "2a2a2a2a-2a2a-4a2a-aa2a-2a313a323533": {
    name: "Malörtsambrosia",
    images: {
      ingen: "/Pollenikoner-dark-mode/Malörtsambrosia (Ingen).png",
      låg: "/Pollenikoner-dark-mode/Malörtsambrosia (Låg).png",
      mellan: "/Pollenikoner-dark-mode/Malörtsambrosia (Mellan).png",
      hög: "/Pollenikoner-dark-mode/Malörtsambrosia (Hög).png",
    },
  },
  "2a2a2a2a-2a2a-4a2a-aa2a-2a313a323530": {
    name: "Gråbro",
    images: {
      ingen: "/Pollenikoner-dark-mode/Gråbo (Ingen).png",
      låg: "/Pollenikoner-dark-mode/Gråbro (Låg).png",
      mellan: "/Pollenikoner-dark-mode/Gråbro (Mellan).png",
      hög: "/Pollenikoner-dark-mode/Gråbro (Hög).png",
    },
  },
  "2a2a2a2a-2a2a-4a2a-aa2a-2a313a323332": {
    name: "Björk",
    images: {
      ingen: "/Pollenikoner-dark-mode/Björk (Ingen).png",
      låg: "/Pollenikoner-dark-mode/Björk (Låg).png",
      mellan: "/Pollenikoner-dark-mode/Björk (Mellan).png",
      hög: "/Pollenikoner-dark-mode/Björk  (Hög).png",
    },
  },
  "2a2a2a2a-2a2a-4a2a-aa2a-2a313a323233": {
    name: "Hassel",
    images: {
      ingen: "/Pollenikoner-dark-mode/Hassel (Ingen).png",
      låg: "/Pollenikoner-dark-mode/Hassel (Låg).png",
      mellan: "/Pollenikoner-dark-mode/Hassel (Mellan).png",
      hög: "/Pollenikoner-dark-mode/Hassel (Hög).png",
    },
  },
  "2a2a2a2a-2a2a-4a2a-aa2a-2a313a323335": {
    name: "Bok",
    images: {
      ingen: "/Pollenikoner-dark-mode/Bok (Ingen).png",
      låg: "/Pollenikoner-dark-mode/Bok  (Låg).png",
      mellan: "/Pollenikoner-dark-mode/Bok  (Mellan).png",
      hög: "/Pollenikoner-dark-mode/Bok (Hög).png",
    },
  },
  "2a2a2a2a-2a2a-4a2a-aa2a-2a313a323433": {
    name: "Gräs",
    images: {
      ingen: "/Pollenikoner-dark-mode/Gräs (Ingen).png",
      låg: "/Pollenikoner-dark-mode/Gräs  (Låg).png",
      mellan: "/Pollenikoner-dark-mode/Gräs (Mellan).png",
      hög: "/Pollenikoner-dark-mode/Gräs (Hög).png",
    },
  },
  "2a2a2a2a-2a2a-4a2a-aa2a-2a313a323337": {
    name: "Ek",
    images: {
      ingen: "/Pollenikoner-dark-mode/Ek (Ingen).png",
      låg: "/Pollenikoner-dark-mode/Ek (Låg).png",
      hög: "/Pollenikoner-dark-mode/Ek (Hög).png",
      mellan: "/Pollenikoner-dark-mode/Ek (Mellan).png",
    },
  },
  "2a2a2a2a-2a2a-4a2a-aa2a-2a313a323330": {
    name: "Sälj och viden",
    images: {
      ingen: "/Pollenikoner-dark-mode/Vide (Ingen).png",
      låg: "/Pollenikoner-dark-mode/Vide (Låg).png",
      mellan: "/Pollenikoner-dark-mode/Vide (Mellan).png",
      hög: "/Pollenikoner-dark-mode/Vide (Hög).png",
    },
  },
  "2a2a2a2a-2a2a-4a2a-aa2a-2a313a323331": {
    name: "Alm",
    images: {
      ingen: "/Pollenikoner-dark-mode/Alm (Ingen).png",
      låg: "/Pollenikoner-dark-mode/Alm (Låg).png",
      mellan: "/Pollenikoner-dark-mode/Alm (Mellan).png",
      hög: "/Pollenikoner-dark-mode/Alm (Hög).png",
    },
  },
};
