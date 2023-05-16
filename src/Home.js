import React, { useState, useEffect } from "react";
import { Slider } from "./Slider/Slider";
import { useNavigate } from "react-router-dom";
import "./styles.css";

export default function Home() {
  /**
   * Home on kampanjan ensimmäinen sivu ja kotisivu. Se sisältää interkatiivisen kyselyn, sekä sen
   * antaman palautteen.
   */

  // Tästä alkavat slideriin ja interaktiiviseen kyselyyn liittyvät arvot ja funktiot
  const statementList = [
    {
      intro:
        "Liikenne ja matkailu muodostaa lähes kolmanneksen keskivertosuomalaisen hiilijalanjäljestä.",
      statement: "Käytän joukkoliikennettä henkilöauton sijasta",
      value: 5,
    },
    {
      intro:
        "Lentomatkailun hiilidioksidipäästöt ovat noin 175 – 300 kiloa per henkilö 1000 kilometrin matkalla.",
      statement:
        "	Vältän lentomatkustamista tai korvaan sitä esimerkiksi junilla",
      value: 5,
    },
    {
      intro:
        "Asuminen muodostaa noin 20% keskivertosuomalaisen hiilijalanjäljestä.",
      statement:
        "Kotini lämmitykseen käytetään ekosähköä, maalämpöä tai vihreää kaukolämpöä",
      value: 5,
    },
    {
      intro:
        "Lämpötilan laskeminen yhdellä asteella merkitsee noin viisi prosenttia pienempää lämmityksen energiankulutusta.",
      statement:
        "Lasken huonelämpötilaa asteella tai parilla esimerkiksi öisin, kun olen pidempään pois kotoa tai huoneista joita en käytä",
      value: 5,
    },
    {
      intro:
        "Vihreän sähkön eli uusiutuvilla luonnonvaroilla tuotetun sähkön laskennalliset kasvihuonekaasupäästöt ovat nolla.",
      statement: "Ostan uusiutuvista energianlähteistä tuotettua sähköä",
      value: 5,
    },
    {
      intro:
        "Vastuullisilla käyttötottumuksilla vedenkulutusta on mahdollista pienentää noin 10–30%.",
      statement: "En vietä suihkussa ylimääräistä aikaa",
      value: 5,
    },
    {
      intro:
        "Yksittäisistä elintarvikkeista naudanliha aiheuttaa suurimman ilmastovaikutuksen.",
      statement: "	Rajoitan punaisen lihan kulutustani",
      value: 5,
    },
    {
      intro:
        "Keskimäärin jokainen suomalainen heittää ruokaa roskiin noin 60 kilogrammaa vuodessa.",
      statement: "Minimoin ruokahävikin suunnittelemalla ruokaostokseni",
      value: 5,
    },
    {
      intro:
        "Huomion kiinnittäminen kulutusvalintoihin voi säästää esimerkiksi sähkölaskussa.",
      statement: "Valitsen energiatehokkaita ja kestäviä tuotteita",
      value: 5,
    },
    {
      intro:
        "Keskivertosuomalaisen vapaa-ajan ja palveluiden kulutuksen hiilijalanjälki on 1690 kiloa vuodessa.",
      statement: "Vältän impulsiivista shoppailua ja ostan vain tarpeeseen",
      value: 5,
    },
  ];
  const feedBack = [
    "Olet ilmastontuhoaja. Yritä parantaa tapasi",
    "Sinulla olisi vielä paljon parannettavaa",
    "Olet aika normaali",
    "Teet jo joitain juttuja hyvin",
    "Teet jo paljon hyvää",
    "Olet täydellinen",
  ];

  const [points, setPoints] = useState([5, 5, 5, 5, 5, 5, 5, 5, 5, 5]); // Alussa amat arvot kuin statementListillä
  const [grade, setGrade] = useState(null);

  const handlePointsChange = (index, value) => {
    const newPoints = [...points];
    newPoints[index] = value;
    setPoints(newPoints);
  };

  const calculateGrade = () => {
    const total = points.reduce((acc, cur) => acc + cur, 0);
    const percentage = total / (points.length * 10);
    const grade = Math.round(percentage * 5);
    setGrade(grade);
  };


  /**
   * Vaihtaa sivua Tietoa-sivulle
   */

  const navigate = useNavigate();

  const handleClickTietoa = () => {
    navigate("/Tietoa");
  };


  /**
   * Avaa sivun aina yläosasta, instant estää "liukuvan siirroksen"
   */
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, []);


  /**
   * Liikuttaa taustalla olevia kuvia, eli metrokuvaa ja peurakuvaa
   */
  const [deers, setDeers] = useState(null);
  const [metro, setMetro] = useState(null);

  useEffect(() =>{
    const deerValue = document.getElementById("deers");
    setDeers(deerValue);
    const metroValue = document.getElementById("metro");
    setMetro(metroValue);
  }, []);

  useEffect(() => {
    if(deers && metro){
      window.addEventListener('scroll', () => {
        let x = window.pageYOffset;
        metro.style.transform = `translateX(${-(x/9)+50}px)`;
        deers.style.transform = `translateX(${(x/9)-110}px)`;
      });
    }
  }, [deers, metro]);


  return (
    <div className="homePage">
      <img
        className="kuva1"
        src={require("./images/webp/revontulet.webp")}
        alt="talvinen maisema"
      ></img>
      <div className="otsikot">
        <h1 className="otsikko1">HIILINEUTRAALI</h1>
        <h1 className="otsikko2">SUOMI</h1>
        <h1 className="otsikko3">2035</h1>
      </div>
      <p className="ekaTeksti">
        Puun, paperin, Nokian ja Supercellin jälkeen, mistä rakennamme Suomeen
        seuraavan kansallisen vientituotteen?
        <br />
        <br />
        Hiilineutraali Suomi 2035 -kampanja tekee suomalaisista pioneereja
        ilmastotekojen alalla. Jokapäiväisillä teoilla sinäkin voit liittyä
        uraauuravan muutostyön kärkijoukkoon – käy tekemässä omaa toimintaasi
        mittaava testi tai tutustu kampanjamme historiaan ja sisältöihin
        sivustollamme.
        <br />
        <br />
        Tervetuloa mukaan tekemään Suomesta maailman kärkimaata!
      </p>
      <div id="menuColor"></div>
      <div className="punchLine">
        <img
          id="metro"
          className="metro"
          src={require("./images/webp/metro.webp")}
          alt="julkinen liikenne"
        />
        <div className="introBox left">
          <p className="leipaTeksti">
            Tiedostatko sinä jo ne asiat, jotka ovat ratkaisevassa asemassa hiilineutraaliuden saavuttamisessa?
            <br/><br/>Entä tiedätkö, minkälainen vaikutus sinun käytökselläsi on tavoitteen saavuttamiseen?
          </p>
          <a href="#test">
            <h4 className="teeTesti">Tee testi</h4>
          </a>
        </div>
      </div>
      <div className="moreInformation">
        <img
          id="deers"
          src={require("./images/webp/deers.webp")}
          alt="peurakuva"
        />
        <div className="introBox right">
          <p className="leipaTeksti">
            Vähemmän puhetta, enemmän tekoja.
            <br />
            <br />
            Mitä suomalaisten tulisi tehdä, jotta Suomi säilyttäisi asemansa
            maailman ratkaisevana ilmastomuutoksen hillitsijänä?
            <br />
            <br />
            Viisaampina pystymme tekemään parempia valintoja ympäristön
            kannalta.
          </p>
          <a href="#random">
            <h4 className="teeTesti" onClick={handleClickTietoa}>
              Lisää tietoa
            </h4>
          </a>
        </div>
      </div>
      <div id="test"></div>
      <div className="interaktiivinenKysely">
        <h2 className="testiIntro">Tee testi ja näe, minkälainen vaikutus käytökselläsi on Suomen hiilineutraalius 2035 -tavoitteeseen</h2>
        <div>
          {statementList.map((statement, index) => {
            return (
              <div className="kaikkiSliderit" key={index}>
                <p className="sliderFakta">{statement.intro}</p>
                <div className="sliderBox">
                  <p className="sliderVäite">{statement.statement}</p>
                  <Slider
                    value={points[index]}
                    min={0}
                    max={100}
                    step={1}
                    onChange={(value) => handlePointsChange(index, value)}
                    onAfterChange={calculateGrade}
                  />
                  <div className="sliderVaihtoehdot">
                    <p>harvemmin</p>
                    <p>lähes aina</p>
                  </div>
                </div>
              </div>
            );
          })}
          <strong className="result">Tuloksesi:</strong>
          {(grade !== undefined || grade === null) && (
            <div>
              <h2>
                {grade !== null
                  ? feedBack[grade]
                  : "Vastaa kysymyksiin saadaksesi tuloksen"}
              </h2>
            </div>
          )}
          <p className="anchorUnderlined" onClick={handleClickTietoa}>
            Klikkaa tästä oppiaksesi lisää hyödyllisiä ilmastotekoja
          </p>
        </div>
      </div>
    </div>
  );
}
