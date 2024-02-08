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
      // Adjust the URL to match your server's address and endpoint
      const response = await axios.post(
        "http://localhost:3000/api/bookings",
        formData
      );
      console.log("Booking Added:", response.data);
      // Reset form or provide success feedback
      setFormData({ shopId: "", ownerId: "", startDate: "", endDate: "" });
      alert("Booking successfully added!");
    } catch (err) {
      console.error("Error adding booking:", err);
      // Handle errors, such as displaying a user-friendly message
      alert("Failed to add booking.");
    }
  };

  return (
    <div>
      <h2>Add New Booking</h2>
      <form onSubmit={onSubmit}>
        <div>
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
        <div>
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
        <div>
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
        <div>
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
        <button type="submit">Submit Booking</button>
      </form>
    </div>
  );
}

export default BookingForm;
