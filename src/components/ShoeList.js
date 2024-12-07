import React, { useContext } from "react";
import CartContext from "../context/CartContext";
import styles from "./ShoeList.module.css";

const ShoeList = ({ shoes }) => {
  const { dispatch } = useContext(CartContext);

  const addToCart = (shoe, size) => {
    dispatch({ type: "ADD_TO_CART", payload: { ...shoe, size } });
  };

  return (
    <ul className={styles.list}>
      {shoes.map((shoe, index) => (
        <li key={index} className={styles.item}>
          <h3>{shoe.name}</h3>
          <p>{shoe.description}</p>
          <p>Price: ${shoe.price}</p>
          <button
            className={styles.button}
            onClick={() => addToCart(shoe, "large")}
          >
            Buy Large
          </button>
          <button
            className={styles.button}
            onClick={() => addToCart(shoe, "medium")}
          >
            Buy Medium
          </button>
          <button
            className={styles.button}
            onClick={() => addToCart(shoe, "small")}
          >
            Buy Small
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ShoeList;
