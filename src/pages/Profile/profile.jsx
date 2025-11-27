import React, { useState } from "react";
import { FaUser, FaLock, FaHeartbeat, FaEdit } from "react-icons/fa";
import "./Profile.css";
import ProfileHeader from "../../components/profileheader/ProfileHeader";
import ChangePassword from "../../components/ChangePassword/ChangePassword";
import Health from "../../components/health/health";

export default function MyProfile() {
  const [activeTab, setActiveTab] = useState("personal");
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "Vasu",
    lastName: "Kakadiya",
    email: "vasukakadiya1234@gmail.com",
    gender: "Male",
    age: 55,
    phone: "1234567890",
    dob: "2000-01-01",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const editingcancel = () => {
    setIsEditing(!isEditing)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
    alert("✅ Profile updated successfully!");
  };

  return (
    <>
      <div className="container profile-container my-5 slideDown">
        {/* Header */}
        <ProfileHeader />

        <div className="profile-tabs d-flex justify-content-center mt-5 mb-5">
          <button
            className={`tab-btn ${activeTab === "personal" ? "active" : ""}`}
            onClick={() => setActiveTab("personal")}
          >
            <FaUser /> Personal
          </button>
          <button
            className={`tab-btn ${activeTab === "health" ? "active" : ""}`}
            onClick={() => setActiveTab("health")}
          >
            <FaHeartbeat /> Health
          </button>
          <button
            className={`tab-btn ${activeTab === "password" ? "active" : ""}`}
            onClick={() => setActiveTab("password")}
          >
            <FaLock /> Password
          </button>
        </div>

        {/* Personal Tab */}
        {activeTab === "personal" && (
          <form
            className={`profile-card mt-4 slideUp ml-5 ${activeTab === "personal" ? "slideUp" : "slideDown"
              }`}
            onSubmit={handleSubmit}
          >
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h5>User Profile Information</h5>
              {
                isEditing ? " " : <button
                  type="button"
                  className="btn btn-outline-save btn-sm"
                  onClick={handleEditToggle}
                >
                  <FaEdit /> Edit
                </button>
              }
            </div>

            <div className="row g-3 ">
              <div className="col-md-6">
                <label>First Name</label>
                <input
                  type="text"
                  name="firstName"
                  className="form-control"
                  value={formData.firstName}
                  onChange={handleChange}
                  disabled={!isEditing}
                />
              </div>      
              <div className="col-md-6">
                <label>Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  className="form-control"
                  value={formData.lastName}
                  onChange={handleChange}
                  disabled={!isEditing}
                />
              </div>
              <div className="col-md-6">
                <label>Email Address</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={!isEditing}
                />
              </div>
              <div className="col-md-6">
                <label>Gender</label>
                <input
                  type="text"
                  name="gender"
                  className="form-control"
                  value={formData.gender}
                  onChange={handleChange}
                  disabled={!isEditing}
                />
              </div>
              <div className="col-md-6">
                <label>Age</label>
                <input
                  type="number"
                  name="age"
                  className="form-control"
                  value={formData.age}
                  onChange={handleChange}
                  disabled={!isEditing}
                />
              </div>
              <div className="col-md-6">
                <label>Date of Birth</label>
                <input
                  type="date"
                  name="dob"
                  className="form-control"
                  value={formData.dob}
                  onChange={handleChange}
                  disabled={!isEditing}
                />
              </div>
              <div className="col-md-6">
                <label>Phone Number</label>
                <input
                  type="text"
                  name="phone"
                  className="form-control"
                  value={formData.phone}
                  onChange={handleChange}
                  disabled={!isEditing}
                />
              </div>
            </div>

            {isEditing && (
              <div className="editingmondon gap-2">
                <div className="text-end mt-3">
                  <button type="button" className="btn btn-outline-cancel" onClick={editingcancel}>
                    Cancel
                  </button>
                </div>

                <div className="text-end mt-3">

                  <button type="submit" className="btn btn-save">
                    Save Changes
                  </button>
                </div>
              </div>
            )}
          </form>
        )}

        {/* Health Tab */}
        {activeTab === "health" && (
          <Health />
        )}

        {/* Password Tab */}
        {activeTab === "password" && (
          <ChangePassword />
        )}
      </div>
    </>
  );
}
