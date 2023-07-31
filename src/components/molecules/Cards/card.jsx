import React from "react";
import logo from "../../atoms/icons/Bag.svg";
import "./card.css";
import CustomDropdown from "../../atoms/dropdown/customDropdown";

const Card = () => {
  return (
    <div className="cus-bg-white card-view flex justify-between flex-col">
      <div className="flex items-center justify-between">
        <div className="logo-icon flex justify-center items-center">
          <img src={logo} alt="ico" />
        </div>

        <CustomDropdown />
      </div>
      <div className="flex items-start">
        <div className="w-half">
          <p style={{ color: "#BEC0CA", fontSize: "14px" }}>Sales</p>
          <h3 style={{ color: "#45464E", fontSize: "20px" }}>₦4,000,000.00</h3>
        </div>
        <div className="w-half">
          <p style={{ color: "#BEC0CA", fontSize: "14px" }}>Volume</p>

          <h3 style={{ color: "#45464E", fontSize: "20px" }}>
            450{" "}
            <span style={{ color: "#519C66", fontSize: "12px" }}>+20.00%</span>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Card;
