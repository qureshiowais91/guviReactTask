import React from "react";
import placeHolder from "../../placeHolder.jpg";

function PricingCard(props) {
  const customStyle = {
    width: "18rem",
  };


  const clickHandler = (e) => {
    console.log(e)
    if (props.data.addable == true) {
      props.addtoCart(props.data.id);
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
        disabled={props.data.addable && props.data.isAddedToCart}
        className="btn btn-outline-secondary m-3"
      >
        {props.data.buttonText}
      </button>
    </div>
  );
}

export default PricingCard;