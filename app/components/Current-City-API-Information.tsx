import { useState } from "react";
/**------------------------------------------------------------------------
 *                           Funktion som gör att det visas en popup med information
 *------------------------------------------------------------------------**/

export function QuestionmarkBoxCurrentCity() {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <>
      <div className="questionmark-container">
        <img
          src="/icons/Frågetecken-dark.png"
          alt="Questionmark"
          onClick={() => setShowTooltip(!showTooltip)}
          style={{
            width: "50px",
            height: "50px",
            cursor: "pointer",
          }}
        />
        {showTooltip && (
          <div className="questionmark-popup-window">
            <h2>
              Denna sektion hämtar data från Googles pollen-API, som om du har
              godkänt platstjänster använder din plats (longitud och latitud)
              för att ge en prognos inom en radie av cirka en
              kvadratkilometer.API:et tar endast hänsyn till tre huvudkategorier
              av pollen: gräs, ogräs och träd.
              <br />
              <br />
              Därför visar vi även dessa kategorier i vyn även när inga aktuella
              pollenhalter rapporteras , för att ge en fullständig
              överblick.Observera att våra två API:er använder olika skalor.
              <br />
              <br />
              Vi har försökt balansera detta så gott det går, men viss skillnad
              i nivåbedömning kan förekomma.
            </h2>
          </div>
        )}
      </div>
    </>
  );
}
