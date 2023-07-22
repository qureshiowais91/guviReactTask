import React from "react";

function CartItem({id,title, price, setDeltedItem}) {
  function deleted() {
    console.log(id)
    debugger
    setDeltedItem(id);
  }

  return (
    <div className="cart-item">
      <div className="cart-item-details">
        <h3>{title}</h3>
        <p>{price}</p>
      </div>
      <button className="btn btn-outline-danger" onClick={deleted}>
        Remove
      </button>
    </div>
  );
}

export default CartItem;
