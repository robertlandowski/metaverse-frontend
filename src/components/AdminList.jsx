import React, { useState, useEffect } from "react";
import axios from "axios";

function AdminList() {
  const [admins, setAdmins] = useState([]);

  useEffect(() => {
    const fetchAdmins = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/admins");
        setAdmins(res.data);
      } catch (err) {
        console.error("Error fetching admins:", err);
      }
    };

    fetchAdmins();
  }, []);

  return (
    <div>
      <h2>Admin List</h2>
      <ul>
        {admins.map((admin) => (
          <li key={admin.admin_id}>
            {admin.username} - {admin.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AdminList;
