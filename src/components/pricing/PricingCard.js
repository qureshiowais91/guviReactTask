import React from "react";
import placeHolder from "../../placeHolder.jpg";

function PricingCard() {
  const customStyle = {
    width: "18rem",
  };

  return (
    <div className="card mt-5" style={customStyle}>
      <img src={placeHolder} alt="sd" className="card-img-top" />
      <div className="card-body">
        <h2 className="card-text">
          Two Words
        </h2>
        <p>$40.00 - $80.00</p>
      </div>
      <button type="button" className="btn btn-light btn-outline-secondary m-5">
        Add To Card
      </button>
    </div>
  );
}

export default PricingCard;