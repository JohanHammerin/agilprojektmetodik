import { useEffect, useState } from "react";
import { CityCard } from "../components/CityCard";
import StockholmPollenTest from "../components/PollenAPI";
import type { City } from "~/types/city";

export function Welcome() {
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
      alert("Geolocation not supported");
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
      alert("Unable to retrieve your location");
    }
  }

  async function getGoogleAPIData(latitude: string, longitude: string) {
    try {
      const apiUrl =
        "https://pollen.googleapis.com/v1/forecast:lookup?key=AIzaSyCtlLqFo0V5PsARcnkEztv1kBXBt0xhYQk&location.longitude=" +
        longitude +
        "&location.latitude=" +
        latitude +
        "&days=1";
      const response = await fetch(apiUrl);

      const data = await response.json();
      setPollenData(data.dailyInfo?.[0]); // Spara första dagens data
    } catch (error) {
      console.error("Error fetching pollen data:", error);
    }
  }

  return (
    <div className="index-container">
      <header>
        <h1>Pollenkollen</h1>
      </header>

      <main className="index-main">
        <section className="current-city">
          <h1>{city.name}</h1>
          <h2>
            Lat: {city.latitude}, Lon: {city.longitude}
          </h2>

          {pollenData ? (
            <div>
              <h3>Dagens pollennivåer:</h3>
              <ul className="pollen-list">
                {pollenData.pollenTypeInfo?.map((pollen: any) => (
                  <li key={pollen.code}>
                    <strong>{pollen.displayName}</strong> -{" "}
                    {pollen.indexInfo?.value || "0"}
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <p>Laddar pollendata...</p>
          )}
        </section>

        <ul className="city-list">
          <CityCard name={"Stockholm"} latitude={"59.33"} longitude={"18.06"} />
          <CityCard name={"Göteborg"} latitude={"57.71"} longitude={"11.97"} />
          <CityCard name={"Malmö"} latitude={"55.61"} longitude={"13.00"} />
        </ul>
      </main>
    </div>
  );
}
