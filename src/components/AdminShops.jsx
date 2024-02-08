import React, { useState, useEffect } from "react";
import ShopForm from "./ShopForm";
import ShopTable from "./ShopTable";
import axios from "axios";

function ShopsPage() {
  const [shops, setShops] = useState([]);

  const fetchShops = async () => {
    const response = await axios.get("http://localhost:3000/api/shops");
    setShops(response.data);
  };

  useEffect(() => {
    fetchShops();
  }, []);

  const deleteShop = async (shopId) => {
    try {
      await axios.delete(`http://localhost:3000/api/shops/${shopId}`);
      fetchShops();
    } catch (err) {
      console.error("Failed to delete shop:", err);
    }
  };

  return (
    <div>
      <ShopForm onShopAdded={fetchShops} />
      <ShopTable shops={shops} deleteShop={deleteShop} />
    </div>
  );
}

export default ShopsPage;
