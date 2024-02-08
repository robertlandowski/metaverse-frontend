import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navigation.css";

const Navigation = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="admin/shops">Manage Shops</Link>
      <Link to="admin/business">Manage Businesses</Link>
      <Link to="admin/calendar">Calendar</Link>
    </div>
  );
};

export default Navigation;
