import React from "react";
import "./layout.css";
import Sidebar from "../organisms/sidebar/sidebar";
import Card from "../molecules/Cards/card";

const Layout = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="view">
        <Card />
      </div>
    </div>
  );
};

export default Layout;
