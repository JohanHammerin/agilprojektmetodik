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
      ingen: "public/PollenIkoner-dark-mode/Al (Ingen).png",
      låg: "public/PollenIkoner-dark-mode/Al (Låg).png",
      mellan: "public/PollenIkoner-dark-mode/Al (Mellan).png",
      hög: "public/PollenIkoner-dark-mode/Al (Hög).png",
    },
  },
  "2a2a2a2a-2a2a-4a2a-aa2a-2a313a323533": {
    name: "Malörtsambrosia",
    images: {
      ingen: "public/PollenIkoner-dark-mode/Malörtsambrosia (Ingen).png",
      låg: "public/PollenIkoner-dark-mode/Malörtsambrosia (Låg).png",
      mellan: "public/PollenIkoner-dark-mode/Malörtsambrosia (Mellan).png",
      hög: "public/PollenIkoner-dark-mode/Malörtsambrosia (Hög).png",
    },
  },
  "2a2a2a2a-2a2a-4a2a-aa2a-2a313a323530": {
    name: "Gråbro",
    images: {
      ingen: "public/PollenIkoner-dark-mode/Gråbo (Ingen).png",
      låg: "public/PollenIkoner-dark-mode/Gråbro (Låg).png",
      mellan: "public/PollenIkoner-dark-mode/Gråbro (Mellan).png",
      hög: "public/PollenIkoner-dark-mode/Gråbro (Hög).png",
    },
  },
  "2a2a2a2a-2a2a-4a2a-aa2a-2a313a323332": {
    name: "Björk",
    images: {
      ingen: "public/PollenIkoner-dark-mode/Björk (Ingen).png",
      låg: "public/PollenIkoner-dark-mode/Björk (Låg).png",
      mellan: "public/PollenIkoner-dark-mode/Björk (Mellan).png",
      hög: "public/PollenIkoner-dark-mode/Björk  (Hög).png",
    },
  },
  "2a2a2a2a-2a2a-4a2a-aa2a-2a313a323233": {
    name: "Hassel",
    images: {
      ingen: "public/PollenIkoner-dark-mode/Hassel (Ingen).png",
      låg: "public/PollenIkoner-dark-mode/Hassel (Låg).png",
      mellan: "public/PollenIkoner-dark-mode/Hassel (Mellan).png",
      hög: "public/PollenIkoner-dark-mode/Hassel (Hög).png",
    },
  },
  "2a2a2a2a-2a2a-4a2a-aa2a-2a313a323335": {
    name: "Bok",
    images: {
      ingen: "public/PollenIkoner-dark-mode/Bok (Ingen).png",
      låg: "public/PollenIkoner-dark-mode/Bok  (Låg).png",
      mellan: "public/PollenIkoner-dark-mode/Bok  (Mellan).png",
      hög: "public/PollenIkoner-dark-mode/Bok (Hög).png",
    },
  },
  "2a2a2a2a-2a2a-4a2a-aa2a-2a313a323433": {
    name: "Gräs",
    images: {
      ingen: "public/PollenIkoner-dark-mode/Gräs (Ingen).png",
      låg: "public/PollenIkoner-dark-mode/Gräs  (Låg).png",
      mellan: "public/PollenIkoner-dark-mode/Gräs (Mellan).png",
      hög: "public/PollenIkoner-dark-mode/Gräs (Hög).png",
    },
  },
  "2a2a2a2a-2a2a-4a2a-aa2a-2a313a323337": {
    name: "Ek",
    images: {
      ingen: "public/PollenIkoner-dark-mode/Ek (Ingen).png",
      låg: "public/PollenIkoner-dark-mode/Ek (Låg).png",
      mellan: "public/PollenIkoner-dark-mode/Ek (Mellan).png",
      hög: "public/PollenIkoner-dark-mode/Ek (Hög).png",
    },
  },
  "2a2a2a2a-2a2a-4a2a-aa2a-2a313a323330": {
    name: "Sälj och viden",
    images: {
      ingen: "public/PollenIkoner-dark-mode/Vide (Ingen).png",
      låg: "public/PollenIkoner-dark-mode/Vide (Låg).png",
      mellan: "public/PollenIkoner-dark-mode/Vide (Mellan).png",
      hög: "public/PollenIkoner-dark-mode/Vide (Hög).png",
    },
  },
  "2a2a2a2a-2a2a-4a2a-aa2a-2a313a323331": {
    name: "Alm",
    images: {
      ingen: "public/PollenIkoner-dark-mode/Alm (Ingen).png",
      låg: "public/PollenIkoner-dark-mode/Alm (Låg).png",
      mellan: "public/PollenIkoner-dark-mode/Alm (Mellan).png",
      hög: "public/PollenIkoner-dark-mode/Alm (Hög).png",
    },
  },
};
