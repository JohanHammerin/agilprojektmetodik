import { CityCard } from "../components/CityCard";
import  StockholmPollenTest  from "../components/PollenAPI";

export function Welcome() {
  return (
    <div className="index-container">
      <header>
        <h1>Pollenkollen</h1>
        <h2>Välkommen till Pollenkollen! Sidan där du snabbt och enkelt ser pollenhalter i din närhet</h2>
      </header>

      <main className="index-main">
        <section className="current-city">
          <h1>10</h1>
          <h2>Träd/Gräs</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            vero optio ipsum expedita. Non architecto voluptas molestiae
            perferendis iure similique incidunt ad molestias autem doloremque
            veritatis facere, voluptatibus, eligendi voluptatum?
          </p>
          <p>Test</p>
          <p>test2</p>
          <StockholmPollenTest/>
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
