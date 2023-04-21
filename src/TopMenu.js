import React from "react";
import { useNavigate } from "react-router-dom";
import "./menu.css"

export default function TopMenu() {
  const navigate = useNavigate();

  const handleClickHome = () => {
    navigate("/");
  };

  const handleClickInfo = () => {
    navigate("/Info");
  };

  const handleClickAbout = () => {
    navigate("/About");
  };

  return (
    <div class="kaikki">
      <p>*********************************************************</p>
      <h2>Tämä on TopMenu/heading ja se on jokaisella sivun yläpäässä</h2>
      <li id="valikko">
        <button onClick={handleClickHome}>Etusivu</button>
        <button onClick={handleClickInfo}>Tietoa</button>
        <button onClick={handleClickAbout}>Meistä</button>
      </li>
      <p>*********************************************************</p>
    </div>
  );
};