import React from "react";

function CartItem({ title, price, onRemove }) {
  return (
    <div className="cart-item">
      <div className="cart-item-details">
        <h3>{title}</h3>
        <p>{price}</p>
      </div>
      <button className="btn btn-outline-danger" onClick={onRemove}>
        Remove
      </button>
    </div>
  );
}

export default CartItem;
