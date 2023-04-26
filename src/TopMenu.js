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
    <div className="kaikki">
      <div className="valikko">
        <p className="nappi1" onClick={handleClickHome}>Etusivu</p>
        <p className="nappi2" onClick={handleClickInfo}>Tietoa</p>
        <p className="nappi3" onClick={handleClickAbout}>Meistä</p>
      </div>
    </div>
  );
};