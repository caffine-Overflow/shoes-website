import React from "react";
import Modal from "./Modal";
import Cart from "./Cart";

const CartModal = ({ onClose }) => {
  return (
    <Modal onClose={onClose}>
      <Cart onClose={onClose} />
    </Modal>
  );
};

export default CartModal;
