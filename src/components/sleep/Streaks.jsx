import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Award, Medal } from "lucide-react";

export default function Streaks() {
  const streaks = [
    {
      title: "Good Sleep Streak",
      desc: "Keep it up!",
      days: "5 Days",
      emoji: "😴",
      bg: "sleep-bg",
      badge: "badge-green",
    },
    // {
    //   title: "Meditation Streak",
    //   desc: "Great progress!",
    //   days: "1 Days",
    //   emoji: "🧘‍♀️",
    //   bg: "med-bg",
    //   badge: "badge-purple",
    // },
    {
      title: "Low Stress Streak",
      desc: "Amazing!",
      days: "3 Days",
      emoji: "💪",
      bg: "stress-bg",
      badge: "badge-blue",
    },
  ];

  return (
   <>
     <div className="container my-4 sideconteiner">
      <h5 className="mb-3">
       <Award/>Streaks & Achievements
      </h5>

      {streaks.map((item, index) => (
        <div key={index} className={`streak-card ${item.bg} mb-4`}>
          <div className="d-flex justify-content-between align-items-start">
            <div className="d-flex">
              <div className="emoji">{item.emoji}</div>
              <div>
                <h6 className="title">{item.title}</h6>
                <p className="desc">{item.desc}</p>
              </div>
            </div>

            <span className={`days-badge ${item.badge}`}>{item.days}</span>
          </div>
        </div>
      ))}
    </div>
   </>
  );
}
