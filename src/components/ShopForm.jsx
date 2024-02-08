import React, { useState } from "react";
import axios from "axios";

function ShopForm() {
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
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const response = await axios.post(
        "http://localhost:3000/api/shops",
        formData,
        config
      );
      console.log("Shop Added:", response.data);
      setFormData({ name: "", description: "", addedByAdminId: 1 });
    } catch (err) {
      console.error("Error adding shop:", err.response.data);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <h2>Add a New Shop</h2>
      <div>
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
      <div>
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          value={description}
          onChange={onChange}
          required
        />
      </div>
      <button type="submit">Add Shop</button>
    </form>
  );
}

export default ShopForm;
