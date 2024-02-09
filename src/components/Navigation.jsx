import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navigation.css";

const Navigation = ({ color }) => {
  return (
    <div>
      <Link to="/">Home</Link>
      {color === "red" && <Link to="admin/shops">Manage Shops</Link>}
      {color === "red" && <Link to="admin/business">Manage Businesses</Link>}
      {color === "red" && <Link to="admin/calendar">Calendar</Link>}
      {color === "blue" && <Link to="owner/booking">Schedule a Booking</Link>}
      {color === "blue" && <Link to="owner/available">Next Available</Link>}
    </div>
  );
};

export default Navigation;
