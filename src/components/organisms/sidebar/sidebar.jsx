import React, { useContext, useEffect, useState } from "react";
import "./sidebar.css";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../../assets/images/Logo.png";
import CategoryActive from "../../atoms/icons/CategoryActive.svg";
import Category from "../../atoms/icons/Category.svg";
import Bag from "../../atoms/icons/Bag.svg";
import User from "../../atoms/icons/User.svg";
import Folder from "../../atoms/icons/Folder.svg";
import Chat from "../../atoms/icons/Chat.svg";
import ChatActive from "../../atoms/icons/ChatActive.svg";
import Settings from "../../atoms/icons/Setting.svg";
import Headphone from "../../atoms/icons/headphones.svg";
import Gift from "../../atoms/icons/gift.svg";
import Logout from "../../atoms/icons/Logout.svg";

import { EventContext } from "../../../context/EventContext";

const Sidebar = () => {
  const location = useLocation();
  const [active, setActive] = useState(0);

  useEffect(() => {
    const activeIndex = links.findIndex(
      (item) => item.href === location.pathname
    );
    setActive(activeIndex);
    setDisplaySideBar(false);
  }, [location]);

  const handleItemClick = (index) => {
    if (index === 6) {
      localStorage.clear();
      window.location.reload();
    }
    setActive(index);
    localStorage.setItem("activeIndex", index.toString());
  };

  const { setOpenSideBar } = useContext(EventContext);

  const [displaySideBar, setDisplaySideBar] = useState(false);

  useEffect(() => {
    const handleNotification = () => {
      setDisplaySideBar((prevState) => !prevState);
    };

    setOpenSideBar(() => handleNotification);

    return () => {
      setOpenSideBar(null);
    };
  }, [setOpenSideBar]);

  const links = [
    {
      href: "/",
      label: "Dashboard",
      icon: Category,
      activeIcon: CategoryActive,
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

      activeIcon: ChatActive,
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
    <div className={`sidebar ${displaySideBar ? "open" : ""}`}>
      <a href="/" className="brand">
        <img src={Logo} alt="Logo" />
        <h2>Metrix</h2>
      </a>

      <ul className="nav-links">
        {links.map((item, index) => (
          <li key={index}>
            <Link
              onClick={() => {
                handleItemClick(index);
              }}
              to={item.href}
              className={active === index ? "active" : null}
            >
              <img
                src={
                  active === index
                    ? item.activeIcon
                      ? item.activeIcon
                      : item.icon
                    : item.icon
                }
                alt="icon"
              />
              {item.label} {item.pushNote ? <span>{item.pushNote}</span> : null}
            </Link>
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
        <button className="logout" style={{ cursor: "pointer" }}>
          <img src={Logout} className="h-6 w-6" alt="" />
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
