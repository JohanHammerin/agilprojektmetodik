import { useEffect, useState, type SetStateAction } from "react";
import type { City } from "~/types/city";
import { PollenData } from "~/components/PollenData";
import { NavLink } from "react-router";
import { OtherCitySelect } from "~/components/otherCitySelecter";
import { Button } from "../components/Button";
import { OtherCities } from "~/types/other-city";

/**------------------------------------------------------------------------
 *                           HuvudSidan
 *------------------------------------------------------------------------**/

export function HomePage() {
  // State för att kunna ändra vilka städer som ska visas
  // Under "Andra städer"
  const [selectedCityId, setSelectedCityId] = useState<string>("");
  const [otherCties, setOtherCities] = useState(false);
  

  // State för att se din nuvarande stad:
  const [city, setCity] = useState<City>({
    name: "Nuvarande plats",
    latitude: "",
    longitude: "",
  });

  const [pollenData, setPollenData] = useState<any>(null);

  // State för att visa/dölja andra städer
  const [showOtherCities, setShowOtherCities] = useState(false); 

  useEffect(() => {
    getPosition();
  }, []);

  useEffect(() => {
    if (city.latitude && city.longitude) {
      getGoogleAPIData(city.latitude, city.longitude);
    }
  }, [city]);

  function toggleOtherCities() {
    setShowOtherCities((prev) => !prev);
  }

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
        // Lägg till , "WEED" för nedan för att lägga till ogräs
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

    // Toggle funktionen för att visa/dölja andra städer
    const toggleOtherCities = () => {
      setShowOtherCities(!showOtherCities);
    };
  }

  

  const getImageIcon = (name: string) => {
    switch (name) {
      case "Gräs":
        return "/img-pollenIcons/Gräs.svg";
      case "Träd":
        return "/img-pollenIcons/Björk.svg";
      case "Ogräs":
        return "/img-pollenIcons/Ogräs.svg";
    }
  };

 

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
            <div className="current-location-container">
              <h3>Dagens pollenhalter:</h3>

              <div className="current-location-pollen">
                {pollenData.map((pollen: any) => (
                  <div key={pollen.name} className="pollen-info">
                    {/* Pollen ikon för Gräs eller Träd */}
                    <div>
                      <img src={getImageIcon(pollen.name)} alt="" />
                    </div>

                    <div className="pollen-info-text">
                      {/* Polleninformation från det aktuella stället */}
                      <strong>{pollen.name}</strong>:{" "}
                      <strong>{pollen.value}</strong>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <p>Laddar pollendata...</p>
          )}
          <Button
            text={showOtherCities ? "Dölj andra städer" : "Visa andra städer"}
            onClick={toggleOtherCities}
          />
        </section>

        {showOtherCities && (
          <section className="other-cities-section">
             <div className="other-cities-header">
                <h2>Andra Städer</h2>
              
              </div>

              <div className="other-cities-button-container">
              {Object.keys(OtherCities).map((cityId) => {
              const city = OtherCities[cityId];
              
              return (
                
                <button
                key={cityId}
                onClick={(e) => {
                  e.preventDefault(); 
                  setSelectedCityId(cityId); 
                }}
                className={`other-cities-button ${selectedCityId === cityId ? "active" : ""}`}
              >
                {OtherCities[cityId].cityname} 
              </button>

                
              );
              })}

              </div>
            
            <div>

            </div>
              

            <div className="pollen-data-container">
              {Object.keys(OtherCities)
                .filter((cityId) => selectedCityId === cityId)
                .map((cityId) => (
                  <PollenData
                    key={cityId}
                    cityname={OtherCities[cityId].cityname}
                    image={OtherCities[cityId].image}
                    regionId={cityId}
                  />
                ))}
            </div>
              
          </section>

        )}
      </main>
      <footer className="footer">
        <h3>&#169;2025 Copyright Pollenkollen | All Rights Reserved</h3>
        <NavLink to="/about">Om oss</NavLink>
      </footer>
    </div>
  );
}
