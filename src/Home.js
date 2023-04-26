import React, { useState } from "react";
import { Slider } from "./Slider/Slider";
import "./styles.css";

export default function Home() {
  /**
   * Home on kampanjan ensimmäinen sivu ja kotisivu. Se sisältää interkatiivisen kyselyn, sekä sen
   * antaman palautteen.
   */

  // Tästä alkavat slideriin ja interaktiiviseen kyselyyn liittyvät arvot ja funktiot
  const statementList = [
    { statement: "En aja autolla töihin", value: 5 },
    { statement: "Syön kasvisruokaa", value: 5 },
    { statement: "En matkusta lentokoneella", value: 5 },
  ];
  const feedBack = [
    "Olet ilmastontuhoaja. Koita parantaa tapasi",
    "Sinulla olisi vielä paljon parannettavaa",
    "Olet aika normaali",
    "Teet jo joitain juttuja hyvin",
    "Teet jo paljon hyvää",
    "Olet täydellinen",
  ];

  const [points, setPoints] = useState([5, 5, 5]); // Alussa amat arvot kuin statementListillä
  const [grade, setGrade] = useState(null);

  const handlePointsChange = (index, value) => {
    const newPoints = [...points];
    newPoints[index] = value;
    setPoints(newPoints);
  };

  const calculateGrade = () => {
    const total = points.reduce((acc, cur) => acc + cur, 0);
    const percentage = total / (points.length * 100);
    const grade = Math.round(percentage * 5);
    setGrade(grade);
  };

  return (
    <div className="homePage">
      <img
        className="kuva1"
        src={require("./images/kyselykuva.jpeg")}
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
        <img className="lakeScenery" src={require("./images/lakeScenery.jpg")} alt="" />
        <div className="testiIntro">
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo quas minima quos in omnis?</p>
          <h4>Tee testi</h4>
        </div>
      </div>
      <div>
        <h2>Testaa kuinka paha ilmastotuholainen oletkaan</h2>
        <div>
          {statementList.map((statement, index) => {
            return (
              <div key={index}>
                <p>{statement.statement}</p>
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
