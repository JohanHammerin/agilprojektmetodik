import { NavLink } from "react-router";

/**------------------------------------------------------------------------
 *                          AboutSidan
 *------------------------------------------------------------------------**/

export function AboutPage() {
  
  return (
    <div className="index-container">
      <header className="header">
        <ul>
          <img src="/img/pklogoblack.png" alt="logo" />
        </ul>
        <h2>
          Välkommen till Pollenkollen! Sidan där du snabbt och enkelt ser
          pollenhalter i din närhet
        </h2>
      </header>

      <main className="index-main">
        <section className="other-cities-section">
          <h1>Vilka är vi?</h1>
            <article>
                <h1>Vi är ett team bestående av studenter inom UX-design samt Javautveckling som tillsammans har skapat Pollenkollen.
                  Vår vision är att göra det enkelt för dig som användare att snabbt få information om pollenhalter i olika städer och
                  med vår applikation kan du hålla sig uppdaterad om pollenutvecklingen i din närhet.
                </h1>
            </article>
            <article>
              <h1>Vi har arbetat för att kombinera användarvänlig design med pålitlig och aktuell polleninformation
                så att våra användare enkelt kan fatta informerade beslut för en bättre och mer bekväm vardag.
              </h1>
            </article>
        </section>

        <section className="api-section">
          <h1>API:er vi använder</h1>
          <article>
            <ul>
              <li>
                <NavLink to="#" onClick={() => window.open("https://api.pollenrapporten.se/v1/pollen-types?offset=0&limit=100", "_blank")}>
                  PollenAPI
                </NavLink>
              </li>
              <li>
                <NavLink to="#" onClick={() => window.open("https://developers.google.com/maps/documentation/pollen/overview", "_blank")}>
                  PlatsinfoAPI
                </NavLink>
              </li>
            </ul>
          </article>
        </section>

      </main>

      <footer className="footer">
        <p>&#169;2025 Copyright Pollenkollen | All Rights Reserved</p>
        <NavLink to="/">Hem</NavLink>
      </footer>
    </div>
  );
}
