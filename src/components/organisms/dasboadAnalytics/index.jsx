import React from "react";
import Card from "../../molecules/Cards/card";
import Logo from "../../atoms/icons/Bag.svg";
import User from "../../atoms/icons/User.svg";
import PieChartComp from "../../molecules/Cards/PieChart";
import BarChartComponent from "../../molecules/BarCart/barChart";

function DashboardAnalysis() {
  return (
    <div className="flex flex-wrap">
      <Card
        logo={Logo}
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
      <PieChartComp />
      <Card
        logo={User}
        logoBg="rgba(255, 255, 255, 0.16)"
        titleOne="Customers"
        descOne="1,250"
        percentageOne="+15.80%"
        titleTwo="Active"
        descTwo="1,180"
        percentageTwo="85%"
        cardBg="#5570F1"
        titleColor="#fff"
        descColor="#fff"
        percentageColor="#fff"
      />

      <BarChartComponent />
    </div>
  );
}

export default DashboardAnalysis;
