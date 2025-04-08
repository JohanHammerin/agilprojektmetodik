import { useEffect, useState } from "react";

import type { City } from "~/types/city";
import { PollenData } from "~/components/PollenData";
import { NavLink } from "react-router";
import { OtherCities } from "~/types/other-city";
import { ActionButton } from "~/components/ActionButton";

export function HomePage() {
  // State för att kunna ändra vilka städer som ska visas
  // Under "Andra städer"
  const [selectedCityId, setSelectedCityId] = useState<string>("");

  // State för att se din nuvarande stad:
  // State för valda städer
  // State för pollendata
  const [pollenData, setPollenData] = useState<
    { name: string; value: string }[] | null
  >(null);
  // State för att visa/dölja andra städer
  // State för nuvarande position
  const [city, setCity] = useState<City>({
    name: "",
    latitude: "",
    longitude: "",
  });

  const [locationFlag, setLocationFlag] = useState<boolean>(false);
  const [showPollenSection, setShowPollenSection] = useState<boolean>(false); // State för actionknapp

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
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCity({
            name: "Aktuella pollenhalter i mitt område",
            latitude: position.coords.latitude.toString(),
            longitude: position.coords.longitude.toString(),
          });
          setLocationFlag(true);
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
          value: pollen.indexInfo?.value ?? 0,
        }));

      setPollenData(extractedData || []);
    } catch (error) {
      console.error("Fel vid hämtning av pollendata:", error);
      setPollenData(null);
    }
  }
  const getImageIcon = (name: string, value: number | string) => {
    const numValue = Number(value);

    if (numValue === 0) return `/Pollenikoner-dark-mode/${name} (Ingen).png`;
    if (numValue >= 1 && numValue <= 2)
      return `/Pollenikoner-dark-mode/${name} (Låg).png`;
    if (numValue === 3) return `/Pollenikoner-dark-mode/${name} (Mellan).png`;
    return `/Pollenikoner-dark-mode/${name} (Hög).png`;
  };

  function togglePollenSection(): void {
    throw new Error("Function not implemented.");
  }

  return (
    <div className="index-container">
      {/* Header start */}
      <header>
        <ul>
          <li>
            <a href="/">
              <img src="img/Frame 6137.png" alt="logo" className="logo" />
            </a>
          </li>
          <li>
            <img src="/hero/darkmode-hero-desktop.png" alt="" />
          </li>
        </ul>
      </header>

      {/* Huvudsektion */}

      <main className="index-main">
        <section className={`current-city ${!locationFlag ? "hide" : ""}`}>
          <h1>{city.name}</h1>

          {locationFlag ? (
            pollenData ? (
              <div className="current-location-container">
                <h3>Dagens pollenhalter:</h3>
                <div className="current-location-pollen">
                  {pollenData.map((pollen: any) => (
                    <div key={pollen.name} className="pollen-info">
                      <div className="pollen-info-text">
                        <p>
                          <strong>{pollen.name}</strong>
                        </p>
                      </div>
                      <div>
                        <img
                          className="pollen-image"
                          src={getImageIcon(pollen.name, pollen.value)}
                          alt="pollen-image"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <p>Laddar pollendata...</p>
            )
          ) : (
            <p></p>
          )}
        </section>

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
                  className={`other-cities-button ${
                    selectedCityId === cityId ? "active" : ""
                  }`}
                >
                  {OtherCities[cityId].cityname}
                </button>
              );
            })}
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
      </main>
      <footer className="footer-desktop">
        <h3>&#169;2025 Copyright Pollenkollen | All Rights Reserved</h3>
        <NavLink to="/about">Om oss</NavLink>
      </footer>
    </div>
  );
}
