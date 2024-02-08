import React from "react";

function BusinessOwnerTable({ owners, onBanOwner }) {
  console.log(owners);
  return (
    <table>
      <thead>
        <tr>
          <th>Owner ID</th>
          <th>Name</th>
          <th>Contact Info</th>
          <th>Is Banned</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {owners.map((owner) => (
          <tr key={owner.owner_id}>
            <td>{owner.owner_id}</td>
            <td>{owner.name}</td>
            <td>{owner.contact_info}</td>
            <td>{`${owner.is_banned}`}</td>
            <td>
              <button onClick={() => onBanOwner(owner.owner_id)}>Ban</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default BusinessOwnerTable;
