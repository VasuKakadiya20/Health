import React, { useState } from "react";
import { FaCamera, FaEnvelope, FaArrowRight } from "react-icons/fa";
import "./ProfileHeader.css";

export default function ProfileHeader() {

  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  return (
    <>
      <div className="profile-header container">
        <div className="profile-top">
          <div>
            <h2 className="title">My Profile</h2>
            <p className="subtitle">
              Manage your personal information and settings
            </p>
          </div>
        </div>

        <div className="avatar-section">
          <div className="avatar">
            {image ? (
              <img src={image} alt="profile" className="avatar-img" />
            ) : (
              <span className="avatar-letter">V</span>
            )}


            <input
              type="file"
              id="upload-avatar"
              accept="image/*"
              style={{ display: "none" }}
              onChange={handleImageChange}
            />
          </div>
          <label htmlFor="upload-avatar" className="upload-btn">
            <FaCamera />
          </label>
        </div>
        <div className="info-text">
          <h3 className="name">Vasu Kakadiya</h3>
          <p className="email">
            <FaEnvelope className="icon" /> vasukakadiya1234@gmail.com
          </p>
        </div>
      </div>
    </>
  );
}
