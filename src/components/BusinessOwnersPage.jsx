import React, { useState, useEffect } from "react";
import axios from "axios";
import BusinessOwnerForm from "./BusinessOwnerForm";
import BusinessOwnerTable from "./BusinessOwnerTable";

function BusinessOwnersPage() {
  const [owners, setOwners] = useState([]);

  useEffect(() => {
    fetchOwners();
  }, []);

  const fetchOwners = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/api/businessOwners"
      );
      setOwners(response.data);
    } catch (error) {
      console.error("Failed to fetch owners:", error);
    }
  };

  const addOwner = async (ownerData) => {
    try {
      await axios.post("http://localhost:3000/api/businessOwners", ownerData);
      fetchOwners();
    } catch (error) {
      console.error("Failed to add owner:", error);
    }
  };

  const banOwner = async (ownerId) => {
    try {
      await axios.put(
        `http://localhost:3000/api/businessOwners/${ownerId}/ban`,
        {
          isBanned: true,
        }
      );
      fetchOwners();
    } catch (error) {
      console.error("Failed to ban owner:", error);
    }
  };

  return (
    <div>
      <BusinessOwnerForm onAddOwner={addOwner} />
      <BusinessOwnerTable owners={owners} onBanOwner={banOwner} />
    </div>
  );
}

export default BusinessOwnersPage;
