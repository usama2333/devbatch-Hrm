import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["", "" ],
  ["10 AM", 1000],
  ["3 PM", 1170],
  ["8 PM", 660],
  ["10 PM", 1030],
];

export const options = {
  title: "",
  hAxis: { title: "", titleTextStyle: { color: "#333" } },
  vAxis: { minValue: 0 },
  chartArea: { width: "70%", height: "65%" , },
};

export function ChartComponent() {
  return (
    <Chart
    
      chartType="AreaChart"
      width="100%"
      height="280px"
      data={data}
      options={options}
    />
  );
}
