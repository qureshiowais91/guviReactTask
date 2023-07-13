
import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import PricingCard from "./components/PricingCard"
function App() {

  const customStyle = {
    width:"100%",
    background:"blue",
    position:"absolute",
    right:"0",
    left:"0"
  };
  return (  

    <div className="App container">
      <NavBar></NavBar>
      <HeroSection style={customStyle} title="Shop in style" subtitle="With this shop hompeage template" />
       <PricingCard/>
    </div>
  );
}

export default App;
