import { useEffect, useState } from "react";
import { CityCard } from "../components/CityCard";
import type { City } from "~/types/city";
import { PollenData } from "~/components/PollenData";

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
      setPollenData(data.dailyInfo?.[0]); // Spara dagens data
    } catch (error) {
      console.error("Error fetching pollen data:", error);
    }
  }

  return (
    <div className="index-container">
      <header className="header">
        <h1>Pollenkollen</h1>
        <h2>
          Välkommen till Pollenkollen! Sidan där du snabbt och enkelt ser
          pollenhalter i din närhet
        </h2>
      </header>

      <main className="index-main">
        <section className="current-city">
          <PollenData
            regionId={"2a2a2a2a-2a2a-4a2a-aa2a-2a2a2a303a32"}
            cityName={"Stockholm"}
          />

          <PollenData
            regionId={"2a2a2a2a-2a2a-4a2a-aa2a-2a2a2a303a39"}
            cityName={"Malmö"}
          />
        </section>

        <ul className="city-list">
          <CityCard
            name={"Stockholm"}
            latitude={"59.334591"}
            longitude={"18.063240"}
          />
          <CityCard
            name={"Stockholm"}
            latitude={"59.334591"}
            longitude={"18.063240"}
          />
          <CityCard
            name={"Stockholm"}
            latitude={"59.334591"}
            longitude={"18.063240"}
          />

          <CityCard
            name={"Stockholm"}
            latitude={"59.334591"}
            longitude={"18.063240"}
          />
          <CityCard
            name={"Stockholm"}
            latitude={"59.334591"}
            longitude={"18.063240"}
          />
          <CityCard
            name={"Stockholm"}
            latitude={"59.334591"}
            longitude={"18.063240"}
          />
        </ul>
      </main>
    </div>
  );
}
