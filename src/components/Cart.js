import React, { useContext } from "react";
import CartContext from "../context/CartContext";
import styles from "./Cart.module.css";

const Cart = ({ onClose }) => {
  const { cartState, dispatch } = useContext(CartContext);
  const total = cartState.cart.reduce(
    (sum, item) => sum + Number(item.price),
    0
  );

  return (
    <>
      <h2>Cart</h2>
      <ul>
        {cartState.cart.map((item, index) => (
          <li key={index} className={styles.cartItem}>
            {item.name} ({item.size}) - ${item.price}
            <button
              onClick={() =>
                dispatch({ type: "REMOVE_FROM_CART", payload: index })
              }
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
      <p>Total: ${total}</p>
      <div className={styles.buttons}>
        <button
          className={styles.placeOrder}
          onClick={() => dispatch({ type: "PLACE_ORDER" })}
        >
          Place Order
        </button>
        <button className={styles.cancel} onClick={onClose}>
          Cancel
        </button>
      </div>
    </>
  );
};

export default Cart;
