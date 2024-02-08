import React from "react";
import "../styles/ShopTable.css";

function ShopTable({ shops, deleteShop }) {
  console.log(shops);
  return (
    <table>
      <thead>
        <tr>
          <th>Shop Name</th>
          <th>Description</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {shops.map((shop) => (
          <tr key={shop.shop_id}>
            <td>{shop.name}</td>
            <td>{shop.description}</td>
            <td>
              <button onClick={() => deleteShop(shop.shop_id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ShopTable;
