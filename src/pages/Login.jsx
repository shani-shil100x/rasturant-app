import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    address: "",
    age: "",
    gender: "",
    phone: "",
    password: "",
  });

  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, email, address, age, gender, phone, password } = form;

    if (username && email && address && age && gender && phone && password) {
      login(username);
      navigate("/");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-orange-50 px-4 py-10">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6 sm:p-8">
        <h2 className="text-2xl font-bold text-orange-600 mb-6 text-center">
          Login / Register
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={form.username}
            onChange={handleChange}
            required
            className="w-full h-11 border border-gray-300 px-4 rounded-md focus:ring-2 focus:ring-orange-400"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full h-11 border border-gray-300 px-4 rounded-md focus:ring-2 focus:ring-orange-400"
          />

          <input
            type="text"
            name="address"
            placeholder="Address"
            value={form.address}
            onChange={handleChange}
            required
            className="w-full h-11 border border-gray-300 px-4 rounded-md focus:ring-2 focus:ring-orange-400"
          />

          <input
            type="text"
            name="age"
            placeholder="Age"
            value={form.age}
            onChange={handleChange}
            required
            className="w-full h-11 border border-gray-300 px-4 rounded-md focus:ring-2 focus:ring-orange-400"
          />

          <select
            name="gender"
            value={form.gender}
            onChange={handleChange}
            required
            className="w-full h-11 border border-gray-300 px-4 rounded-md focus:ring-2 focus:ring-orange-400"
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            required
            className="w-full h-11 border border-gray-300 px-4 rounded-md focus:ring-2 focus:ring-orange-400"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
            className="w-full h-11 border border-gray-300 px-4 rounded-md focus:ring-2 focus:ring-orange-400"
          />

          <button
            type="submit"
            className="w-full h-11 bg-orange-600 text-white rounded-md hover:bg-orange-700 transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
