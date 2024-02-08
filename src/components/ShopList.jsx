import React, { useState, useEffect } from "react";
import axios from "axios";

function ShopsList() {
  const [shops, setShops] = useState([]);

  useEffect(() => {
    const fetchShops = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/shops");
        setShops(res.data);
      } catch (err) {
        console.log("Error fetching shops:", err);
      }
    };

    fetchShops();
  }, []);

  return (
    <div>
      <h2>Shops List</h2>
      <ul>
        {shops.map((shop) => (
          <li key={shop.shop_id}>
            <strong>{shop.name}</strong>: {shop.description}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShopsList;
