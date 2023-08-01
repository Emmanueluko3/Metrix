import React from "react";
import "./barChart.css";
import CustomDropdown from "../../atoms/dropdown/customDropdown";

const data = [
  { date: "Sept 10", price: 32 },
  { date: "Sept 11", price: 12 },
  { date: "Sept 12", price: 19 },
  { date: "Sept 13", price: 20 },
  { date: "Sept 14", price: 45 },
  { date: "Sept 15", price: 20 },
  { date: "Sept 16", price: 28 },
];

const BarChartComponent = () => {
  const maxPrice = Math.max(...data.map((entry) => entry.price));
  const sales = ["Sales", "Purchases"];
  const sumDate = ["Last 7 Days", "Last 30 Days", "Last 60 Days"];

  return (
    <div className="summary">
      <div className="flex justify-between">
        <div className="flex w-half items-center">
          <h3 style={{ marginRight: "18px" }}>Summary</h3>
          <CustomDropdown
            bgColor="rgba(85, 112, 241, 0.08)"
            textColor="#5570F1"
            options={sales}
          />
        </div>
        <CustomDropdown
          textColor="#1C1D22"
          bgColor="transparent"
          options={sumDate}
        />
      </div>
      <div className="bar-chart">
        <div>
          <p style={{ marginBottom: "34px", marginTop: 0 }} className="prices">
            100k
          </p>
          <p style={{ marginBottom: "34px" }} className="prices">
            80k
          </p>
          <p style={{ marginBottom: "34px" }} className="prices">
            60k
          </p>
          <p style={{ marginBottom: "34px" }} className="prices">
            40k
          </p>
          <p style={{ marginBottom: "34px" }} className="prices">
            20k
          </p>
        </div>
        {data.map((entry) => (
          <div key={entry.date} style={{ height: "100%" }}>
            <div className="bar">
              <div
                className="bar-fill"
                style={{ height: `${(entry.price / maxPrice) * 100}%` }}
              ></div>
            </div>
            <div className="bar-label">{entry.date}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BarChartComponent;
