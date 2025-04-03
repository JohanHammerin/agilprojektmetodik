import { useEffect, useState } from "react";
import type { OtherCityNameAndImage } from "~/types/other-city-interface";
// Import för pollendata interfacet vi kommer att använda
import type { PollenCityAndRegion, PollenData} from "~/types/pollen-interface";
// För att få ID -> Namn och bild
import { PollenTypes } from "~/types/pollen-types";

export function PollenData({cityname, image, regionId}: OtherCityNameAndImage & { regionId: string }) {
    // För nivåer som är över 0
    const [pollenLevelsOverZero, setpollenLevelsOverZero] = useState<PollenData[]>([]);

    // För nivåer som är under 0 
    const [pollenLevelsZero, setpollenLevelsZero] = useState<PollenData[]>([]);

    // TypeScript behöver att typen specificeras och kan inte vara tom 
    type PollenLevel = "ingen" | "låg" | "mellan" | "hög"; 

    // Loading state för att visa att datan hämtas
    const [loading, setLoading] = useState(false);

    // Error state för att visa om något går fel 
    const [error, setError] = useState<string | null>(null);

    // Funktion som returnerar en nivåtext baserat på låg, medel eller hög 
    function getLevelText(level: number): PollenLevel{
        switch (true){
            case level == 0 :
            return "ingen"
            case level <= 2: 
            return "låg"
            case level <=4: 
            return "mellan"
            case level <=6: 
            return "hög"
            default: 
            return "ingen"
        }
    }
    
    useEffect(() => {
        // Fetch 
        async function fetchData() {
            // Sätter loading till true för att visa att datan hämtas
            setLoading(true);
            try{
            
            // Hämta data från API:et 
            const response = await fetch(`https://api.pollenrapporten.se/v1/forecasts?region_id=${regionId}&current=true`);
            
            // Hämta data och konvertera till json
            const data = await response.json();
            
            // Filtrera data = Visa bara data som har en nivå över 0
            const filtreradData = data.items[0]?.levelSeries || []; 

            const overZeroData = filtreradData.filter((item: PollenData) => item.level > 0);
                const zeroData = filtreradData.filter((item: PollenData) => item.level === 0);

            
            
            // Filter unique values based on pollenId
            const uniqueData = filtreradData.filter(
                (item: PollenData, index: number, self: PollenData[]) =>
                    index === self.findIndex((t) => t.pollenId === item.pollenId)
            );

            setpollenLevelsOverZero(uniqueData.filter((item: PollenData) => item.level > 0));
            setpollenLevelsZero(uniqueData.filter((item: PollenData) => item.level === 0));
            



            } 
            
            catch (error) {
                console.error("Error när du hämtade datan", error);
            }

            finally {
                // Sätter loading till false när datan har hämtats
                setLoading(false);
            }

        }
        fetchData();
    }, [regionId]);

    // Returnera 
    return (
        <div className="pollen-data">
            {image && <img src={image} alt={cityname} className="city-image" />}
            
            
             <ul>
             
                   {pollenLevelsOverZero.map((item) => {
                       const pollen = PollenTypes[item.pollenId];
                       
                       return(
                        
                           <li key={item.pollenId} className="pollen-list">
                            
                            
                                <img 
                               src={pollen.images[getLevelText(item.level)]}
                               alt={pollen.name} 
                               className="pollen-logo"
                               />
                               
                               
                               <span className="pollen-name">{pollen.name}</span>
                               <p className="pollen-level">{getLevelText(item.level)}</p>
                               

                           </li>
                       );
                   })}
                   
               </ul>
               

        </div>
                
    )
}
=======
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
