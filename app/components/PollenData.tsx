import { useEffect, useState } from "react";
// Import för pollendata interfacet vi kommer att använda
import type { PollenCityAndRegion, PollenData } from "~/types/pollen-interface";
// För att få ID -> Namn
import { PollenTypes } from "~/types/pollen-types";

export function PollenData({ regionId, cityName }: PollenCityAndRegion) {
  // Används för att spara pollen datan
  const [pollenLevels, setpollenLevels] = useState<PollenData[]>([]);

  // Funktion som returnerar en nivåtext baserat på låg, medel eller hög
  function getLevelText(level: number) {
    if (level === 0) {
      return "Ingen nivå";
    } else if (level <= 1) {
      return "Låg nivå";
    } else if (level <= 2) {
      return "Medel nivå";
    } else {
      return "Hög nivå";
    }
  }

  useEffect(() => {
    // Fetch
    async function fetchData() {
      try {
        // Hämta data från API:et
        const response = await fetch(
          `https://api.pollenrapporten.se/v1/forecasts?region_id=${regionId}&current=true`
        );

        // Hämta data och konvertera till json
        const data = await response.json();

        // Filtrera data = Visa bara data som har en nivå över 0
        const filtreradData =
          data.items[0].levelSeries.filter(
            (item: PollenData) => item.level > 0
          ) || [];

        // Koppla PollenNummber -> PollenNamn från pollentypes.ts
        setpollenLevels(filtreradData);

        // Filtera datan så att det blir unika värden för att undvika att samma värde kommer '
        // upp flera gånger

        const uniqueData = filtreradData.filter(
          (obj: PollenData, index: number, self: PollenData[]) =>
            index ===
            self.findIndex((t: PollenData) => t.pollenId === obj.pollenId)
        );

        setpollenLevels(uniqueData);

        // Ofiltrerad data = Allt visas:

        // const levelSeries = data.items[0]?.levelSeries || [];
        // setpollenLevels(levelSeries);
      } catch (error) {
        console.error("Error när du hämtade datan", error);
      }
    }
    fetchData();
  }, [regionId]);

  // Returnera
  return (
    <article>
      {/* Rubrik på Stad på Pollen */}
      <div className="pollen-header">
        <h1>{cityName}</h1>
      </div>

      {/* Visa PollenNivåer */}
      <div className="pollen-list">
        <ul>
          {pollenLevels.map((item) => {
            const pollen = PollenTypes[item.pollenId];
            return (
              <li key={item.pollenId}>
                <img
                  src={pollen.img}
                  alt={pollen.name}
                  className="pollen-logo"
                />

                <div className="pollen-type-text">
                  {pollen.name} - {getLevelText(item.level)}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </article>
  );
}
