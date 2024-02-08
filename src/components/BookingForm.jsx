import React, { useState } from "react";
import axios from "axios";

function BookingForm() {
  const [formData, setFormData] = useState({
    shopId: "",
    ownerId: "",
    startDate: "",
    endDate: "",
  });

  const { shopId, ownerId, startDate, endDate } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/api/bookings",
        formData
      );
      console.log("Booking Added:", response.data);
      setFormData({ shopId: "", ownerId: "", startDate: "", endDate: "" });
      alert("Booking successfully added!");
    } catch (err) {
      console.error("Error adding booking:", err);
      alert("Failed to add booking.");
    }
  };

  return (
    <div className="form-container">
      <h2>Add New Booking</h2>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="shopId">Shop ID</label>
          <input
            type="number"
            id="shopId"
            name="shopId"
            value={shopId}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="ownerId">Owner ID</label>
          <input
            type="number"
            id="ownerId"
            name="ownerId"
            value={ownerId}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="startDate">Start Date</label>
          <input
            type="date"
            id="startDate"
            name="startDate"
            value={startDate}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="endDate">End Date</label>
          <input
            type="date"
            id="endDate"
            name="endDate"
            value={endDate}
            onChange={onChange}
            required
          />
        </div>
        <button type="submit" className="submit-btn">
          Submit Booking
        </button>
      </form>
    </div>
  );
}

export default BookingForm;
