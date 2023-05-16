import React from "react";
import { useNavigate } from "react-router-dom";
import "./menu.css";

export default function TopMenu() {
  const navigate = useNavigate();

  const handleClickHome = () => {
    navigate("/");
  };

  const handleClickTietoa = () => {
    navigate("/Tietoa");
  };

  const handleClickKampanja = () => {
    navigate("/Kampanja");
  };

  return (
    <div className="kaikki">
      <div className="valikko">
        <p className="nappi1 nappi" onClick={handleClickHome}>
          Etusivu
        </p>
        <p className="nappi2 nappi" onClick={handleClickTietoa}>
          Tietoa
        </p>
        <p className="nappi3 nappi" onClick={handleClickKampanja}>
          Kampanja
        </p>
      </div>
    </div>
  );
}
