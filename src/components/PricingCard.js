import React from "react";


function PricingCard(){

      const customStyle={
        width: "18rem"
      }

    return (
        <div className="card" style={customStyle}>

        <img src="src\placeHolder.jpg" alt="sd" className="card-img-top"/>
        <div className="card-body">
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
        <button type="button" class="btn btn-link">Link</button>

      </div>
    )
}

export default PricingCard;