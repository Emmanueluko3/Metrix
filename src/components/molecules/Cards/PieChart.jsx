import React from "react";
import "./card.css";
import CustomDropdown from "../../atoms/dropdown/customDropdown";
import { PieChart } from "react-minimal-pie-chart";

const data = [
  { title: "Color 1", value: 50, color: "#5570F1" },
  { title: "Color 2", value: 10, color: "#97A5EB" },
  { title: "Color 3", value: 25, color: "#FFCC91" },
];

const PieChartComp = () => {
  const date = ["This Week", "Last Week", "1 Month"];

  return (
    <div className="cus-bg-white card-view-pie flex justify-between items-center flex-col">
      <div className="flex items-center justify-between w-full">
        <h3>Marketting</h3>

        <CustomDropdown options={date} />
      </div>
      <div
        className="flex justify-between w-full"
        style={{ marginBottom: "20px" }}
      >
        <p>
          <span
            style={{
              display: "inline-block",
              width: "8px",
              height: "8px",
              background: "#5570F1",
              borderRadius: "50%",
              marginRight: "5px",
            }}
          ></span>
          Acquisition
        </p>
        <p>
          <span
            style={{
              display: "inline-block",
              width: "8px",
              height: "8px",
              background: "#97A5EB",
              borderRadius: "50%",
              marginRight: "5px",
            }}
          ></span>
          Purchase
        </p>
        <p>
          <span
            style={{
              display: "inline-block",
              width: "8px",
              height: "8px",
              background: "#FFCC91",
              borderRadius: "50%",
              marginRight: "5px",
            }}
          ></span>
          Purchase
        </p>
      </div>

      <div className="piechart">
        <PieChart
          data={data}
          lineWidth={20}
          animate
          // label
          labelStyle={{
            fontSize: "5px",
          }}
        />

        <span
          className="center-circle"
          style={{
            position: "absolute",
            display: "inline-block",
            width: "110px",
            height: "110px",
            background: "#fff",
            borderRadius: "50%",
            marginRight: "5px",
          }}
        ></span>
      </div>
    </div>
  );
};

export default PieChartComp;
