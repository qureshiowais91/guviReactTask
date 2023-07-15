import React, { useState } from "react";
import placeHolder from "../../placeHolder.jpg";

function PricingCard(props) {
  const customStyle = {
    width: "18rem",
  };

  const [addedToCart,addtoCart] = useState(false);

  const clickHandler =()=>{
    if(addedToCart){
      addtoCart(false);
    }else{
      addtoCart(true);
    }
  }
  return (
    <div className="card mt-5" style={customStyle}>
      <img src={placeHolder} alt="sd" className="card-img-top" />
      <div className="card-body">
        <h2 className="card-text">
          {props.data.title}
        </h2>
        <p>{props.data.price}</p>
      </div> 
      <button type="button" onClick={clickHandler} className='btn btn-outline-secondary m-3'  >
        {props.data.buttonText}
      </button>
    </div>
  );
}

export default PricingCard;