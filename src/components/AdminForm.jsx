import React, { useState } from "react";
import axios from "axios";

function AdminForm() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const { username, email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const body = JSON.stringify({ username, email, password });

      const response = await axios.post(
        "http://localhost:3000/api/admins/register",
        body,
        config
      );

      console.log("Admin Registered:", response.data);
      // Handle success (e.g., show a success message, clear form, redirect, etc.)
    } catch (error) {
      console.error("Error Registering Admin:", error.response.data);
      // Handle error (e.g., show error message)
    }
  };

  return (
    <div>
      <h2>Register Admin</h2>
      <form onSubmit={(e) => onSubmit(e)}>
        <div>
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={(e) => onChange(e)}
            required
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => onChange(e)}
            required
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => onChange(e)}
            required
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default AdminForm;
