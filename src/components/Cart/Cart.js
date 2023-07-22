import React, { useState } from "react";
import CartItem from "./CartItem";

function Cart(props) {
  const [isCartOpen, setCartVisibility] = useState(false);

  const handleOpenModal = () => {
    setCartVisibility(true);
  };

  const handleCloseModal = () => {
    setCartVisibility(false);
  };

  return (
    <div>
      <button className="btn btn-outline-dark" onClick={handleOpenModal}>
        <i className="bi bi-cart-fill me-1"></i>
        Cart
      </button>

      {isCartOpen && (
        <div className="modal  modal-dialog-scrollable" tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Cart Details</h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  onClick={handleCloseModal}
                ></button>
              </div>
              <div className="modal-body">
                <div className="">
                  {props.details.map(
                    (item, index) =>
                      item.isAddedToCart && (
                        <div className="col-sm" key={index}>
                          <CartItem
                            id={item.id}
                            title={item.title}
                            price={item.price}
                            setDeltedItem={props.setDeletedItem}
                          />
                        </div>
                      )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
