import React, { useState } from "react";
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
   * Vaihtaa sivua info-sivulle
   */

  const navigate = useNavigate();

  const handleClickInfo = () => {
    navigate("/Info");
  };

  return (
    <div className="homePage">
      <img
        className="kuva1"
        src={require("./images/webp/aboutKuva.webp")}
        alt="tama on kuva"
      ></img>
      <div className="otsikot">
        <h1 className="otsikko1">HIILINEUTRAALI</h1>
        <h1 className="otsikko2">SUOMI</h1>
        <h1 className="otsikko3">2035</h1>
      </div>
      <p className="ekaTeksti">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi elementum
        ultricies sapien, tempor vestibulum risus rutrum non. Praesent aliquam
        accumsan nulla ut ultrices. Morbi feugiat faucibus justo, sit amet
        mollis nisl scelerisque id. Cras facilisis tincidunt massa ut mattis.
        Curabitur non arcu sed lacus varius faucibus. Donec quis maximus eros,
        vulputate tincidunt enim. Aenean volutpat ullamcorper est, id maximus
        purus dapibus non. Aenean urna nulla, bibendum id mattis sed, viverra
        facilisis mauris.
      </p>
      <div className="punchLine">
        <img
          className="metro"
          src={require("./images/metro.jpg")}
          alt="julkinen liikenne"
        />
        <div className="introBox left">
          <p className="leipaTeksti">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo quas
            minima quos in omnis?
          </p>
          <a href="#test">
            <h4 class="teeTesti">Tee testi</h4>
          </a>
        </div>
      </div>
      <div className="moreInformation">
        <img
          className="deers"
          src={require("./images/deers.jpg")}
          alt="peurakuva"
        />
        <div className="introBox right">
          <p className="leipaTeksti">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo quas
            minima quos in omnis?
          </p>
          <a href="#">
            <h4 className="teeTesti" onClick={handleClickInfo}>
              Lisää tietoa
            </h4>
          </a>
        </div>
      </div>
      <div className="interaktiivinenKysely">
        <h2 id="test">Testaa kuinka paha ilmastotuholainen oletkaan</h2>
        <div>
          {statementList.map((statement, index) => {
            return (
              <div className="kaikkiSliderit" key={index}>
                <p className="sliderFakta">{statement.intro}</p>
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
            );
          })}

          {(grade || grade === 0) && (
            <div>
              <h2>{feedBack[grade]}</h2>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
