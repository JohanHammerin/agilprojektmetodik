import { useState } from "react";
/**------------------------------------------------------------------------
 *                           Funktion som gör att det visas en popup med information
 *------------------------------------------------------------------------**/

export function QuestionmarkBoxOtherCities() {
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
            <h4>
              Denna sektion hämtar data från pollenrapporten.se, som drivs av
              Naturhistoriska riksmuseet. Här mäts specifika pollentyper vid
              fasta mätstationer runt om i Sverige.
              <br />
              <br />
              Vi har valt ut 9 platser baserat på folkmängd och geografisk
              spridning för att ge en bred täckning över landet. I denna vy
              döljer vi pollentyper som inte visar några aktuella nivåer för att
              spara utrymme.
              <br />
              <br />
              API:et mäter följande pollensorter:
              <br /> Al, Alm, Björk, Bok, Ek, Gråbo, Gräs, Hassel,
              Malörtsambrosia, Sälg/Viden.
              <br />
              <br />
              Observera att våra två API:er använder olika skalor. Vi har
              försökt balansera detta så gott det går, men viss skillnad i
              nivåbedömning kan förekomma.
            </h4>
          </div>
        )}
      </div>
    </>
  );
}
