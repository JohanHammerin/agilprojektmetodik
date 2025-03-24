import { useEffect, useState } from "react";
import { CityCard } from "../components/CityCard";
import type { City } from "~/types/city";
import { PollenData } from "~/components/PollenData";
import { NavLink } from "react-router";

export function HomePage() {
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

      <main className="index-main">
        <section className="current-city">
          <h1>{city.name}</h1>

          {pollenData ? (
            <div>
              <h3>Dagens pollenhalter:</h3>
              <ul>
                {pollenData.map((pollen: any) => (
                  <li key={pollen.name}>
                    <strong>{pollen.name}</strong>: {pollen.value}
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <p>Laddar pollendata...</p>
          )}
        </section>

        <section className="other-cities-section">
          <div className="other-cities-header">
            <h1>Andra städer</h1>
          </div>
          <section className="other-cities-article-section">
            <article className="other-cities-article">
              <PollenData
                regionId={"2a2a2a2a-2a2a-4a2a-aa2a-2a2a2a303a32"}
                cityName={"Stockholm"}
              />
            </article>

            <article className="other-cities-article">
              <PollenData
                regionId={"2a2a2a2a-2a2a-4a2a-aa2a-2a2a2a303a39"}
                cityName={"Malmö"}
              />
            </article>

            <article className="other-cities-article">
              <PollenData
                regionId={"2a2a2a2a-2a2a-4a2a-aa2a-2a2a2a303a38"}
                cityName={"Göteborg"}
              />
            </article>

            <article className="other-cities-article">
              <PollenData
                regionId={"2a2a2a2a-2a2a-4a2a-aa2a-2a2a303a3231"}
                cityName={"Piteå"}
              />
            </article>

            <article className="other-cities-article">
              <PollenData
                regionId={"2a2a2a2a-2a2a-4a2a-aa2a-2a2a303a3137"}
                cityName={"Sundsvall"}
              />
            </article>

            <article className="other-cities-article">
              <PollenData
                regionId={"2a2a2a2a-2a2a-4a2a-aa2a-2a2a303a3130"}
                cityName={"Hässelholm"}
              />
            </article>

            <article className="other-cities-article">
              <PollenData
                regionId={"2a2a2a2a-2a2a-4a2a-aa2a-2a2a303a3132"}
                cityName={"Kristianstad"}
              />
            </article>

            <article className="other-cities-article">
              <PollenData
                regionId={"2a2a2a2a-2a2a-4a2a-aa2a-2a2a303a3139"}
                cityName={"Västervik"}
              />
            </article>
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
