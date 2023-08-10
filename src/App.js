import React from "react";
import Sidebar from "./components/sideBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./sb-admin-2.min.css";
import Navbar from "./components/navbar/navbar";
import ButtonComp from "./components/pages/button/button";
import CardsComp from "./components/pages/cards/cards";
import ColorComp from "./components/pages/color/color";
import BorderComp from "./components/pages/borders/border";
import OtherComp from "./components/pages/other/other";
import Animation from "./components/pages/animation/animation";
import LoginComp from "./components/pages/login/login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="container-flauid">
          <div className="row">
            <Navbar></Navbar>
            <div className="col-12"></div>
            <Sidebar></Sidebar>
          </div>

          <Routes>
            <Route path="/buttons" element={<ButtonComp />} />
            <Route path="/cards" element={<CardsComp />} />
            <Route path="/utilities-color" element={<ColorComp />} />
            <Route path="/utilities-border" element={<BorderComp />} />
            <Route path="/utilities-animation" element={<Animation />} />
            <Route path="/utilities-other" element={<OtherComp />} />
            <Route path="/login" element={<LoginComp />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
