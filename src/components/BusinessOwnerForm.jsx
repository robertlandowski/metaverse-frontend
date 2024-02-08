import React, { useState } from "react";

function BusinessOwnerForm({ onAddOwner }) {
  const [formData, setFormData] = useState({ name: "", contactInfo: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddOwner(formData);
    setFormData({ name: "", contactInfo: "" }); // Reset form
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h2>Add Business Owner</h2>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Contact Info:</label>
          <input
            type="text"
            name="contactInfo"
            value={formData.contactInfo}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="submit-btn">
          Add Owner
        </button>
      </form>
    </div>
  );
}

export default BusinessOwnerForm;
