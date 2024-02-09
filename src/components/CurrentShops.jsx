import React, { useState, useEffect } from "react";
import axios from "axios";

function CurrentShops() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/bookings");
        setBookings(response.data);
      } catch (error) {
        console.error("Error fetching bookings:", error);
      }
    };

    fetchBookings();
  }, []);

  return (
    <div>
      <h2>Bookings Table</h2>
      <table>
        <thead>
          <tr>
            <th>Shop ID</th>
            <th>Owner ID</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => (
            <tr key={booking.booking_id}>
              <td>{booking.shop_id}</td>
              <td>{booking.owner_id}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CurrentShops;
