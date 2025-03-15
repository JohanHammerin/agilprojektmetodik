import { CityCard } from "../components/CityCard";

export function Welcome() {
  return (
    <div className="index-container">
      <header>
        <h1>Pollenkollen</h1>
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
