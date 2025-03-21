import { useEffect, useState } from "react";
import { CityCard } from "../components/CityCard";
import type { City } from "~/types/city";
import { PollenData } from "~/components/PollenData";

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
        <section className="current-city">
            <h1>Om oss sidan</h1>
          
        </section>
        
        
        <section className="other-cities-section">
            <article>
                <h1>ExempelText</h1>
            </article>
          
        </section>

      </main>

      <footer className="footer">
        <h3>&#169;2025 Copyright Pollenkollen | All Rights Reserved</h3>
        <h3>Om oss</h3>
      </footer>
    </div>
  );
}
