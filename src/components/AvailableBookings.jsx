import React, { useState, useEffect } from "react";
import axios from "axios";

function AvailableBookingsTable() {
  const [shops, setShops] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const { data } = await axios.get("http://localhost:3000/api/bookings");
        const shopAvailability = calculateNextAvailable(data);
        setShops(shopAvailability);
      } catch (error) {
        console.error("Failed to fetch bookings:", error);
      }
    };

    fetchBookings();
  }, []);

  // Calculate the next available booking date for each shop
  const calculateNextAvailable = (bookings) => {
    const shopMap = {};

    bookings.forEach((booking) => {
      const { shop_id, end_date } = booking;

      if (isNaN(new Date(end_date).getTime())) {
        console.error(`Invalid end_date for shop_id ${shop_id}:`, end_date);
        return;
      }

      const nextAvailableDate = new Date(end_date);
      nextAvailableDate.setDate(nextAvailableDate.getDate() + 1);

      const nextAvailableDateString = nextAvailableDate
        .toISOString()
        .split("T")[0];

      if (!shopMap[shop_id] || new Date(shopMap[shop_id]) < nextAvailableDate) {
        shopMap[shop_id] = nextAvailableDateString;
      }
    });

    return Object.entries(shopMap).map(([shop_id, date]) => ({
      shop_id,
      date,
    }));
  };

  return (
    <div>
      <h2>Next Available Booking Dates</h2>
      <table>
        <thead>
          <tr>
            <th>Shop ID</th>
            <th>Next Available Booking Date</th>
          </tr>
        </thead>
        <tbody>
          {shops.map(({ shop_id, date }) => (
            <tr key={shop_id}>
              <td>{shop_id}</td>
              <td>{date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AvailableBookingsTable;
