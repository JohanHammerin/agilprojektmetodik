
import { PollenData } from "~/components/PollenData";
import { CityCard } from "../components/CityCard";

export function Welcome() {
  return (
    <div className="index-container">
      <header>
        <h1>Pollenkollen</h1>
      </header>

      <main className="index-main">
        <section className="current-city">

          <PollenData regionId={"2a2a2a2a-2a2a-4a2a-aa2a-2a2a2a303a32"} cityName={"Stockholm"} />

          <PollenData regionId={"2a2a2a2a-2a2a-4a2a-aa2a-2a2a2a303a39"} cityName={"Malmö"} />

          
          
          
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
