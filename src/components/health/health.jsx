import React, { useState } from 'react';
import { FaEdit } from "react-icons/fa";

function Health() {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    Height: "",
    Weight: "",
    WeightType: "",
    HeightType: "",
    CurrentBMI: 0,
    FitnessGoal: "",
    YourInterest: "",
    WorkoutIntensity: "",
    email: "",
    gender: "",
    dob: "",
    phone: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const editingcancel = () => {
    setIsEditing(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
    alert("✅ Profile updated successfully!");
  };

  return (
    <>
      <form className="profile-card mt-4 slideUp"onSubmit={handleSubmit}>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h5>User Profile Information</h5>
          {!isEditing && (
            <button
              type="button"
              className="btn btn-outline-save btn-sm"
              onClick={handleEditToggle}
            >
              <FaEdit /> Edit
            </button>
          )}
        </div>

        <div className="row g-3">
          <div className="col-md-6">
            <label>Height (feet)</label>
            <input
              type="number"
              name="Height"
              placeholder="5.7"
              className="form-control"
              value={formData.Height}
              onChange={handleChange}
              disabled={!isEditing}
            />
          </div>


          <div className="col-md-6">
            <label>Weight (kg)</label>
            <input
              type="number"
              name="Weight"
              placeholder="80"
              className="form-control"
              value={formData.Weight}
              onChange={handleChange}
              disabled={!isEditing}
            />
          </div>
  
          <div className="col-md-6">
            <label>Height Type</label>
            <select
              name="HeightType"
            className="form-select form-control"
              value={formData.HeightType}
              onChange={handleChange}
              disabled={!isEditing}
            >
              <option value="Feet">Feet</option>
              <option value="Centimeters (cm)">Centimeters (cm)</option>
            </select>
          </div>

          <div className="col-md-6">
            <label>Weight Type</label>
            <select
              name="WeightType"
           className="form-select form-control"
              value={formData.WeightType}
              onChange={handleChange}
              disabled={!isEditing}
            >
              <option value="Kilograms (kg)">Kilograms (kg)</option>
              <option value="Pounds (lbs)">Pounds (lbs)</option>
            </select>
          </div>

          <div className="col-md-6">
            <label>Current BMI</label>
            <input
              type="number"
              name="CurrentBMI"
              className="form-control"
              value={formData.CurrentBMI}
              onChange={handleChange}
              disabled={!isEditing}
            />
          </div>

          <div className="col-md-6">
            <label>Fitness Goal</label>
            <select
              name="FitnessGoal"
              className="form-select form-control"
              value={formData.FitnessGoal}
              onChange={handleChange}
              disabled={!isEditing}
            >
              <option value="">Select Fitness Goal</option>
              <option value="weight_loss">Weight Loss</option>
              <option value="muscle_gain">Muscle Gain</option>
              <option value="maintain">Maintain Fitness</option>
              <option value="endurance">Increase Endurance</option>
            </select>
          </div>

          <div className="col-md-6">
            <label>Your Interest</label>
            <select
              name="YourInterest"
               className="form-select form-control"
              value={formData.YourInterest}
              onChange={handleChange}
              disabled={!isEditing}
            >
              <option value="">Select Interest</option>
              <option value="yoga">Yoga</option>
              <option value="cardio">Cardio</option>
              <option value="strength">Strength Training</option>
              <option value="meditation">Meditation</option>
              <option value="sports">Sports</option>
            </select>
          </div>

          <div className="col-md-6">
            <label>Workout Intensity</label>
            <select
              name="WorkoutIntensity"
               className="form-select form-control"
              value={formData.WorkoutIntensity}
              onChange={handleChange}
              disabled={!isEditing}
            >
              <option value="">Select Intensity</option>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>

        </div>

        {isEditing && (
          <div className="d-flex justify-content-end gap-2 mt-3">
            <button
              type="button"
              className="btn btn-outline-cancel"
              onClick={editingcancel}
            >
              Cancel
            </button>
            <button type="submit" className="btn btn-save">
              Save Changes
            </button>
          </div>
        )}
      </form>
    </>
  );
}

export default Health;
