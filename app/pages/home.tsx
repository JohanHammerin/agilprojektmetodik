import { useEffect, useState, useRef } from "react";
import type { City } from "~/types/city";
import { PollenData } from "~/components/PollenData";
import { NavLink } from "react-router";
import { OtherCities } from "~/types/other-city";
import { ActionButton } from "~/components/ActionButton";
 
import { QuestionmarkBoxCurrentCity } from "~/components/Current-City-API-Information";
import { QuestionmarkBoxOtherCities } from "~/components/Other-City-API-Information";

export function HomePage() {
  const [selectedCityId, setSelectedCityId] = useState<string>("");
  const [pollenData, setPollenData] = useState<{ name: string; value: string }[] | null>(null);
  const [city, setCity] = useState<City>({ name: "", latitude: "", longitude: "" });
  const [locationFlag, setLocationFlag] = useState<boolean>(false);
  const [showPollenSection, setShowPollenSection] = useState<boolean>(false); // Initialt false för att dölja sektionen
 
  const pollenSectionRef = useRef<HTMLDivElement>(null);
 
  useEffect(() => {
    getPosition();
  }, []);
 
  useEffect(() => {
    if (city.latitude && city.longitude) {
      getGoogleAPIData(city.latitude, city.longitude);
    }
  }, [city]);
 
  function getPosition() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCity({
            name: "Aktuella pollenhalter i ditt område",
            latitude: position.coords.latitude.toString(),
            longitude: position.coords.longitude.toString(),
          });
          setLocationFlag(true);
        },
        (error) => {
          switch (error.code) {
            case error.PERMISSION_DENIED:
              alert(
                "Du har nekat tillåtelse att använda plats. Aktivera det i webbläsarinställningar."
              );
              break;
            case error.POSITION_UNAVAILABLE:
              alert("Platsinformation inte tillgänglig.");
              break;
            case error.TIMEOUT:
              alert(
                "Det tog för lång tid att hämta plats. Försök igen genom att ladda om sidan."
              );
              break;
            default:
              alert("Ett okänt fel uppstod vid hämtning av plats.");
              break;
          }
          setLocationFlag(false);
        },
        {
          enableHighAccuracy: true,
          timeout: 5000, // max 10 sek att hämta plats
          maximumAge: 60000, // acceptera cachead plats från senaste minuten
        }
      );
    } else {
      alert("Geolokalisering stöds inte av din webbläsare.");
    }
  }
 
  async function getGoogleAPIData(latitude: string, longitude: string) {
    try {
      const apiUrl = `https://pollen.googleapis.com/v1/forecast:lookup?key=AIzaSyCtlLqFo0V5PsARcnkEztv1kBXBt0xhYQk&location.longitude=${longitude}&location.latitude=${latitude}&days=1`;
      const response = await fetch(apiUrl);
      const data = await response.json();
 
      if (!data.dailyInfo?.[0]) {
        setPollenData(null);
        return;
      }
 
      const pollenTranslation: Record<string, string> = {
        GRASS: "Gräs",
        TREE: "Träd",
        WEED: "Ogräs",
      };
 
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
 
  const togglePollenSection = () => {
    setShowPollenSection((prev) => {
      const newState = !prev;
      if (newState && pollenSectionRef.current) {
        // Scrolla ner till pollensektionen när den ska visas
        setTimeout(() => {
          pollenSectionRef.current?.scrollIntoView({ behavior: "smooth" });
        }, 300);
      }
      return newState;
    });
  };
 
  const getImageIcon = (name: string, value: number | string) => {
    const numValue = Number(value);
    if (numValue === 0) return `/Pollenikoner-dark-mode/${name} (Ingen).png`;
    if (numValue >= 1 && numValue <= 2) return `/Pollenikoner-dark-mode/${name} (Låg).png`;
    if (numValue === 3) return `/Pollenikoner-dark-mode/${name} (Mellan).png`;
    return `/Pollenikoner-dark-mode/${name} (Hög).png`;
  };


  const calculatePollenLevel = (value: number) => {
    if (value === 0) return "ingen";
    else if (value < 3) return "låg";
    else if (value == 3) return "mellan";
    else return "hög";
  };

  function togglePollenSection(): void {
    throw new Error("Function not implemented.");
  }

  return (
    <div className="index-container">
      {/* Header */}
      <header>

        <a href="/">
          <img src="img/Frame 6137.png" alt="logo" className="logo" />
        </a>
         <div className="header-action-button">
          <ActionButton
            text={showPollenSection ? "Dölj pollenhalter" : "Se pollenhalter i ditt område"}
            onClick={togglePollenSection}
          />
        </div>
        <img src="/hero/darkmode-hero-desktop.png" alt="Maskot" />
      </header>
 
      {/* Main Content */}
      <main className="index-main">

        <section className={`current-city ${!locationFlag || !showPollenSection ? "hide" : ""}`}>
          <h1 className="city-name">{city.name}</h1>

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
                      <p>
                        <strong>{calculatePollenLevel(pollen.value)}</strong>
                      </p>
                    </div>
                  ))}
                </div>
                <div className="questionmark-container">
                  <QuestionmarkBoxCurrentCity />
                </div>
              </div>
            </div>
          ) : (
            <p>Laddar pollendata...</p>
          )}
        </section>
 
        {/* Other Cities Section */}
        <section className="other-cities-section">

          <h2 className="other-city-header">Andra Städer</h2>

          <div className="other-cities-button-container">
            {Object.keys(OtherCities).map((cityId) => (
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
            ))}
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
 
      {/* Footer */}
      <footer className="footer-desktop">
        <h3>&#169;2025 Copyright Pollenkollen | All Rights Reserved</h3>
        <NavLink to="/about">Om oss</NavLink>
      </footer>

    </div>
  );
}
