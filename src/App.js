import React from "react";
import Sidebar from "./components/sideBar";
import Navbar from "./components/navbar";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import "./sb-admin-2.min.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="container-flauid">
          <div className="row">
          <div className="col-12">
            <Navbar></Navbar>
            </div>
            <Sidebar></Sidebar>
          </div>

          <Routes>
            <Route path="/" />
            <Route path="/about" />
            <Route path="/test" />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
