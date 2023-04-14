import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Info from "./Info";
import TopMenu from "./TopMenu";
import Footer from "./Footer";

export default function App() {
  return (
      <div>
        <TopMenu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Info" element={<Info />} />
        </Routes>
        <Footer />
      </div>
  );
}