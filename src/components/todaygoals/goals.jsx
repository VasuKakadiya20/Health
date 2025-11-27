import React from "react";
import "./goals.css";
import { Flame, Droplets, Moon, Brain, Target } from "lucide-react";

const Goals = () => {
  const goals = [
    {
      id: 1,
      title: "Calories Burned",
      icon: <Flame size={20} color="#f88010ff" />,
      current: 200,
      target: 500,
      unit: "kcal",
      color: "#f88010ff",
    },
    {
      id: 2,
      title: "Water Intake",
      icon: <Droplets size={20} color="#9b59b6" />,
      current: 2000,
      target: 2500,
      unit: "ml",
      color: "#9b59b6",
    },
    {
      id: 3,
      title: "Sleep Duration",
      icon: <Moon size={20} color="#5dade2" />,
      current: 6,
      target: 8,
      unit: "hrs",
      color: "#5dade2",
    },
    {
      id: 4,
      title: "Meditation",
      icon: <Brain size={20} color="#a66cff" />,
      current: 60,
      target: 15,
      unit: "min",
      color: "#a66cff",
    },
  ];

  const calcPercentage = (current, target) =>
    Math.min(((current / target) * 100).toFixed(0), 100);

  return (
  <>
      <div className="goals-container slideUp">
      <h4 className="goals-title"> <Target size={24} color="#4f46e5" strokeWidth={2} /> Today's Goals</h4>

      <div className="goals-grid gap-3">
        {goals.map((goal) => (
          <div className="goal-card" key={goal.id}>
            <div className="goal-header">
              <div className="goal-icon">{goal.icon}</div>
              <div>
                <h5>{goal.title}</h5>
                <p>
                  {goal.current}  {goal.unit} / {goal.target} {goal.unit}
                </p>
              </div>
            </div>

            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{
                  width: `${calcPercentage(goal.current, goal.target)}%`,
                  background: goal.color,
                }}
              ></div>
            </div>

            <p className="progress-text">
              {calcPercentage(goal.current, goal.target)}% Complete
            </p>
          </div>
        ))}
      </div>
    </div>
  </>
  );
};

export default Goals;
