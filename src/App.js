import React, { useState } from "react";
import { CartProvider } from "./context/CartContext";
import Header from "./components/Header";
import ShoesAddForm from "./components/ShoesAddForm";
import ShoeList from "./components/ShoeList";
import CartModal from "./components/CartModal";

const App = () => {
  const [shoes, setShoes] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleAddShoe = (shoe) => {
    setShoes((prev) => [...prev, shoe]);
  };

  const toggleCartModal = () => {
    setIsCartOpen((prev) => !prev);
  };

  return (
    <CartProvider>
      <Header onCartClick={toggleCartModal} />
      <ShoesAddForm onAddShoe={handleAddShoe} />
      <ShoeList shoes={shoes} />
      {isCartOpen && <CartModal onClose={toggleCartModal} />}
    </CartProvider>
  );
};

export default App;
