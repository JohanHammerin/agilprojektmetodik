
import { PollenData } from "~/components/PollenData";

export function Welcome() {
  return (
    <div className="index-container">
      <header>
        <h1>Pollenkollen</h1>
      </header>

      <main className="index-main">
        <section className="current-city">
          <h1>Nuvarande Stad: </h1>
          <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, perferendis? Quibusdam, commodi similique. Nam placeat quasi exercitationem consectetur perspiciatis laudantium explicabo perferendis 
            illum distinctio quo, veritatis repellat, voluptate ab quis.</h1>
        </section>

       

        <section className="other-cities-section">
          <div className="other-cities-header">
            <h1>Andra städer</h1>
            </div>
            <section className="other-cities-article-section">
              <article className="other-cities-article">
                <PollenData regionId={"2a2a2a2a-2a2a-4a2a-aa2a-2a2a2a303a32"} cityName={"Stockholm"} />
              </article>

          <article className="other-cities-article">
          <PollenData regionId={"2a2a2a2a-2a2a-4a2a-aa2a-2a2a2a303a39"} cityName={"Malmö"} />
          </article>

          <article className="other-cities-article">
          <PollenData regionId={"2a2a2a2a-2a2a-4a2a-aa2a-2a2a2a303a38"} cityName={"Göteborg"} /> 
          </article>      

          <article className="other-cities-article">
          <PollenData regionId={"2a2a2a2a-2a2a-4a2a-aa2a-2a2a303a3231"} cityName={"Piteå"} /> 
          </article>
          
          <article className="other-cities-article">
          <PollenData regionId={"2a2a2a2a-2a2a-4a2a-aa2a-2a2a303a3137"} cityName={"Sundsvall"} /> 
          </article>
          
          <article className="other-cities-article">
          <PollenData regionId={"2a2a2a2a-2a2a-4a2a-aa2a-2a2a303a3130"} cityName={"Hässelholm"} /> 
          </article>


          <article className="other-cities-article">
          <PollenData regionId={"2a2a2a2a-2a2a-4a2a-aa2a-2a2a303a3132"} cityName={"Kristandstad"} /> 
          </article>


          <article className="other-cities-article">
          <PollenData regionId={"2a2a2a2a-2a2a-4a2a-aa2a-2a2a303a3139"} cityName={"Västervik"} /> 
          </article>
          
          </section>

        </section>
          
          


        

        
      </main>
    </div>
  );
}
