import type { index } from "@react-router/dev/routes";
import { useEffect, useState } from "react";

// Import för pollendata interfacet vi kommer att använda
import type { PollenCityAndRegion, PollenData} from "~/types/pollen-interface";

// För att få ID -> Namn
import { PollenTypes } from "~/types/pollen-types";

export function PollenData({regionId, cityName}: PollenCityAndRegion) {
    // Används för att spara pollen datan
    const [pollenLevels, setpollenLevels] = useState<PollenData[]>([]);
    
    useEffect(() => {
        // Fetch 
        async function fetchData() {
            try{
            
            // Hämta data från API:et 
            const response = await fetch(`https://api.pollenrapporten.se/v1/forecasts?region_id=${regionId}&current=true`);
            
            // Hämta data och konvertera till json
            const data = await response.json();
            
            // Filtrera data = Visa bara data som har en nivå över 0
            const filtreradData = data.items[0].levelSeries.filter(
                
                (item: PollenData) => item.level > 0) || [];

                // Koppla PollenNummber -> PollenNamn från pollentypes.ts
            setpollenLevels(filtreradData);

            // Filtera datan så att det blir unika värden för att undvika att samma värde kommer '
            // upp flera gånger 

            const uniqueData = filtreradData.filter(
                (obj: PollenData, index: number, self:PollenData[]) =>
                index === self.findIndex((t: PollenData)=> t.pollenId === obj.pollenId)
            )

            setpollenLevels(uniqueData);
                
        
            


            // Ofiltrerad data = Allt visas: 

            // const levelSeries = data.items[0]?.levelSeries || [];
            // setpollenLevels(levelSeries);

            } 
            
            catch (error) {
                console.error("Error när du hämtade datan", error);
            }

    
        }

        fetchData();


    }, [regionId]);

    // Returnera 
    return (
        <article className="pollen-data">
            <h1>{cityName}</h1>

             {/* Visa pollenprognosdata i en lista */}
           <ul>
             {pollenLevels.map((item) => (
          
          <li key={item.pollenId}>
            {/* Visa pollenId och nivåer */}
            {PollenTypes[item.pollenId as keyof typeof PollenTypes]} - Level: {item.level}
          </li>
          ))}
         </ul>

        </article>
        

    )
}