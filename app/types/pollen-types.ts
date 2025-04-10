// Import av interfacet för pollen typer och bilder
import type { PollenTypeAndImage } from "./pollen-interface";

// Record = Gör varje string (id numret) till en nyckel som sedan hämtar name & img
// Den använder sig av ett interface som kräver
// Namn
// och bild

// Sen plockar den en bild för varje nivå nedan:

// Darkmode
export const PollenTypesDark: Record<string, PollenTypeAndImage> = {
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
    name: "Sälg och viden",
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

// Lightmode
const PollenTypesLight: Record<string, PollenTypeAndImage> = {
  "2a2a2a2a-2a2a-4a2a-aa2a-2a313a323236": {
    name: "Al",
    images: { 
      ingen: "/Pollenikoner-light-mode/Al (Ingen).png",
      låg: "/Pollenikoner-light-mode/Al (Låg).png",
      mellan: "/Pollenikoner-light-mode/Al (Mellan).png",
      hög: "/Pollenikoner-light-mode/Al (Hög).png",
    },
  },
  "2a2a2a2a-2a2a-4a2a-aa2a-2a313a323533": {
    name: "Malörtsambrosia",
    images: {
      ingen: "/Pollenikoner-light-mode/Malörtsambrosia (Ingen).png",
      låg: "/Pollenikoner-light-mode/Malörtsambrosia (Låg).png",
      mellan: "/Pollenikoner-light-mode/Malörtsambrosia (Mellan).png",
      hög: "/Pollenikoner-light-mode/Malörtsambrosia (Hög).png",
    },
  },
  "2a2a2a2a-2a2a-4a2a-aa2a-2a313a323530": {
    name: "Gråbro",
    images: {
      ingen: "/Pollenikoner-light-mode/Gråbo (Ingen).png",
      låg: "/Pollenikoner-light-mode/Gråbro (Låg).png",
      mellan: "/Pollenikoner-light-mode/Gråbro (Mellan).png",
      hög: "/Pollenikoner-light-mode/Gråbro (Hög).png",
    },
  },
  "2a2a2a2a-2a2a-4a2a-aa2a-2a313a323332": {
    name: "Björk",
    images: {
      ingen: "/Pollenikoner-light-mode/Björk (Ingen).png",
      låg: "/Pollenikoner-light-mode/Björk (Låg).png",
      mellan: "/Pollenikoner-light-mode/Björk (Mellan).png",
      hög: "/Pollenikoner-light-mode/Björk  (Hög).png",
    },
  },
  "2a2a2a2a-2a2a-4a2a-aa2a-2a313a323233": {
    name: "Hassel",
    images: {
      ingen: "/Pollenikoner-light-mode/Hassel (Ingen).png",
      låg: "/Pollenikoner-light-mode/Hassel (Låg).png",
      mellan: "/Pollenikoner-light-mode/Hassel (Mellan).png",
      hög: "/Pollenikoner-light-mode/Hassel (Hög).png",
    },
  },
  "2a2a2a2a-2a2a-4a2a-aa2a-2a313a323335": {
    name: "Bok",
    images: {
      ingen: "/Pollenikoner-light-mode/Bok (Ingen).png",
      låg: "/Pollenikoner-light-mode/Bok  (Låg).png",
      mellan: "/Pollenikoner-light-mode/Bok  (Mellan).png",
      hög: "/Pollenikoner-light-mode/Bok (Hög).png",
    },
  },
  "2a2a2a2a-2a2a-4a2a-aa2a-2a313a323433": {
    name: "Gräs",
    images: {
      ingen: "/Pollenikoner-light-mode/Gräs (Ingen).png",
      låg: "/Pollenikoner-light-mode/Gräs  (Låg).png",
      mellan: "/Pollenikoner-light-mode/Gräs (Mellan).png",
      hög: "/Pollenikoner-light-mode/Gräs (Hög).png",
    },
  },
  "2a2a2a2a-2a2a-4a2a-aa2a-2a313a323337": {
    name: "Ek",
    images: {
      ingen: "/Pollenikoner-light-mode/Ek (Ingen).png",
      låg: "/Pollenikoner-light-mode/Ek (Låg).png",
      hög: "/Pollenikoner-light-mode/Ek (Hög).png",
      mellan: "/Pollenikoner-light-mode/Ek (Mellan).png",
    },
  },
  "2a2a2a2a-2a2a-4a2a-aa2a-2a313a323330": {
    name: "Sälg och viden",
    images: {
      ingen: "/Pollenikoner-light-mode/Vide (Ingen).png",
      låg: "/Pollenikoner-light-mode/Vide (Låg).png",
      mellan: "/Pollenikoner-light-mode/Vide (Mellan).png",
      hög: "/Pollenikoner-light-mode/Vide (Hög).png",
    },
  },
  "2a2a2a2a-2a2a-4a2a-aa2a-2a313a323331": {
    name: "Alm",
    images: {
      ingen: "/Pollenikoner-light-mode/Alm (Ingen).png",
      låg: "/Pollenikoner-light-mode/Alm (Låg).png",
      mellan: "/Pollenikoner-light-mode/Alm (Mellan).png",
      hög: "/Pollenikoner-light-mode/Alm (Hög).png",
    },
  },
};


