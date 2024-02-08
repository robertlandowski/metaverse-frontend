import React, { useState, useEffect } from "react";
import axios from "axios";

function BookingsList() {
  const [bookings, setBookings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/bookings");
        setBookings(response.data);
      } catch (err) {
        setError("Failed to fetch bookings.");
        console.error("Error fetching bookings:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBookings();
  }, []);

  if (isLoading) return <div>Loading bookings...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h2>Bookings</h2>
      <ul>
        {bookings.map((booking) => (
          <li key={booking.booking_id}>
            <strong>Shop ID:</strong> {booking.shop_id},{" "}
            <strong>Owner ID:</strong> {booking.owner_id},{" "}
            <strong>Start Date:</strong> {booking.start_date},{" "}
            <strong>End Date:</strong> {booking.end_date}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookingsList;
