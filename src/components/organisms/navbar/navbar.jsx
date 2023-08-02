import React from "react";
import "./navbar.css";
import CustomDropdown from "../../atoms/dropdown/customDropdown";
import Notification from "../../atoms/icons/Notification.svg";
import Home from "../../atoms/icons/Home.svg";
import Profile from "../../atoms/icons/profilepic.png";

function Navbar() {
  const profile = ["Nanny’s Shop", "Nanny’s Profile"];
  const activeIndex = localStorage.getItem("activeIndex");
  console.log("Active Index", activeIndex);
  return (
    <nav className="flex flex-col">
      <div className="flex justify-between w-full items-center">
        <h3 style={{ color: "#45464E", fontSize: "20px" }}>Dashboard</h3>
        <div className="flex items-center">
          <div className="drop">
            <CustomDropdown
              options={profile}
              bgColor="#FEF5EA"
              textColor="#1C1D22"
            />
          </div>
          <img
            src={Notification}
            className="h-6 w-6 notificationicon"
            alt="icon"
          />
          <img src={Profile} className="h-6 w-6 profilepic" alt="icon" />
        </div>
      </div>
      <div className="navicon flex items-center">
        <img src={Home} className="h-4 w-4" alt="" />{" "}
        <p>{activeIndex == 4 ? "/ Conversations" : null}</p>
      </div>
    </nav>
  );
}

export default Navbar;
