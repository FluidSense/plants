import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <main>
      <section
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "3rem 0",
        }}
      >
        <img
          style={{
            borderRadius: "50%",
          }}
          src="https://picsum.photos/200"
          alt="placeholder image that should be a plant"
        />
      </section>
      <section
        style={{
          marginLeft: "10%",
          maxWidth: "80%",
        }}
      >
        <p>
          Hei! La meg fortelle deg historien om akkurat denne planten! Planten
          du har her er en "grønnrenner", eller en Chlorophytum comosum. Men
          ingen kan det navnet. Grønnrennere er lettstelte grønnplanter som
          tåler både mye og lite vann, og klarer seg med middels mengde
          indirekte sollys. Alt i alt en veldig enkel plante ✅
        </p>
        <p>
          Grønnrennere generelt kommer i fra Afrika, men akkurat denne her er
          mer eksotisk som så. Denne kommer nemlig fra planteveggen på
          Bekk-kontoret, altså Skuret. Ryktene skal ha det til at det var en
          skjebnesvanger aften, en fuktig kveld, en god fest på Skuret. En av
          festens deltakere skuet bort på planteveggen, dunkelt opplyst i
          hjørnet av kantina. Med et sløvt blikk kunne hvem som helst snudd
          hodet tilbake og fokusert på samtalen som pågikk rett ved blant
          festdeltakerne med en halvtom ølboks i hendene. Denne kvelden skulle
          ikke ha det slik. Som med et lite hvisk etter oppmerksomhet gled
          øynene til vår festløve bort til en liten grønnrenner. I det svake
          lyset kunne man så vidt skimte en plante som stakk seg litt lenger
          frem en vanlig. En tynn stilk stakk ut fra grønnrenneren, nysgjerrig
          på livet, og på tuppen av stilken var en liten stikling. Med et ømt
          blikk og myke fingre ble stiklingen plukket med og sneket ut i nattens
          mørke, til et nytt hjem. Et nytt liv. ✨
        </p>
        <p>
          Planten du har her er 4. generasjon Skuret-grønnrenner. En vakker
          sommer hvor gradene steg over 30 i Oslo sentrum skulle det ha seg at
          nettopp jeg fikk sommerjobb i Bekk. Jeg ble tatt inn fra varmen til et
          prosjekt i 10. etasje i et stort rosa bygg uten trapper. Med åpne
          armer og et håp for oss, den kommende generasjon, startet jeg og to
          andre sommerjobbere på et givende og utforskende prosjekt. Ikke lenge
          etter oppstart fikk jeg og mine sommerkolleger hver vår stikling som
          velkomstgave av teamet, en gave som den dag i dag gir glede og varme
          tanker til en fin sommer. Jeg håper denne stiklingen kan gi deg like
          stor glede som min stikling ga meg da jeg fikk den, og at den en gang
          kan gi stiklinger som du kan spre gleden videre med ❤️
        </p>
      </section>
    </main>
  );
}

export default App;
