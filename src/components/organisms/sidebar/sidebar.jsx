import React, { useState } from "react";
import "./sidebar.css";
import Logo from "../../../assets/images/Logo.png";
import CategoryActive from "../../atoms/icons/CategoryActive.svg";
import Category from "../../atoms/icons/Category.svg";
import Bag from "../../atoms/icons/Bag.svg";
import User from "../../atoms/icons/User.svg";
import Folder from "../../atoms/icons/Folder.svg";
import Chat from "../../atoms/icons/Chat.svg";
import Settings from "../../atoms/icons/Setting.svg";
import Headphone from "../../atoms/icons/headphones.svg";
import Gift from "../../atoms/icons/gift.svg";
import Logout from "../../atoms/icons/Logout.svg";

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
      icon: Chat,
      activeIcon: null,
      pushNote: 16,
    },
    {
      href: "/settings",
      label: "Settings",
      icon: Settings,
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
        <a href="" className="contact-support flex items-center">
          <img
            src={Headphone}
            className="h-6 w-6"
            style={{ marginRight: "12px" }}
            alt="icon"
          />{" "}
          Contact Support
        </a>
        <div className="gift">
          <div className="flex items-center">
            <img
              src={Gift}
              className="h-6 w-6"
              style={{ marginRight: "12px" }}
              alt="icon"
            />{" "}
            <p style={{ color: "#1C1D22" }}>Free Gift Await You!</p>
          </div>
          <p style={{ color: "#6E7079", fontSize: "12px" }}>
            upgrade your Account
          </p>
        </div>
        <button className="logout">
          <img src={Logout} className="h-6 w-6" alt="" />
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
