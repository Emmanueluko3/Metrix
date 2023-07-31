import React from "react";
import logo from "../../atoms/icons/Bag.svg";
import "./card.css";
import CustomDropdown from "../../atoms/dropdown/customDropdown";

const Card = (props) => {
  const options = ["This Week", "Last Week", "1 Month"];
  const {
    logo,
    date,
    logoBg,
    titleOne,
    descOne,
    titleTwo,
    descTwo,
    percentageOne,
    percentageTwo,
    cardBg,
    titleColor,
    descColor,
    percentageColor,
  } = props;
  return (
    <div
      style={{ background: cardBg }}
      className="card-view flex justify-between flex-col"
    >
      <div className="flex items-center justify-between">
        <div
          className="logo-icon flex justify-center items-center"
          style={{ background: logoBg }}
        >
          <img src={logo} alt="ico" />
        </div>

        {date === true ? <CustomDropdown options={options} /> : null}
      </div>
      <div className="flex items-start">
        <div className="w-half">
          <p style={{ color: titleColor, fontSize: "14px" }}>{titleOne}</p>
          <h3
            style={{ color: descColor, fontSize: "20px", whiteSpace: "nowrap" }}
          >
            {descOne}{" "}
            {percentageOne && (
              <span style={{ color: percentageColor, fontSize: "12px" }}>
                {percentageOne}
              </span>
            )}
          </h3>
        </div>
        <div className="w-half">
          <p style={{ color: titleColor, fontSize: "14px" }}>{titleTwo}</p>

          <h3
            style={{ color: descColor, fontSize: "20px", whiteSpace: "nowrap" }}
          >
            {descTwo}{" "}
            {percentageTwo && (
              <span style={{ color: percentageColor, fontSize: "12px" }}>
                {percentageTwo}
              </span>
            )}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Card;
