import React from "react";
import "./App.css";
import NavBar from "./components/nevbar/NavBar";
import HeroSection from "./components/heroSection/HeroSection";
import PricingCardList from "./components/pricing/PricingCardList";
import Footer from "./components/footer/Footer";

function App() {
  const heroStyle = {
    width: "100%",
    margin: "12rem 0 12rem 0",
    right: "0",
    left: "0",
  };

  const footerstyle = {
    width:"100vh",
    padding: "5rem 0 0 0",
    background:"grey"
  };

  return (
    <div className="App container">
      <NavBar></NavBar>
      <div className="row">
        <HeroSection
          style={heroStyle}
          title="Shop in style"
          subtitle="With this shop hompeage template"
        />
      </div>
      <div style={heroStyle}>
        <PricingCardList></PricingCardList>
      </div>
      <div className="row">
        <HeroSection
          style={heroStyle}
          
          subtitle="Copyright © Your Website 2023"
        />
      </div>
    </div>
  );
}

export default App;
