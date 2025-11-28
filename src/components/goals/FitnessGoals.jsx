import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaEdit } from "react-icons/fa";
import { Target } from "lucide-react";
import { useEffect } from "react";
import { fetchDataFromApi, postData } from "../../api/Api";

export default function FitnessGoals() {
  const [isEditing, setIsEditing] = useState(false);
const [formData, setFormData] = useState({
  Steps: "",
  Calories: "",
  Workout: "",
  WDuration: "",
  Water: "",
  Weight: "",
  Sleep: "",
});

  const username = "vk"

  useEffect(()=>{
    fetchDataFromApi(`/Goals/${username}`).then((res)=>{
      console.log("goal data:-",res)
      if (res.length > 0) {
        setFormData(res[0]); 
      }
    })
  },[])
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const editingcancel = () => {
    setIsEditing(false);
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const bodyData = { ...formData, username };

    const response = await postData(`/Goals/create`, bodyData);
    console.log("Update Response:", response);
    if (response?.status) {
      alert(response.message || "Goals saved successfully!");
    } else {
      alert("Something went wrong!");
    }
    setIsEditing(false);
    fetchDataFromApi(`/Goals/${username}`).then((res)=>{
      console.log("goal data:-",res)
      if (res.length > 0) {
        setFormData(res[0]); 
      }
    })
  } catch (err) {
    console.error("Error updating goals:", err);
    alert("Failed to update goals!");
  }
};


  return (
  <>

    <div className="slideDown d-flex justify-content-between align-items-center">
                    <h1 className="fw-bold">My Fitness Goals <Target/></h1>
                </div>

      <form className="slideDown fitness-goals-container container py-5 mt-5" onSubmit={handleSubmit}>
      <div className="fitheader mb-3">
        {/* <h2 className="text-center mb-4 page-title">🏆 Your This Month Fitness Goals</h2> */}
        <h3 className="text-center mb-4 page-title">Fitness Goals</h3>
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


      <div className="row g-4">
        {/* Steps */}
        <div className="col-md-6 col-lg-6">
          <div className="goals-card p-4">
            <h5 className="goal-title">🏃 Steps Goal (Per Day)</h5>
            <input
              type="number"
              className="form-control mt-2"
              placeholder="Enter daily steps"
              name="Steps"
              value={formData.Steps}
              onChange={handleChange}
              disabled={!isEditing}
            />
          </div>
        </div>

        {/* Calories */}
        <div className="col-md-6 col-lg-6">
          <div className="goals-card p-4">
            <h5 className="goal-title">🔥 Calories Goal (Per Day)</h5>
            <input
              type="number"
              className="form-control mt-2"
              placeholder="Enter daily calories"
              name="Calories"
              value={formData.Calories}
              onChange={handleChange}
              disabled={!isEditing}
            />
          </div>
        </div>

        {/* Workout */}
        <div className="col-md-6 col-lg-6">
          <div className="goals-card p-4">
            <h5 className="goal-title">💪 Workout Goal (Per Day)</h5>
            <input
              type="number"
              className="form-control mt-2"
              placeholder="Workouts / week"
              name="Workout"
              value={formData.Workout}
              onChange={handleChange}
              disabled={!isEditing}
            />
          </div>
        </div>

        {/* Duration */}
        <div className="col-md-6 col-lg-6">
          <div className="goals-card p-4">
            <h5 className="goal-title">⏳ Duration  Goal (Per Day)</h5> {/*(Minutes) */}
            <input
              type="number"
              className="form-control mt-2"
              placeholder="Minutes per workout"
              name="WDuration"
              value={formData.WDuration}
              onChange={handleChange}
              disabled={!isEditing}
            />
          </div>
        </div>

        {/* Water */}
        <div className="col-md-6 col-lg-6">
          <div className="goals-card p-4">
            <h5 className="goal-title">💧 Water Intake (Per Day)</h5>
            <input
              type="number"
              className="form-control mt-2"
              placeholder="ml per day"
              name="Water"
              value={formData.Water}
              onChange={handleChange}
              disabled={!isEditing}
            />
          </div>
        </div>

        {/* Weight */}
        <div className="col-md-6 col-lg-6">
          <div className="goals-card p-4">
            <h5 className="goal-title">⚖️ Weight Goal</h5>
            <input
              type="number"
              className="form-control mt-2"
              placeholder="Target weight (kg)"
              name="Weight"
              value={formData.Weight}
              onChange={handleChange}
              disabled={!isEditing}
            />
          </div>
        </div>

        {/* Sleep */}
        <div className="col-md-6 col-lg-6">
          <div className="goals-card p-4">
            <h5 className="goal-title">😴 Sleep Target (Per Day)</h5>
            <input
              type="number"
              className="form-control mt-2"
              placeholder="Hours per night"
              name="Sleep"
              value={formData.Sleep}
              onChange={handleChange}
              disabled={!isEditing}
            />
          </div>
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
          <button type="submit" className="btn btn-save mr-2">
            Save Changes
          </button>
        </div>
      )}
    </form>
  </>
  );
}
