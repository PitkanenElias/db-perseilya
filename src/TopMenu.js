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
      <button onClick={handleClickHome}>Etusivu</button>
      <button onClick={handleClickInfo}>Tietoa</button>
      <button onClick={handleClickAbout}>Meistä</button>
    </div>
  );
};