import React, { useState } from "react";
import styles from "./ShoesAddForm.module.css";

const ShoesAddForm = ({ onAddShoe }) => {
  const [shoe, setShoe] = useState({
    name: "",
    description: "",
    price: "",
    quantity: { large: 0, medium: 0, small: 0 },
  });

  const handleInputChange = (e) => {
    const { name, value, dataset } = e.target;
    if (dataset.size) {
      // Update quantity for specific size
      setShoe((prev) => ({
        ...prev,
        quantity: {
          ...prev.quantity,
          [dataset.size]: value === "" ? 0 : Number(value),
        },
      }));
    } else {
      // Update other fields
      setShoe((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddShoe(shoe);
    setShoe({
      name: "",
      description: "",
      price: "",
      quantity: { large: 0, medium: 0, small: 0 },
    });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        name="name"
        placeholder="Shoe Name"
        value={shoe.name}
        onChange={handleInputChange}
      />
      <input
        className={styles.input}
        name="description"
        placeholder="Description"
        value={shoe.description}
        onChange={handleInputChange}
      />
      <input
        className={styles.input}
        name="price"
        placeholder="Price"
        value={shoe.price}
        onChange={handleInputChange}
      />
      <input
        className={styles.input}
        data-size="large"
        placeholder="Large Quantity"
        value={shoe.quantity.large === 0 ? "" : shoe.quantity.large}
        onChange={handleInputChange}
      />
      <input
        className={styles.input}
        data-size="medium"
        placeholder="Medium Quantity"
        value={shoe.quantity.medium === 0 ? "" : shoe.quantity.medium}
        onChange={handleInputChange}
      />
      <input
        className={styles.input}
        data-size="small"
        placeholder="Small Quantity"
        value={shoe.quantity.small === 0 ? "" : shoe.quantity.small}
        onChange={handleInputChange}
      />
      <button className={styles.button} type="submit">
        Add Product
      </button>
    </form>
  );
};

export default ShoesAddForm;
