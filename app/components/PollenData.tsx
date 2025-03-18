import { useEffect, useState } from "react";
// Import för pollendata interfacet vi kommer att använda
import type { PollenCityAndRegion, PollenData } from "~/types/pollendata";




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
            const filtreradData = data.items[0]?.levelSeries.filter(
                (item: PollenData) => item.level > 0
            ) || [];
            setpollenLevels(filtreradData);
            


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
        <div>
        {/* Header för att visa stadsnamnet */}
        <h1>{cityName} Pollen Data</h1>

        {/* Visa pollenprognosdata i en lista */}
        <ul>
            {pollenLevels.map((item) => (
                <li key={item.pollenId}>
                    {/* Visa pollenId, level och time */}
                    Pollen ID: {item.pollenId} - Level: {item.level} - Time: {item.time}
                </li>
            ))}
        </ul>
    </div>

    )
}