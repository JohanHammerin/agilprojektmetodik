import { useEffect, useState, type SetStateAction } from "react";
import { CityID } from "~/types/city-id";
import type { City } from "~/types/city";
import { PollenData } from "~/components/PollenData";
import { NavLink } from "react-router";
import { cityToggle } from "~/components/cityToggle";

/**------------------------------------------------------------------------
 *                           HuvudSidan 
 *------------------------------------------------------------------------**/

export function HomePage() {
  
  // State för att kunna ändra vilka städer som ska visas
  // Under "Andra städer" 
  const [selectedCity, setSelectedCity] = useState<string[]>([]);

  // State för att se din nuvarande stad: 
  const [city, setCity] = useState<City>({
    name: "Nuvarande plats",
    latitude: "",
    longitude: "",
  });

  const [pollenData, setPollenData] = useState<any>(null);

  useEffect(() => {
    getPosition();
  }, []);

  useEffect(() => {
    if (city.latitude && city.longitude) {
      getGoogleAPIData(city.latitude, city.longitude);
    }
  }, [city]);

  function getPosition() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    } else {
      alert("Geolokalisering stöds inte");
    }

    function success(position: {
      coords: { latitude: number; longitude: number };
    }) {
      const latitude = position.coords.latitude.toString();
      const longitude = position.coords.longitude.toString();

      setCity({
        name: "Nuvarande plats",
        latitude: latitude,
        longitude: longitude,
      });
    }

    function error() {
      alert("Kunde inte hämta din plats");
    }
  }

  async function getGoogleAPIData(latitude: string, longitude: string) {
    try {
      const apiUrl = `https://pollen.googleapis.com/v1/forecast:lookup?key=AIzaSyCtlLqFo0V5PsARcnkEztv1kBXBt0xhYQk&location.longitude=${longitude}&location.latitude=${latitude}&days=1`;

      const response = await fetch(apiUrl);
      const data = await response.json();

      if (!data.dailyInfo?.[0]) {
        console.warn("Ingen pollendata hittades.");
        return;
      }

      const pollenTranslation: Record<string, string> = {
        GRASS: "Gräs",
        TREE: "Träd",
        WEED: "Ogräs",
      };

      const relevantPollen = data.dailyInfo[0].pollenTypeInfo?.filter(
        (pollen: any) => ["GRASS", "TREE", "WEED"].includes(pollen.code)
      );

      const extractedData = relevantPollen.map((pollen: any) => ({
        name: pollenTranslation[pollen.code] || pollen.displayName,
        value: pollen.indexInfo?.value ?? "Ingen data",
      }));

      setPollenData(extractedData);
    } catch (error) {
      console.error("Fel vid hämtning av pollendata:", error);
    }
  }

  return (
    <div className="index-container">
      <header className="header">
        <ul>
          <img src="/img/pklogoblack.png" alt="logo" />
        </ul>
        <h2>
          Välkommen till Pollenkollen! Sidan där du snabbt och enkelt ser
          pollenhalter i din närhet.
        </h2>
      </header>

      {/* Huvudsektion */}

      <main className="index-main">
        <section className="current-city">
          <h1>{city.name}</h1>

          {pollenData ? (
            <div>
              <h3>Dagens pollenhalter:</h3>
              <ul>
                {pollenData.map((pollen: any) => (
                  <li key={pollen.name}>
                    <strong>{pollen.name}</strong>:{" "}
                    <strong>{pollen.value}</strong>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <p>Laddar pollendata...</p>
          )}
        </section>

        {/* Sektion för de andra städerna (fasta platserna) */}
        
        
        
        <section className="other-cities-section">
          <div className="other-cities-header">
            <h1>Andra städer</h1>
          </div>

          <div className="other-cities-filter">
            {/* Titel för menyn */}
            <h3 className="other-cities-title">
              Välj vilka städer du vill ska visas: 
            </h3>

            
            <div className="other-cities-squares"> 
            {CityID.map((city) => (

              
              <button
                key={city.regionId}
                onClick={() => setSelectedCity((prev) => cityToggle(prev, city.regionId))}
                className={
                  `other-cities-button ${
                  selectedCity.includes
                        (city.regionId) 
                  ? "active" : ""
                }`}
              >
                {city.name}
              </button>
            ))}
            </div>
            
            
          </div>

          
          <section className="other-cities-article-section">
            {CityID.filter((city) =>
                selectedCity.includes(city.regionId)
            ).map((city) => (
              <article className="other-cities-article" 
              key={city.regionId}>
                <PollenData 
                     regionId={city.regionId} 
                     cityName={city.name} />
              </article>
            ))}
          </section> 
        </section>
      </main>

      <footer className="footer">
        <h3>&#169;2025 Copyright Pollenkollen | All Rights Reserved</h3>
        <NavLink to="/about">Om oss</NavLink>
      </footer>
    </div>
  );
}
