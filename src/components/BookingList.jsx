import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/BookingsTimeline.css";

const BookingsTimeline = () => {
  const [shopBookings, setShopBookings] = useState({});
  const startDate = new Date("2024-02-01");
  const endDate = new Date("2026-02-01");
  const totalDays = (endDate - startDate) / (1000 * 60 * 60 * 24);
  const today = new Date();

  function formatDate(date) {
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const year = date.getFullYear().toString().slice(-2);

    const formattedMonth = month.toString().padStart(2, "0");
    const formattedDay = day.toString().padStart(2, "0");

    return `${formattedMonth}/${formattedDay}/${year}`;
  }

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/bookings");
        const filteredBookings = response.data.filter((booking) => {
          const bookingStart = new Date(booking.start_date);
          const bookingEnd = new Date(booking.end_date);
          return bookingStart <= endDate && bookingEnd >= startDate;
        });

        const groupedBookings = filteredBookings.reduce((acc, booking) => {
          (acc[booking.shop_id] = acc[booking.shop_id] || []).push(booking);
          return acc;
        }, {});
        setShopBookings(groupedBookings);
      } catch (error) {
        console.error("Failed to fetch bookings:", error);
      }
    };

    fetchBookings();
  }, []);

  return (
    <div className="timeline-container">
      <div className="legend">
        <div className="legend-item">
          <span className="color-box current"></span>
          <span>Current Booking</span>
        </div>
        <div className="legend-item">
          <span className="color-box future"></span>
          <span>Future Booking</span>
        </div>
      </div>
      <table className="bookings-table">
        <thead>
          <tr>
            <th>Shop ID</th>
            <th>Bookings (Feb 1, 2024 - Feb 1, 2026)</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(shopBookings).map(([shopId, bookings]) => (
            <tr key={shopId}>
              <td>{shopId}</td>
              <td className="booking-bars-container">
                {bookings.map((booking, index) => {
                  const bookingStart = new Date(booking.start_date);
                  const bookingEnd = new Date(booking.end_date);
                  const isCurrentBooking =
                    today >= bookingStart && today <= bookingEnd;
                  const barClass = isCurrentBooking
                    ? "booking-bar current"
                    : "booking-bar";
                  const offset = Math.max(
                    (bookingStart - startDate) / (1000 * 60 * 60 * 24),
                    0
                  );
                  const duration =
                    (Math.min(bookingEnd, endDate) -
                      Math.max(bookingStart, startDate)) /
                    (1000 * 60 * 60 * 24);
                  const leftPercentage = (offset / totalDays) * 100;
                  const widthPercentage = (duration / totalDays) * 100;
                  const tooltipContent = `ID: ${
                    booking.booking_id
                  }, Duration: ${duration.toFixed(0)} days, Start: ${formatDate(
                    bookingStart
                  )}, End: ${formatDate(bookingEnd)}`;

                  return (
                    <div
                      key={index}
                      className={barClass}
                      style={{
                        left: `${leftPercentage}%`,
                        width: `${widthPercentage}%`,
                      }}
                      title={tooltipContent}
                    />
                  );
                })}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookingsTimeline;
