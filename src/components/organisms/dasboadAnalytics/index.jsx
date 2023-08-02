import React from "react";
import "./index.css";
import Card from "../../molecules/Cards/card";
import Graph from "../../atoms/icons/Graph.svg";
import Bag from "../../atoms/icons/Bag.svg";
import User from "../../atoms/icons/User.svg";
import FolderActive from "../../atoms/icons/FolderActive.svg";
import PieChartComp from "../../molecules/Cards/PieChart";
import BarChartComponent from "../../molecules/BarCart/barChart";
import Orders from "../../molecules/Oders/Orders";

function DashboardAnalysis() {
  return (
    <div className="flex sm-flex-col sm-justify-center sm-items-center justify-between">
      <div className="flex flex-wrap sm-order-2 justify-between dash-layout">
        <div className="sectionOne">
          <Card
            logo={Graph}
            logoBg="rgba(85, 112, 241, 0.12)"
            date={true}
            titleOne="Sales"
            descOne="₦4,000,000.00"
            titleTwo="Volume"
            descTwo={450}
            percentageTwo="+20.00"
            cardBg="#fff"
            descColor="#45464E"
            titleColor="#BEC0CA"
            percentageColor="#519C66"
          />
        </div>
        <div className="sectionOne">
          <Card
            logo={User}
            logoBg="rgba(255, 204, 145, 0.16)"
            date={true}
            titleOne="Customers"
            descOne="1,250"
            percentageOne="+15.80%"
            titleTwo="Active"
            descTwo="1,180"
            percentageTwo="85%"
            cardBg="#fff"
            titleColor="#BEC0CA"
            descColor="#45464E"
            percentageColor="#519C66"
          />
        </div>
        <div className="sectionTwo flex justify-between">
          <div className="sectionOne">
            <PieChartComp />
          </div>
          <div className="sectionOne flex justify-between flex-col">
            <Card
              logo={FolderActive}
              logoBg="rgba(255, 255, 255, 0.16)"
              titleOne="All Products"
              descOne="45"
              titleTwo="Active"
              descTwo="32"
              percentageTwo="+24%"
              cardBg="#5570F1"
              titleColor="#fff"
              descColor="#fff"
              percentageColor="#fff"
            />{" "}
            <div className="mb-20"></div>
            <Card
              logo={User}
              logoBg="rgba(255, 204, 145, 0.16)"
              date={true}
              titleOne="Abandoned Cart"
              descOne="20%"
              percentageOne="+0.00%"
              titleTwo="Customers"
              descTwo="30"
              cardBg="#fff"
              titleColor="#519C66"
              descColor="#45464E"
              percentageColor="#519C66"
            />
          </div>
        </div>

        <BarChartComponent />
      </div>
      <div className="orders-view sm-order-1 mb-10">
        <div className="viewTop w-full">
          <Card
            logo={Bag}
            logoBg="rgba(85, 112, 241, 0.12)"
            date={true}
            titleOne="All Orders"
            descOne="450"
            titleTwo="Pending"
            descTwo={5}
            cardBg="#fff"
            descColor="#45464E"
            titleColor="#BEC0CA"
            percentageColor="#519C66"
          />
        </div>
        <Orders />
      </div>
    </div>
  );
}

export default DashboardAnalysis;
