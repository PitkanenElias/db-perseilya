import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Kampanja from "./Kampanja";
import Tietoa from "./Tietoa";
import TopMenu from "./TopMenu";
import Footer from "./Footer";

/**
 * App.js määrittelee, miten sivu jakautuu eri osiin. Käytännössä jokaisella sivulla ensimmäisenä
 * elementtinä on TopMenu, joka palautetaan TopMenu.js-tiedostossa. Tämän jälkeen React-routed-domin
 * Routes ja Route mahdollistavat sivustossa eri sivuilla liikkumisen. Käytännössä sivua vaihdetaan
 * pelkästään TopMenun kautta. Lopuksi jokaisen sivun viimeisenä elementtinä on Footer, joka palautetaan
 * taas Footer-tiedostossa.
 */

export default function App() {
  return (
      <div>
        <TopMenu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Kampanja" element={<Kampanja />} />
          <Route path="/Tietoa" element={<Tietoa />} />
        </Routes>
        <Footer />
      </div>
  );
}