import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminForm from "./components/AdminForm";
import AdminList from "./components/AdminList";
import ShopsPage from "./components/AdminShops";
import BusinessOwnersPage from "./components/BusinessOwnersPage";
import ShopsList from "./components/ShopList";
import BusinessOwnerForm from "./components/BusinessForm";
import BusinessOwnersList from "./components/BusinessOwnersList";
import BookingForm from "./components/BookingForm";
import BookingsList from "./components/BookingList";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import AvailableBookingsTable from "./components/AvailableBookings";
import "./App.css";

function App() {
  const [showNav, setShowNav] = useState(false);
  const [color, setColor] = useState("red");

  const handleButtonClick = (val) => {
    if (color === val || !showNav) {
      setShowNav(!showNav);
    }

    setColor(val);
  };

  return (
    <div className="App">
      <div className={`navigation ${showNav ? `show ${color}` : `${color}`}`}>
        <Navigation color={color} />
      </div>
      <div className="main-container">
        <div className="content-container">
          <Routes>
            <Route
              path="/"
              element={<Home onButtonClick={handleButtonClick} />}
            />
            <Route path="admin/shops" element={<ShopsPage />} />
            <Route path="admin/business" element={<BusinessOwnersPage />} />
            <Route path="admin/calendar" element={<BookingsList />} />
            <Route path="owner/booking" element={<BookingForm />} />
            <Route
              path="owner/available"
              element={<AvailableBookingsTable />}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
