import * as React from "react";
import { Typography, Stack } from "@mui/material";
import "./PieChart.css";
import { PieChart as MUIPieChart } from "@mui/x-charts/PieChart";

const CustomPieChart = ({ identifier, id, onClick }) => {
  // Define your data, styling, and other props for the pie chart
  const items = [
    { label: "Happy", value: 25 },
    { label: "Sad", value: 25 },
    { label: "Surprised", value: 25 },
    { label: "Neutral", value: 20 },
    { label: "Angry", value: 20 },
    { label: "Scared", value: 20 },
    { label: "Disgust", value: 20 },
  ];

  return (
    <MUIPieChart
      series={[
        {
          arcLabel: (item) => item.label,
          data: items,
          outerRadius: 250,
          innerRadius: 0,
          highlightScope: { faded: "global", highlighted: "item" },
          faded: { innerRadius: 30, additionalRadius: -30 },
        },
      ]}
      sx={{
        [`& .custom-label`]: {
          fill: "white",
          fontWeight: "bold",
        },
      }}
      onClick={onClick} // Use the onClick function provided from the parent component
      width={700}
      height={500}
      margin={{ right: 100 }}
    />
  );
};

export default CustomPieChart;
