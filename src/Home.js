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
      <img className="kuva1" src={require("./images/kyselykuva.jpeg")} alt="tama on kuva"></img>
      <h1 className="otsikko">HIILINEUTRAALI SUOMI 2035</h1>
      <p className="ekaTeksti">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi elementum
        ultricies sapien, tempor vestibulum risus rutrum non. Praesent aliquam
        accumsan nulla ut ultrices. Morbi feugiat faucibus justo, sit amet
        mollis nisl scelerisque id. Cras facilisis tincidunt massa ut mattis.
        Curabitur non arcu sed lacus varius faucibus. Donec quis maximus eros,
        vulputate tincidunt enim. Aenean volutpat ullamcorper est, id maximus
        purus dapibus non. Aenean urna nulla, bibendum id mattis sed, viverra
        facilisis mauris. Praesent lacinia porttitor blandit. Duis ac rutrum
        risus, sit amet venenatis ligula. Praesent aliquam venenatis turpis, at
        vulputate ligula venenatis vel. Nunc erat massa, semper sit amet elit
        eget, euismod posuere enim. Nunc vestibulum accumsan ligula, et vehicula
        neque consequat sed. Ut ut elit egestas enim dapibus rhoncus non eu
        metus. Aliquam erat volutpat. Fusce eget lacus eu velit vulputate
        vulputate. Donec ut ultricies odio. Mauris consequat felis eget lectus
        vestibulum, ut malesuada magna ultricies. Integer hendrerit lectus urna,
        at luctus dolor mattis id. Duis consequat mauris sit amet dapibus
        luctus. Aenean lacinia facilisis ultricies. Maecenas suscipit eget magna
        a fermentum. Aliquam erat volutpat. Nullam sollicitudin in nibh sed
        tincidunt. Fusce eleifend magna in libero mollis euismod. Sed eu
        efficitur ex. Suspendisse facilisis facilisis interdum. Curabitur
        fermentum rhoncus.
      </p>
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
                <label>{points[index]}</label>
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
