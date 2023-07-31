import React from "react";
import "./layout.css";
import Sidebar from "../organisms/sidebar/sidebar";

import DashboardAnalysis from "../organisms/dasboadAnalytics";

const Layout = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="view">
        <DashboardAnalysis />
      </div>
    </div>
  );
};

export default Layout;
