import React, { useContext, useState } from "react";
import CartContext from "../context/CartContext";
import CartModal from "./CartModal";
import styles from "./Header.module.css";

const Header = () => {
  const { cartState } = useContext(CartContext);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <header className={styles.header}>
      <h1>Shoe Store</h1>
      <button
        className={styles.cartButton}
        onClick={() => setIsModalOpen(true)}
      >
        Cart ({cartState.cart.length})
      </button>
      {isModalOpen && <CartModal onClose={() => setIsModalOpen(false)} />}
    </header>
  );
};

export default Header;
