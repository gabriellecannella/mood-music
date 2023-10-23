import * as React from "react";
import { Typography, Stack } from "@mui/material";
import "./PieChart.css";
import { PieChart as MUIPieChart } from "@mui/x-charts/PieChart";

const CustomPieChart = ({setMood}) => {
  // Define your data, styling, and other props for the pie chart
  const items = [
    { label: "Happy", value: 25 },
    { label: "Sad", value: 25 },
    { label: "Surprised", value: 25 },
    { label: "Neutral", value: 25 },
    { label: "Angry", value: 25 },
    { label: "Scared", value: 25 },
    { label: "Disgust", value: 25 },
  ];
  const colorPalette = [
    "#FFD700",     // Yellow
    "#0000FF",       // Blue
    "#FFA500", // Orange
    "#808080",   // Gray
    "#FF0000",     // Red
    "#800080",    // Purple
    "#008000",   // Green
  ];

  const handlePieChartClick = (event, item) => {
    console.log(items[item.dataIndex].label);
    setMood(items[item.dataIndex].label);
  };

  return (
    <MUIPieChart
      colors={colorPalette}
      series={[
        {
          arcLabel: (item) => item.label,
          data: items,
          outerRadius: 250,
          innerRadius: 10,
          paddingAngle: 1,
          cornerRadius: 10,
          highlightScope: {faded: "global", highlighted: "item", preview: false},
          faded: { innerRadius: 30, additionalRadius: -30 },
        },
      ]}
      sx={{
        [`& .custom-label`]: {
          fill: "white",
          fontWeight: "bold", // Add fontWeight and fill properties
        },
      }}
      onClick={handlePieChartClick}
      width={700}
      height={500}
      margin={{ right: 100 }}
    />
  );
};

export default CustomPieChart;
