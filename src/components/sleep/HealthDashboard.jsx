import React, { useState } from "react";
import "./health.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip as ChartTooltip, Legend } from "chart.js";
import { Heart } from "lucide-react";

ChartJS.register(ArcElement, ChartTooltip, Legend);

export default function HealthDashboard({ value = [] }) {
  const [sleepdata ,setsleepdata] = useState(value)
  console.log("chart data:-",sleepdata)
     
    const Happy = 25;
    const energetic = 25;
    const Neutral = 25;
    const Stressed  = 25;
    const Sad = 25;
  const pieData = {
    labels: ["Happy " + Happy+ "%" , "Energetic "+ energetic +"%","Neutral "+ Neutral +"%","Stressed " + Stressed + "%" , "Sad " + Sad + "%"],
    datasets: [
      {
        data: [Happy, energetic, Neutral,Stressed,Sad],
        backgroundColor: ["#0fce8a", "#FFA726" ,"#6B7280","#EF4444","#3B82F6"],
        borderWidth: 0,
      },
    ],
  };

  return (
    <>
    <div className="container my-4">
      <div className="row g-4">
        <div className="col-md-6">
          <div className="card mood-card shadow-sm">
            <h6 className="card-title mb-3">
              <Heart/> Mood Tracker
            </h6>

            <div className="d-flex justify-content-between align-items-center mb-4">
              <span className="today-mood-text">Today's Mood</span>

              <span className="mood-badge">
                ⚡ energetic
              </span>
            </div>

            <div className="text-center mb-3">
              <div className="pie-container">
                <Pie data={pieData} />
              </div>
            </div>

            <p className="text-center last7-text">Last 7 Days Mood Distribution</p>
          </div>
        </div>
    {
      sleepdata.map((item)=>{
         return(
        <div className="col-md-6">
          <div className="card sleep-card shadow-sm">
            <h6 className="card-title mb-3">
              <span className="me-2">🌙</span>Sleep Tracker
            </h6>

         <div className="d-flex gap-3 mb-4">
              <div className="sleep-box bg-light-blue">
                <h4>{item.sleep_duration}h</h4>
                <p>Last Night</p>
              </div>

              <div className="sleep-box bg-light-purple">
                <h4 className="purple-text">{item.sleep_quality}</h4>
                <p>Quality</p>
              </div>

              <div className="sleep-box bg-light-blue">
                <h4 className="blue-text">1m</h4>
                <p>Deep Sleep</p>
              </div>
            </div>
          </div>
        </div>
        )
      }
             )} 
      </div>
    </div>
    </>
  );
} 
