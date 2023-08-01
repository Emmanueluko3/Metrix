import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./layout.css";
import Sidebar from "../organisms/sidebar/sidebar";
import DashboardAnalysis from "../organisms/dasboadAnalytics";
import Navbar from "../organisms/navbar/navbar";
import Error from "../pages/error";
import Chat from "../molecules/chat/chat";
import Conversations from "../organisms/conversations";

const Layout = () => {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div>
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
