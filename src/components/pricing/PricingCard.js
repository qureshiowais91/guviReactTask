import React from "react";
import placeHolder from "../../placeHolder.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function PricingCard(props) {
  const customStyle = {
    width: "18rem",
  };
  const saleTagStyle={
    top: "0.5rem", 
    right: "0.5rem"
  }

  const clickHandler = (e) => {
    console.log(e);
    if (props.data.addable == true) {
      props.addtoCart(props.data.id);
    }
  };

  return (
    <div className="card mt-5" style={customStyle}>
      <div class="badge bg-dark text-white position-absolute" style={saleTagStyle}>Sale</div>
      <img src={placeHolder} className="card-img-top" />
      <div class="text-center">
      
        <div className="d-flex justify-content-center small text-warning m-3">
          <FontAwesomeIcon icon="fa-solid fa-star" />
          <FontAwesomeIcon icon="fa-solid fa-star" />
          <FontAwesomeIcon icon="fa-solid fa-star" />
          <FontAwesomeIcon icon="fa-solid fa-star" />
          <FontAwesomeIcon icon="fa-solid fa-star" />
        </div>
      </div>
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
