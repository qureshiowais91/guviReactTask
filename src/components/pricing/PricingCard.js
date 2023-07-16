import React, { useState } from "react";
import placeHolder from "../../placeHolder.jpg";

function PricingCard(props) {
  const customStyle = {
    width: "18rem",
  };

  const [addedToCart, setToCart] = useState(false);

  const clickHandler = () => {
    if (props.data.addToCart === "true") {
      if (addedToCart === Boolean(false)) {
        props.addtoCart(props.data);
        setToCart(true);
      } else {
        setToCart(false);
      }
    }
  };

  return (
    <div className="card mt-5" style={customStyle}>
      <img src={placeHolder}  className="card-img-top" />
      <div className="card-body">
        <h2 className="card-text">{props.data.title}</h2>
        <p>{props.data.price}</p>
      </div>
      <button
        type="button"
        onClick={clickHandler}
        disabled={addedToCart}
        className="btn btn-outline-secondary m-3"
      >
        {props.data.buttonText}
      </button>
    </div>
  );
}

export default PricingCard;