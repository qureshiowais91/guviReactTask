import React from "react";

function CartItem({index,title, price, setDeltedItem}) {
  function deleted(product) {
    setDeltedItem(product);
  }

  return (
    <div className="cart-item">
      <div className="cart-item-details">
        <h3>{title}</h3>
        <p>{price}</p>
      </div>
      <button className="btn btn-outline-danger" id={index} onClick={deleted}>
        Remove
      </button>
    </div>
  );
}

export default CartItem;
