// src/components/RegisterPage/RegisterPage.js

import React, { useState } from "react";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("Registering...");

    try {
      const response = await fetch("https://your-backend-url/api/auth/register", {
        // ✅ Task requirement: include method and headers
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setMessage("Registration successful! You can now log in.");
        setFormData({ username: "", email: "", password: "" });
      } else {
        const errorData = await response.json();
        setMessage(`Registration failed: ${errorData.error || "Unknown error"}`);
      }
    } catch (error) {
      console.error("Error registering user:", error);
      setMessage("Error connecting to the server.");
    }
  };

  return (
    <div className="register-page">
      <h2>Register</h2>
      <form onSubmit={handleSubmit} className="register-form">
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </label>

        <button type="submit">Register</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default RegisterPage;
