import { NavLink } from "react-router";

/**------------------------------------------------------------------------
 *                          AboutSidan
 *------------------------------------------------------------------------**/

export function AboutPage() {
  return (
    <div className="index-container">
      <header>
        <a href="/">
          <img src="/img/Frame 6137.png" alt="logo" className="logo" />
        </a>

        {/* Header slut */}
      </header>

      <main className="info-main">
        <section className="info-section">
          <h1>Vilka är vi?</h1>
          <article>
            <h1>
              Vi är ett team bestående av studenter inom UX-design samt
              Javautveckling som tillsammans har skapat Pollenkollen. Vår vision
              är att göra det enkelt för dig som användare att snabbt få
              information om pollenhalter i olika städer och med vår applikation
              kan du hålla dig uppdaterad om pollenutvecklingen i din närhet.
            </h1>
          </article>
          <article>
            <h1>
              Vi har arbetat för att kombinera användarvänlig design med
              pålitlig och aktuell polleninformation så att du som användare
              enkelt kan fatta informerade beslut för en bättre och mer bekväm
              vardag.
            </h1>
          </article>
        </section>

        <section className="api-section">
          <div className="api-info">
            <h1>API:er vi använder</h1>
            <article>
              <ul className="api-list">
                <li>
                  <a
                    href="https://pollenrapporten.se/omwebbplatsen/attanvandapollenprognoserna.4.314e02dd13d69872ec0201.html"
                    target="_black"
                    rel="noreferrer"
                  >
                    PollenAPI - Pollenrapporten
                  </a>

                  <a
                    href="https://developers.google.com/maps/documentation/pollen/overview"
                    target="_black"
                    rel="noreferrer"
                  >
                    PlatsinfoAPI - Google
                  </a>
                </li>
              </ul>
            </article>
          </div>
        </section>
      </main>
      <footer className="footer-desktop">
        <h3>&#169;2025 Copyright Pollenkollen | All Rights Reserved</h3>
        <NavLink to="/">Hem</NavLink>
      </footer>
    </div>
  );
}
