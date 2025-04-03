import { useEffect, useState, type SetStateAction } from "react";

import { useEffect, useState } from "react";
import { CityID } from "~/types/city-id";

import type { City } from "~/types/city";
import { PollenData } from "~/components/PollenData";
import { NavLink } from "react-router";
import { OtherCitySelect } from "~/components/otherCitySelecter";
import { Button } from "../components/Button";
import { OtherCities } from "~/types/other-city";

export function HomePage() {

  // State för att kunna ändra vilka städer som ska visas
  // Under "Andra städer"
  const [selectedCityId, setSelectedCityId] = useState<string>("");
  const [otherCties, setOtherCities] = useState(false);
  

  // State för att se din nuvarande stad:
  // State för valda städer
  const [selectedCity, setSelectedCity] = useState<string[]>([]);
  // State för pollendata
  const [pollenData, setPollenData] = useState<
    { name: string; value: string }[] | null
  >(null);
  // State för att visa/dölja andra städer
  const [showOtherCities, setShowOtherCities] = useState(false);
  // State för nuvarande position
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

  // Hämtar användarens position
  function getPosition(): void {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setCity({
            name: "Nuvarande plats",
            latitude: latitude.toString(),
            longitude: longitude.toString(),
          });
        },
        () => alert("Kunde inte hämta din plats")
      );
    } else {
      alert("Geolokalisering stöds inte");
    }
  }

  // Hämtar polleninformation från Googles API
  async function getGoogleAPIData(latitude: string, longitude: string) {
    try {
      const apiUrl = `https://pollen.googleapis.com/v1/forecast:lookup?key=AIzaSyCtlLqFo0V5PsARcnkEztv1kBXBt0xhYQk&location.longitude=${longitude}&location.latitude=${latitude}&days=1`;
      const response = await fetch(apiUrl);
      const data = await response.json();

      if (!data.dailyInfo?.[0]) {
        console.warn("Ingen pollendata hittades.");
        setPollenData(null);
        return;
      }

      // Översättning av pollen-typer
      const pollenTranslation: Record<string, string> = {
        GRASS: "Gräs",
        TREE: "Träd",
        WEED: "Ogräs",
      };

      // Filtrerar och extraherar relevant pollendata
      const extractedData = data.dailyInfo[0].pollenTypeInfo
        ?.filter((pollen: any) => pollenTranslation[pollen.code])
        .map((pollen: any) => ({
          name: pollenTranslation[pollen.code],
          value: pollen.indexInfo?.value ?? "Ingen data",
        }));

      setPollenData(extractedData || []);
    } catch (error) {
      console.error("Fel vid hämtning av pollendata:", error);
      setPollenData(null);
    }
  }


  // Returnerar bildikon för pollen
  const getImageIcon = (name: string) =>
    ({
      Gräs: "/img-pollenIcons/Gräs.svg",
      Träd: "/img-pollenIcons/Björk.svg",
      Ogräs: "/img-pollenIcons/Ogräs.svg",
    }[name]);

  // Hämtar position vid sidladdning
  useEffect(getPosition, []);

  // Hämtar polleninfo när positionen uppdateras
  useEffect(() => {
    if (city.latitude && city.longitude)
      getGoogleAPIData(city.latitude, city.longitude);
  }, [city]);

  // Växlar visning av andra städer
  function toggleOtherCities() {
    setShowOtherCities((prev) => !prev);
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
            <div className="current-location-container">
              <h3>Dagens pollenhalter:</h3>

              <div className="current-location-pollen">
                {pollenData.map((pollen: any) => (
                  <div key={pollen.name} className="pollen-info">
                    {/* Pollen ikon för Gräs eller Träd */}
                    <div>
                      <img src={getImageIcon(pollen.name)} alt="pollen-image" />
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
