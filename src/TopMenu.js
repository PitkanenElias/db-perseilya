import React from "react";
import { useNavigate } from "react-router-dom";

export default function TopMenu() {
  const navigate = useNavigate();

  const handleClickHome = () => {
    navigate("/");
  };

  const handleClickAbout = () => {
    navigate("/About");
  };

  return (
    <div>
      <h2>MenuBar for navigating</h2>
      <button onClick={handleClickHome}>Home page</button>
      <button onClick={handleClickAbout}>About</button>
    </div>
  );
};