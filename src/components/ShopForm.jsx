import React, { useState } from "react";
import axios from "axios";
import "../styles/ShopForm.css";

function ShopForm({ onShopAdded }) {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    adminId: 1,
  });

  const { name, description } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/api/shops", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      setFormData({ name: "", description: "", adminId: 1 });
      if (onShopAdded) {
        onShopAdded();
      }
    } catch (err) {
      console.error("Error adding shop:", err.response.data);
    }
  };

  return (
    <div className="shop-form-container">
      <form onSubmit={onSubmit} className="shop-form">
        <h2>Add a New Shop</h2>
        <div className="form-group">
          <label htmlFor="name">Shop Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={description}
            onChange={onChange}
            required
          />
        </div>
        <button type="submit" className="submit-btn">
          Add Shop
        </button>
      </form>
    </div>
  );
}

export default ShopForm;
