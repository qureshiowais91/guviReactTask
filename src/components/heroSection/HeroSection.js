import React from "react";

function HeroSection({ title, subtitle }) {
  const customStyle = {
    width:"100%",
    background:"blue",
    position:"absolute",
    right:"0",
    left:"0"
  };

  return (
    <section
      style={customStyle}
      className="hero container p-5 bg-dark text-white"
    >
      <div className="hero-content">
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </section>
  );
}

export default HeroSection;
