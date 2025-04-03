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
      ingen: "/PollenIkoner-dark-mode/Al (Ingen).png",
      låg: "/PollenIkoner-dark-mode/Al (Låg).png",
      mellan: "/PollenIkoner-dark-mode/Al (Mellan).png",
      hög: "/PollenIkoner-dark-mode/Al (Hög).png",
    },
  },
  "2a2a2a2a-2a2a-4a2a-aa2a-2a313a323533": {
    name: "Malörtsambrosia",
    images: {
      ingen: "/PollenIkoner-dark-mode/Malörtsambrosia (Ingen).png",
      låg: "/PollenIkoner-dark-mode/Malörtsambrosia (Låg).png",
      mellan: "/PollenIkoner-dark-mode/Malörtsambrosia (Mellan).png",
      hög: "/PollenIkoner-dark-mode/Malörtsambrosia (Hög).png",
    },
  },
  "2a2a2a2a-2a2a-4a2a-aa2a-2a313a323530": {
    name: "Gråbro",
    images: {
      ingen: "/PollenIkoner-dark-mode/Gråbo (Ingen).png",
      låg: "/PollenIkoner-dark-mode/Gråbro (Låg).png",
      mellan: "/PollenIkoner-dark-mode/Gråbro (Mellan).png",
      hög: "/PollenIkoner-dark-mode/Gråbro (Hög).png",
    },
  },
  "2a2a2a2a-2a2a-4a2a-aa2a-2a313a323332": {
    name: "Björk",
    images: {
      ingen: "/PollenIkoner-dark-mode/Björk (Ingen).png",
      låg: "/PollenIkoner-dark-mode/Björk (Låg).png",
      mellan: "/PollenIkoner-dark-mode/Björk (Mellan).png",
      hög: "/PollenIkoner-dark-mode/Björk  (Hög).png",
    },
  },
  "2a2a2a2a-2a2a-4a2a-aa2a-2a313a323233": {
    name: "Hassel",
    images: {
      ingen: "/PollenIkoner-dark-mode/Hassel (Ingen).png",
      låg: "/PollenIkoner-dark-mode/Hassel (Låg).png",
      mellan: "/PollenIkoner-dark-mode/Hassel (Mellan).png",
      hög: "/PollenIkoner-dark-mode/Hassel (Hög).png",
    },
  },
  "2a2a2a2a-2a2a-4a2a-aa2a-2a313a323335": {
    name: "Bok",
    images: {
      ingen: "/PollenIkoner-dark-mode/Bok (Ingen).png",
      låg: "/PollenIkoner-dark-mode/Bok  (Låg).png",
      mellan: "/PollenIkoner-dark-mode/Bok  (Mellan).png",
      hög: "/PollenIkoner-dark-mode/Bok (Hög).png",
    },
  },
  "2a2a2a2a-2a2a-4a2a-aa2a-2a313a323433": {
    name: "Gräs",
    images: {
      ingen: "/PollenIkoner-dark-mode/Gräs (Ingen).png",
      låg: "/PollenIkoner-dark-mode/Gräs  (Låg).png",
      mellan: "/PollenIkoner-dark-mode/Gräs (Mellan).png",
      hög: "/PollenIkoner-dark-mode/Gräs (Hög).png",
    },
  },
  "2a2a2a2a-2a2a-4a2a-aa2a-2a313a323337": {
    name: "Ek",
    images: {
      ingen: "/PollenIkoner-dark-mode/Ek (Ingen).png",
      låg: "/PollenIkoner-dark-mode/Ek (Låg).png",
      hög: "/PollenIkoner-dark-mode/Ek (Hög).png",
      mellan: "/PollenIkoner-dark-mode/Ek (Mellan).png",
    },
  },
  "2a2a2a2a-2a2a-4a2a-aa2a-2a313a323330": {
    name: "Sälj och viden",
    images: {
      ingen: "/PollenIkoner-dark-mode/Vide (Ingen).png",
      låg: "/PollenIkoner-dark-mode/Vide (Låg).png",
      mellan: "/PollenIkoner-dark-mode/Vide (Mellan).png",
      hög: "/PollenIkoner-dark-mode/Vide (Hög).png",
    },
  },
  "2a2a2a2a-2a2a-4a2a-aa2a-2a313a323331": {
    name: "Alm",
    images: {
      ingen: "/PollenIkoner-dark-mode/Alm (Ingen).png",
      låg: "/PollenIkoner-dark-mode/Alm (Låg).png",
      mellan: "/PollenIkoner-dark-mode/Alm (Mellan).png",
      hög: "/PollenIkoner-dark-mode/Alm (Hög).png",
    },
  },
};
