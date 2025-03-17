// PollenAPI test - Ska se att allt fungerar via console-log innan jag fortsätter 

import React, { useEffect, useState } from "react"; 

const StockholmPollenTest = () => {
    useEffect(() => {
        // Hämta pollendata 
        fetch('https://api.pollenrapporten.se/v1/forecasts?region_id=2a2a2a2a-2a2a-4a2a-aa2a-2a2a2a303a32&current=true')
        // Konverterar till json
        .then(response => response.json())
        // Datan skrivs ut
        .then((data) => {
            console.log('Pollen data: ', data);
        })
        // Felhantering om det blir något fel 
        .catch((error) => {
            console.error('Error vid hämtande av data ', error);
        });
    }, []);

    return (
        <div>
            <h1>Stockholm Pollen Test</h1>
        </div>
    );

}

export default StockholmPollenTest;
