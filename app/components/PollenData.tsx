import { useEffect, useState } from "react";
// Import för pollendata interfacet vi kommer att använda
import type { PollenCityAndRegion, PollenData} from "~/types/pollen-interface";
// För att få ID -> Namn
import { PollenTypes } from "~/types/pollen-types";

export function PollenData({regionId, cityName}: PollenCityAndRegion) {
    // Används för att spara pollen datan
    const [pollenLevels, setpollenLevels] = useState<PollenData[]>([]);

    // TypeScript behöver att typen specificeras och kan inte vara tom 
    type PollenLevel = "none" | "low" | "medium" | "high" | "unknown";

    // Funktion som returnerar en nivåtext baserat på låg, medel eller hög 
    function getLevelText(level: number): PollenLevel{
        switch (true){
            case level == 0 :
            return "none"
            case level <= 2: 
            return "low"
            case level <=4: 
            return "medium"
            case level <=6: 
            return "high"
            default: 
            return "unknown"
        }
    }
    
    useEffect(() => {
        // Fetch 
        async function fetchData() {
            try{
            
            // Hämta data från API:et 
            const response = await fetch(`https://api.pollenrapporten.se/v1/forecasts?region_id=${regionId}&current=true`);
            
            // Hämta data och konvertera till json
            const data = await response.json();
            
            // Filtrera data = Visa bara data som har en nivå över 0
            const filtreradData = data.items[0]?.levelSeries || [];
            
            // Filter unique values based on pollenId
            const uniqueData = filtreradData.filter(
                (item: PollenData, index: number, self: PollenData[]) =>
                    index === self.findIndex((t) => t.pollenId === item.pollenId)
            );

            setpollenLevels(uniqueData);

            // Filtera datan så att det blir unika värden för att undvika att samma värde kommer '
            // upp flera gånger 

            // Removed unused uniqueData variable


            } 
            
            catch (error) {
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
                        
                        return(
                            <li key={item.pollenId}>
                                <img 
                                src={pollen.images[getLevelText(item.level)]}
                                alt={pollen.name} 
                                className="pollen-logo"/>

                                <div className="pollen-type-text">
                                    {pollen.name} 

                                </div>

                            </li>

                        );
                    })}
                </ul>
            </div>
            
        </article>
        

    )
}