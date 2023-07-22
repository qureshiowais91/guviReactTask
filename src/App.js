import React, { useState } from "react";
import "./App.css";
import NavBar from "./components/nevbar/NavBar";
import HeroSection from "./components/HeroSection/HeroSection";
import PricingCardList from "./components/pricing/PricingCardList";

const data = [
  {
    id: "q3hsb8a2c90i4n1",
    title: "Product A",
    price: "$40.00",
    buttonText: "Add To Cart",
    addable: true,
    isAddedToCart: false,
  },
  {
    id: "u9xle2o1p4g7w3",
    title: "Product B",
    price: "$25.00",
    buttonText: "View Product",
    addable: false,
    isAddedToCart: false,
  },
  {
    id: "m5zr9k6t1v8o2d",
    title: "Product C",
    price: "$15.00",
    buttonText: "Add To Cart",
    addable: true,
    isAddedToCart: false,
  },
  {
    id: "t2i8p7r9x5e4o6a",
    title: "Product D",
    price: "$10.00",
    buttonText: "View Product",
    addable: false,
    isAddedToCart: false,
  },
  {
    id: "j7a1l4n8c2m3o6v",
    title: "Product E",
    price: "$30.00",
    buttonText: "Add To Cart",
    addable: true,
    isAddedToCart: false,
  },
  {
    id: "z3d7h8u1k6b5c2",
    title: "Product F",
    price: "$20.00",
    buttonText: "View Product",
    addable: false,
    isAddedToCart: false,
  },
  {
    id: "v4m9n3o8x6i1j2",
    title: "Product G",
    price: "$35.00",
    buttonText: "Add To Cart",
    addable: true,
    isAddedToCart: false,
  },
  {
    id: "r2o6j9l3p7v5i4",
    title: "Product H",
    price: "$12.00",
    buttonText: "Add To Cart",
    addable: true,
    isAddedToCart: false,
  },
  {
    id: "l5u4b3c8d2n9j6",
    title: "Product I",
    price: "$18.00",
    buttonText: "View Product",
    addable: false,
    isAddedToCart: false,
  },
  {
    id: "y1x8d9o2t6i4n7",
    title: "Product J",
    price: "$22.00",
    buttonText: "Add To Cart",
    addable: true,
    isAddedToCart: false,
  },
  {
    id: "b2i9x8a3n5v4d7",
    title: "Product K",
    price: "$28.00",
    buttonText: "View Product",
    addable: false,
    isAddedToCart: false,
  },
  {
    id: "k3j6v9n1p7x5i2",
    title: "Product L",
    price: "$42.00",
    buttonText: "Add To Cart",
    addable: true,
    isAddedToCart: false,
  },
];

function App() {
  const heroStyle = {
    width: "100%",
    margin: "12rem 0 12rem 0",
    right: "0",
    left: "0",
  };

  const [cart, setCart] = useState(data);

  function addToCart(id) {
    const productAddedToCart = data.filter((product) => {
      return product.id === id;
    });
    productAddedToCart[0].isAddedToCart = true;
    setCart([...cart], productAddedToCart);
  }


  function removeItemFromCart(id) {
    const productAddedToCart = data.filter((product) => {
      return product.id === id;
    });
    productAddedToCart[0].isAddedToCart = false;
    setCart([...cart], productAddedToCart[0]);
  }

  return (
    <div className="App container">
      <NavBar cart={cart} setDeletedItem={removeItemFromCart}></NavBar>
      <div className="row">
        <HeroSection
          style={heroStyle}
          title="Shop in style"
          subtitle="With this shop hompeage template"
        />
      </div>
      <div style={heroStyle}>
        <PricingCardList data={cart} addtoCart={addToCart}></PricingCardList>
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
