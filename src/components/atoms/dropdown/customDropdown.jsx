import React, { useState } from "react";
import "./customDropdown.css";

const CustomDropdown = ({ options, bgColor, textColor }) => {
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prevState) => !prevState);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="custom-dropdown">
      <button
        style={{
          background: bgColor,
          color: textColor ? textColor : "#bec0ca",
        }}
        className="dropdown-toggle"
        onClick={toggleDropdown}
      >
        {selectedOption}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="dropdown-icon"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          {options.map((option) => (
            <li
              key={option}
              onClick={() => handleOptionSelect(option)}
              style={{ color: textColor ? textColor : "#bec0ca" }}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomDropdown;
