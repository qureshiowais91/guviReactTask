import React from "react";
import "./App.css";
import NavBar from "./components/nevbar/NavBar";
import HeroSection from "./components/heroSection/HeroSection";
import PricingCardList from "./components/pricing/PricingCardList";
import Footer from "./components/footer/Footer";
const data = [
  {
    title: "Random Product",
    price: "$40.00 - $80.00",
    buttonText: "Add To Cart",
  },
  {
    title: "Random Product",
    price: "$25.00 - $50.00",
    buttonText: "View Product",
  },
  {
    title: "Random Product",
    price: "$15.00 - $30.00",
    buttonText: "Add To Cart",
  },
  {
    title: "Random Product",
    price: "$10.00 - $20.00",
    buttonText: "View Product",
  },
  {
    title: "Random Product",
    price: "$30.00 - $60.00",
    buttonText: "Add To Cart",
  },
  {
    title: "Random Product",
    price: "$20.00 - $40.00",
    buttonText: "View Product",
  },
  {
    title: "Random Product",
    price: "$35.00 - $70.00",
    buttonText: "Add To Cart",
  },
  {
    title: "Random Product",
    price: "$12.00 - $24.00",
    buttonText: "View Product",
  },
  {
    title: "Random Product",
    price: "$18.00 - $36.00",
    buttonText: "Add To Cart",
  },
  {
    title: "Random Product",
    price: "$22.00 - $44.00",
    buttonText: "View Product",
  },
  {
    title: "Random Product",
    price: "$28.00 - $56.00",
    buttonText: "Add To Cart",
  },
  {
    title: "Random Product",
    price: "$42.00 - $84.00",
    buttonText: "View Product",
  },
];

function App() {
  const heroStyle = {
    width: "100%",
    margin: "12rem 0 12rem 0",
    right: "0",
    left: "0",
  };

  const footerstyle = {
    width: "100vh",
    padding: "5rem 0 0 0",
    background: "grey",
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
        <PricingCardList data={data}></PricingCardList>
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
