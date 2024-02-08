import React, { useState, useEffect } from "react";
import axios from "axios";

function BusinessOwnersList() {
  const [businessOwners, setBusinessOwners] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchBusinessOwners = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          "http://localhost:3000/api/businessOwners"
        );
        setBusinessOwners(response.data);
      } catch (err) {
        setError("Failed to fetch business owners.");
        console.error("Error fetching business owners:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBusinessOwners();
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h2>Business Owners List</h2>
      <ul>
        {businessOwners.map((owner) => (
          <li key={owner.owner_id}>
            <strong>{owner.name}</strong> - {owner.contact_info}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BusinessOwnersList;
