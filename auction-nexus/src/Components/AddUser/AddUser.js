import React, { useState } from "react";
import axios from "axios";

const AddUser = () => {
  const [userData, setUserData] = useState({
    user_name: "",
    password: "",
    email: "",
    role: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(false);

  const primaryColor = "#155436";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation: Check all required fields
    const missingFields = Object.entries(userData)
      .filter(([key, value]) => !value)
      .map(([key]) => key.replace("_", " ")); // Better readability for errors

    if (missingFields.length > 0) {
      setError(`Please fill the following fields: ${missingFields.join(", ")}`);
      setSuccess(false);
      return;
    }

    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      const response = await axios.post("http://localhost:4000/adduser", userData);
      console.log(response.data);

      setSuccess(true);
      setShowModal(true);
      setUserData({ user_name: "", password: "", email: "", role: "" });
    } catch (err) {
      console.error("Error adding user:", err);
      const errorMessage =
        err.response?.data?.message || "Failed to add user. Please try again.";
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-200 via-white to-green-100 relative px-4">
      {/* Animated Background Elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-green-200 rounded-full opacity-70 blur-2xl animate-pulse"></div>
      <div className="absolute bottom-5 right-5 w-48 h-48 bg-green-500 rounded-full opacity-40 blur-3xl animate-ping"></div>

      {/* Form Container */}
      <div
        className="relative z-10 w-full max-w-lg p-8 bg-white rounded-lg shadow-lg transform transition-transform hover:scale-105 duration-500"
        style={{ borderColor: primaryColor, borderWidth: "2px" }}
      >
        <h1
          className="text-2xl font-bold mb-8 text-center"
          style={{ color: primaryColor }}
        >
          Add New User
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <input
            name="user_name"
            value={userData.user_name}
            onChange={handleChange}
            className="p-4 border rounded-lg focus:ring focus:ring-green-200 focus:outline-none transition duration-300 text-lg"
            placeholder="Username"
            aria-label="Username"
            style={{ borderColor: primaryColor }}
          />
          <input
            name="password"
            type="password"
            value={userData.password}
            onChange={handleChange}
            className="p-4 border rounded-lg focus:ring focus:ring-green-200 focus:outline-none transition duration-300 text-lg"
            placeholder="Password"
            aria-label="Password"
            style={{ borderColor: primaryColor }}
          />
          <input
            name="email"
            type="email"
            value={userData.email}
            onChange={handleChange}
            className="p-4 border rounded-lg focus:ring focus:ring-green-200 focus:outline-none transition duration-300 text-lg"
            placeholder="Email"
            aria-label="Email"
            style={{ borderColor: primaryColor }}
          />
          <select
            name="role"
            value={userData.role}
            onChange={handleChange}
            className="p-4 border rounded-lg focus:ring focus:ring-green-200 focus:outline-none bg-white transition duration-300 text-lg"
            aria-label="Role"
            style={{ borderColor: primaryColor }}
          >
            <option value="" disabled>
              Select Role
            </option>
            <option value="admin">Admin</option>
            <option value="user">User</option>
            <option value="seller">Seller</option>
          </select>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button
            type="submit"
            className={`p-4 rounded-lg text-white font-semibold transform transition-transform duration-300 ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "hover:scale-105 hover:shadow-lg hover:bg-opacity-90"
            }`}
            style={{
              backgroundColor: primaryColor,
            }}
            disabled={loading}
          >
            {loading ? "Adding..." : "Add User"}
          </button>
        </form>
      </div>

      {/* Success Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-20">
          <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg text-center animate-fadeIn">
            <h2 className="text-xl font-bold mb-4" style={{ color: primaryColor }}>
              Success!
            </h2>
            <p className="text-gray-600">User has been added successfully.</p>
            <button
              onClick={() => setShowModal(false)}
              className="mt-6 p-3 rounded-lg text-white font-semibold"
              style={{ backgroundColor: primaryColor }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddUser;
