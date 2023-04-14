import React from "react";
import { useNavigate } from "react-router-dom";

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
    <div>
      <p>*********************************************************</p>
      <h2>Tämä on TopMenu/heading ja se on jokaisella sivun yläpäässä</h2>
      <button onClick={handleClickHome}>Etusivu</button>
      <button onClick={handleClickInfo}>Tietoa</button>
      <button onClick={handleClickAbout}>Meistä</button>
      <p>*********************************************************</p>
    </div>
  );
};