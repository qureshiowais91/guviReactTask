import React from "react";
import Sidebar from "./components/sideBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./sb-admin-2.min.css";
import Navbar from "./components/navbar/navbar";
import SearchBar from "./components/navbar/searchBar";
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
