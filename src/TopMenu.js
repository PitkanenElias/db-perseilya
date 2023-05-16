import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./menu.css";

export default function TopMenu() {
  const navigate = useNavigate();

  const handleClickHome = () => {
    setMenuColor('transparent')
    navigate("/");
  };

  const handleClickTietoa = () => {
    setMenuColor('transparent')
    navigate("/Tietoa");
  };

  const handleClickKampanja = () => {
    setMenuColor('#01010195')
    navigate("/Kampanja");
  };


    /**
   * Muuttaa menubarin värin esimmäisellä sivulla kun sivu on ohittanut ensimmäisen kuvan
   */

    const [menuColor, setMenuColor] = useState('transparent');

    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
    }, []);
  
    const handleScroll = () => {
      // scroll position
      const position = window.pageYOffset;
      // position after first pic
      const target = document.getElementById("menuColor").offsetTop;
  
      if (position > target-1) {
        setMenuColor('#010101AA');
      } else {
        setMenuColor('transparent');
      }
    };

  return (
    <div className="kaikki" style={{backgroundColor: menuColor}}>
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
