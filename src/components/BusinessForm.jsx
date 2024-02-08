import React, { useState } from "react";
import axios from "axios";

function BusinessOwnerForm() {
  const [formData, setFormData] = useState({
    name: "",
    contactInfo: "",
  });

  const { name, contactInfo } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/api/businessOwners",
        formData
      );
      console.log("Business Owner Added:", response.data);
      setFormData({ name: "", contactInfo: "" });
    } catch (err) {
      console.error("Error adding business owner:", err.message);
    }
  };

  return (
    <div>
      <h2>Add Business Owner</h2>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="name">Name</label>
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
          <label htmlFor="contactInfo">Contact Information</label>
          <input
            type="text"
            id="contactInfo"
            name="contactInfo"
            value={contactInfo}
            onChange={onChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default BusinessOwnerForm;
