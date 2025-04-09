import { useEffect, useState } from "react";
import type { OtherCityNameAndImage } from "~/types/other-city-interface";
// Import för pollendata interfacet vi kommer att använda
import type { PollenCityAndRegion, PollenData } from "~/types/pollen-interface";
// För att få ID -> Namn och bild
import { PollenTypes } from "~/types/pollen-types";
import { QuestionmarkBoxCurrentCity } from "./Current-City-API-Information";

export function PollenData({
  cityname,
  image,
  regionId,
}: OtherCityNameAndImage & { regionId: string }) {
  // För nivåer som är över 0
  const [pollenLevelsOverZero, setpollenLevelsOverZero] = useState<
    PollenData[]
  >([]);

  // För nivåer som är under 0
  const [pollenLevelsZero, setpollenLevelsZero] = useState<PollenData[]>([]);

  // TypeScript behöver att typen specificeras och kan inte vara tom
  type PollenLevel = "ingen" | "låg" | "mellan" | "hög";

  // Loading state för att visa att datan hämtas
  const [loading, setLoading] = useState(false);

  // Error state för att visa om något går fel
  const [error, setError] = useState<string | null>(null);

  // Funktion som returnerar en nivåtext baserat på låg, medel eller hög
  function getLevelText(level: number): PollenLevel {
    switch (true) {
      case level == 0:
        return "ingen";
      case level <= 2:
        return "låg";
      case level <= 4:
        return "mellan";
      case level <= 6:
        return "hög";
      default:
        return "ingen";
    }
  }

  useEffect(() => {
    // Fetch
    async function fetchData() {
      // Sätter loading till true för att visa att datan hämtas
      setLoading(true);
      try {
        // Hämta data från API:et
        const response = await fetch(
          `https://api.pollenrapporten.se/v1/forecasts?region_id=${regionId}&current=true`
        );

        // Hämta data och konvertera till json
        const data = await response.json();

        // Filtrera data = Visa bara data som har en nivå över 0
        const filtreradData = data.items[0]?.levelSeries || [];

        const overZeroData = filtreradData.filter(
          (item: PollenData) => item.level > 0
        );
        const zeroData = filtreradData.filter(
          (item: PollenData) => item.level === 0
        );

        // Filter unique values based on pollenId
        const uniqueData = filtreradData.filter(
          (item: PollenData, index: number, self: PollenData[]) =>
            index === self.findIndex((t) => t.pollenId === item.pollenId)
        );

        setpollenLevelsOverZero(
          uniqueData.filter((item: PollenData) => item.level > 0)
        );
        setpollenLevelsZero(
          uniqueData.filter((item: PollenData) => item.level === 0)
        );
      } catch (error) {
        console.error("Error när du hämtade datan", error);
      } finally {
        // Sätter loading till false när datan har hämtats
        setLoading(false);
      }
    }
    fetchData();
  }, [regionId]);

  // Returnera
  return (
    <div className="pollen-data">
      

      <ul className="pollen-list-container">
        
        {pollenLevelsOverZero.map((item) => {
         
          const pollen = PollenTypes[item.pollenId];

        return (
          <div key={item.pollenId}>
            
            
            <li className="pollen-list">
              <img
                src={pollen.images[getLevelText(item.level)]}
                alt={pollen.name}
                className="pollen-image"
              />
              <span className="pollen-name">{pollen.name}</span>
              <span className="pollen-name">{getLevelText(item.level)}</span>
            </li>
          </div>
        );
        })}
      </ul>
      
      

      
      {image && <img src={image} alt={cityname} className="city-image" />}
      
    </div>
  );
}
