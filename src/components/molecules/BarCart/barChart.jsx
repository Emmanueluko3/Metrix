import React from "react";
import "./barChart.css";

const data = [
  { date: "2023-07-01", price: 30 },
  { date: "2023-07-02", price: 45 },
  { date: "2023-07-03", price: 20 },
];

const BarChartComponent = () => {
  const maxPrice = Math.max(...data.map((entry) => entry.price));

  return (
    <div className="bar-chart">
      {data.map((entry) => (
        <div key={entry.date} className="bar">
          <div className="bar-label">{entry.date}</div>
          <div
            className="bar-fill"
            style={{ height: `${(entry.price / maxPrice) * 100}%` }}
          ></div>
        </div>
      ))}
    </div>
  );
};

export default BarChartComponent;
