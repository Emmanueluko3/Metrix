// src/components/organisms/Sidebar.js

import React, { useState } from "react";
import "./sidebar.css";
import Logo from "../../../assets/images/Logo.png";
import CategoryActive from "../../atoms/icons/CategoryActive.svg";
import Category from "../../atoms/icons/Category.svg";
import Bag from "../../atoms/icons/Bag.svg";
import User from "../../atoms/icons/User.svg";
import Folder from "../../atoms/icons/Folder.svg";

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [active, setActive] = useState(0);

  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const links = [
    {
      href: "/",
      label: "Dashboard",
      icon: CategoryActive,
      activeIcon: Category,
      pushNote: null,
    },
    {
      href: "/orders",
      label: "Oders",
      icon: Bag,
      activeIcon: null,
      pushNote: 3,
    },
    {
      href: "/customers",
      label: "Customers",
      icon: User,
      activeIcon: null,
      pushNote: null,
    },
    {
      href: "/inventory",
      label: "Inventory",
      icon: Folder,
      activeIcon: null,
      pushNote: null,
    },
    {
      href: "/conversations",
      label: "Conversations",
      icon: Bag,
      activeIcon: null,
      pushNote: 16,
    },
    {
      href: "/settings",
      label: "Settings",
      icon: Bag,
      activeIcon: null,
      pushNote: null,
    },
  ];

  return (
    <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
      <a href="/" className="brand">
        <img src={Logo} alt="Logo" />
        <h2>Metrix</h2>
      </a>
      {/* <button className="toggle-button" onClick={handleToggleSidebar}>
        {isSidebarOpen ? "Close" : "Open"}
      </button> */}
      <ul className="nav-links">
        {links.map((item, index) => (
          <li key={index}>
            <a
              onClick={() => {
                setActive(index);
              }}
              href={item.href}
              className={active == index ? "active" : null}
            >
              <img src={item.icon} alt="icon" />
              {item.label} {item.pushNote ? <span>{item.pushNote}</span> : null}
            </a>
          </li>
        ))}
      </ul>
      <div className="bottom-links">
        <a href="" className="contact-support">
          Contact Support
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
