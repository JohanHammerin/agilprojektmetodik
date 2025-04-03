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
      ingen: "public/img-pollenTypeLightWithLevels/Al (Ingen).png",
      låg: "public/img-pollenTypeLightWithLevels/Al (Låg).png",
      mellan: "public/img-pollenTypeLightWithLevels/Al (Mellan).png", 
      hög: "public/img-pollenTypeLightWithLevels/Al (zHög).png",
    }
  },
  "2a2a2a2a-2a2a-4a2a-aa2a-2a313a323533": {
    name: "Malörtsambrosia",
    images: {
      ingen: "public/img-pollenTypeLightWithLevels/Malörtsambrosia (Ingen).png",
      låg: "public/img-pollenTypeLightWithLevels/Malörtsambrosia (Låg).png",
      mellan: "public/img-pollenTypeLightWithLevels/Malörtsambrosia (Mellan).png", 
      hög: "public/img-pollenTypeLightWithLevels/Malörtsambrosia (zHög).png",
    }
  },
  "2a2a2a2a-2a2a-4a2a-aa2a-2a313a323530": {
    name: "Gråbro",
    images: {
      ingen: "public/img-pollenTypeLightWithLevels/Gråbo (Ingen).png",
      låg: "public/img-pollenTypeLightWithLevels/Gråbro (Låg).png",
      mellan: "public/img-pollenTypeLightWithLevels/Gråbro (Mellan).png", 
      hög: "public/img-pollenTypeLightWithLevels/Gråbro (zHög).png",
    }
  },
  "2a2a2a2a-2a2a-4a2a-aa2a-2a313a323332": {
    name: "Björk",
    images: {
      ingen: "public/img-pollenTypeLightWithLevels/Björk (Ingen).png",
      låg: "public/img-pollenTypeLightWithLevels/Björk (Låg).png",
      mellan: "public/img-pollenTypeLightWithLevels/Björk (Mellan).png", 
      hög: "public/img-pollenTypeLightWithLevels/Björk  (zHög).png",
      
    }
  },
  "2a2a2a2a-2a2a-4a2a-aa2a-2a313a323233": {
    name: "Hassel",
    images: {
      ingen: "public/img-pollenTypeLightWithLevels/Hassel (Ingen).png",
      låg: "public/img-pollenTypeLightWithLevels/Hassel (Låg).png",
      mellan: "public/img-pollenTypeLightWithLevels/Hassel (Mellan).png", 
      hög: "public/img-pollenTypeLightWithLevels/Hassel  (zHög).png",
      
    }
  },
  "2a2a2a2a-2a2a-4a2a-aa2a-2a313a323335": {
    name: "Bok",
    images: {
      ingen: "public/img-pollenTypeLightWithLevels/Bok (Ingen).png",
      låg: "public/img-pollenTypeLightWithLevels/Bok  (Låg).png",
      mellan: "public/img-pollenTypeLightWithLevels/Bok  (Mellan).png", 
      hög: "public/img-pollenTypeLightWithLevels/Bok  (zHög).png",

      
    }
  },
  "2a2a2a2a-2a2a-4a2a-aa2a-2a313a323433": {
    name: "Gräs",
    images: {
      ingen: "public/img-pollenTypeLightWithLevels/Gräs (Ingen).png",
      låg: "public/img-pollenTypeLightWithLevels/Gräs  (Låg).png",
      mellan: "public/img-pollenTypeLightWithLevels/Gräs (Mellan).png", 
      hög: "public/img-pollenTypeLightWithLevels/Gräs  (zHög).png",   
    }
  },
  "2a2a2a2a-2a2a-4a2a-aa2a-2a313a323337": {
    name: "Ek",
    images: {
      ingen: "public/img-pollenTypeLightWithLevels/Ek (Ingen).png",
      låg: "public/img-pollenTypeLightWithLevels/Ek (Låg).png",
      mellan: "public/img-pollenTypeLightWithLevels/Ek (Mellan).png", 
      hög: "public/img-pollenTypeLightWithLevels/Ek (zHög).png",
    }
  },
  "2a2a2a2a-2a2a-4a2a-aa2a-2a313a323330": {
    name: "Sälj och viden",
    images: {
      ingen: "public/img-pollenTypeLightWithLevels/Ek (Ingen).png",
      låg: "public/img-pollenTypeLightWithLevels/Ek (Låg).png",
      mellan: "public/img-pollenTypeLightWithLevels/Ek (Mellan).png", 
      hög: "public/img-pollenTypeLightWithLevels/Ek (zHög).png",
    }
  },
  "2a2a2a2a-2a2a-4a2a-aa2a-2a313a323331": {
    name: "Alm",
    images: {
      ingen: "public/img-pollenTypeLightWithLevels/Alm (Ingen).png",
      låg: "public/img-pollenTypeLightWithLevels/Alm (Låg).png",
      mellan: "public/img-pollenTypeLightWithLevels/Alm (Mellan).png", 
      hög: "public/img-pollenTypeLightWithLevels/Alm (zHög).png",
    }
  },
};
