import React from "react";
import {
  Dumbbell,
  Flame,
  Scale,
  Heart,
  Clock,
  Gauge,
  HeartPulse,
  Pill,
  Footprints,
  Thermometer,
  Moon,
  Activity,
  Milk,
  Wheat,
  Fish,
  Droplets,
  Brain,
} from "lucide-react";
import "./HealthMetrics.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { MdMood } from "react-icons/md";

const HealthMetrics = () => {
  const metrics = [
    {
      title: "Workouts",
      value: "0",
      color: "sky",
      icon: <Dumbbell size={36} className="text-sky" />,
    },
    {
      title: "Calories",
      value: "0",
      color: "peach",
      icon: <Flame size={36} className="text-peach" />,
    },
    {
      title: "Weight",
      value: "0kg",
      color: "gray",
      icon: <Scale size={36} className="text-gray" />,
    },
    {
      title: "Mood",
      value: "😐",
      color: "aqua",
      icon: <MdMood size={36} className="text-aqua" />,
    },
    {
      title: "Sleep",
      value: "0hrs",
      color: "mint",
      icon: <Moon size={36} className="text-mint" />,
    },
    {
      title: "Water",
      value: "0 ml",
      color: "lavender",
      icon: <Droplets size={36} className="text-lavender" />,
    },
    {
      title: "Body Temperature",
      value: "--°F",
      color: "gray",
      icon: <Thermometer size={36} className="text-gray" />,
    },
    {
      title: "Steps",
      value: "0",
      color: "aqua",
      icon: <Footprints size={36} className="text-aqua" />,
    },
    {
      title: "Protein",
      value: "--g",
      color: "mint",
      icon: <Fish size={36} className="text-mint" />,
    },
    {
      title: "Meditation",
      value: "0 min",
      color: "lavender",
      icon: <Brain size={36} className="text-lavender" />,
    },
    {
      title: "Heart Rate",
      value: "--",
      color: "sky",
      icon: <Heart size={36} className="text-sky" />,
    },
    {
      title: "Blood Pressure",
      value: "--",
      color: "peach",
      icon: <HeartPulse size={36} className="text-peach" />,
    },
    // {
    //   title: "Insulin Delivery",
    //   value: "--U",
    //   color: "mint",
    //   icon: <Pill size={36} className="text-mint" />,
    // },
    // {
    //   title: "Insulin Delivery",
    //   value: "--U",
    //   color: "mint",
    //   icon: <Pill size={36} className="text-mint" />,
    // },
    // {
    //   title: "HRV",
    //   value: "--ms",
    //   color: "aqua",
    //   icon: <Activity size={36} className="text-aqua" />,
    // },
    // {
    //   title: "Calcium",
    //   value: "--mg",
    //   color: "sky",
    //   icon: <Milk size={36} className="text-sky" />,
    // },
    // {
    //   title: "Carbs",
    //   value: "--g",
    //   color: "peach",
    //   icon: <Wheat size={36} className="text-peach" />,
    // },

    // {
    //   title: "Vitamin B12",
    //   value: "--μg",
    //   color: "lavender",
    //   icon: <Pill size={36} className="text-lavender" />,
    // },

  ];

  return (
 <>
     <div className="health-metrics-container slideDown">
      <div className="containe my-2">
        <div className="d-flex align-items-center gap-2 mb-4">
          <Activity size={20} className="text-sky" />
          <h4 className="fw-bold text-dark">Health Metrics</h4>
        </div>

        <div className="row g-4 rgap">
          {metrics.map((metric, index) => (
            <div key={index} className="col-6 col-md-4 col-lg-2">
              <div
                className={`card border-0 shadow-sm text-center p-3 bg-${metric.color}-subtle`}
              >
                <div className="d-flex justify-content-between align-items-center">
                  <div className="text-start">
                    <p className={`text-${metric.color} small fw-semibold mb-1`}>
                      {metric.title}
                    </p>
                    <p
                      className={`text-${metric.color} m-0`}
                      style={{
                        fontWeight: 800,
                        fontSize: "1.25rem",
                        letterSpacing: "0.5px",
                      }}
                    >
                      {metric.value}
                    </p>
                  </div>
                  {metric.icon}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
 </>
  );
};

export default HealthMetrics;
