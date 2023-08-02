import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./layout.css";
import Sidebar from "../organisms/sidebar/sidebar";
import DashboardAnalysis from "../organisms/dasboadAnalytics";
import Navbar from "../organisms/navbar/navbar";
import Error from "../pages/error";
import Conversations from "../organisms/conversations";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { EventContext } from "../../context/EventContext";

const Layout = () => {
  const { triggerSideBar } = useContext(EventContext);

  const handleOpenSideBar = () => {
    triggerSideBar();
  };
  return (
    <Router>
      <div className="flex  w-full">
        <Sidebar />
        <div>
          <div className="sidebar-icon">
            <FontAwesomeIcon
              className="icon-blue"
              onClick={handleOpenSideBar}
              icon={faBars}
            />
          </div>
          <Navbar />

          <Routes>
            <Route
              path="/"
              element={
                <div className="view">
                  <DashboardAnalysis />
                </div>
              }
            />
            <Route
              path="/conversations"
              element={
                <div className="view">
                  <Conversations />
                </div>
              }
            />
            <Route
              path="*"
              element={
                <div className="view">
                  <Error />
                </div>
              }
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default Layout;
