import React, { useState } from "react";
import CartItem from "./CartItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Cart(props) {
  const [isCartOpen, setCartVisibility] = useState(false);
  const t = props.details.filter((item) => {
    return item.isAddedToCart == true;
  });
  console.log(t.length);
  const handleOpenModal = () => {
    setCartVisibility(true);
  };

  const handleCloseModal = () => {
    setCartVisibility(false);
  };

  return (
    <div>
      <button className="btn btn-outline-dark ps-3" onClick={handleOpenModal}>
        <FontAwesomeIcon icon="fa-solid fa-cart-shopping" />
        Cart
        <span class="badge bg-dark text-white ms-1 rounded-pill">
          {t.length}
        </span>
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
