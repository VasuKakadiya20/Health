import React, { useContext, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { mycontext } from "../../App";

const StressTrendChart = () => {
  const context = useContext(mycontext)
  const Data = context.sleepchart

  return (
  <>
    <div style={{ width: "100%", height: 120 }}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={Data} margin={{ top: 0, right: 20, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis
            dataKey="date"
            tick={{ fontSize: 10, fill: "#666" }}
            axisLine={{ stroke: "#666" }}
            tickLine={{ stroke: "#666" }}
          />
          <YAxis
            ticks={[0, 3, 6, 10]}
            domain={[0, 10]}
            tick={{ fontSize: 10, fill: "#666" }}
            axisLine={{ stroke: "#666" }}
            tickLine={{ stroke: "#666" }}
          />
          <Tooltip />
          
          <Line
            type="monotone"
            dataKey="stress"
            stroke="#F59E0B"
            strokeWidth={2}
            dot={{ r: 3, stroke: "#F59E0B", fill: "#F59E0B" }}
            activeDot={{ r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>  
</>
  );
};

export default StressTrendChart;
