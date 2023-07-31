import React from "react";
import Card from "../../molecules/Cards/card";
import Logo from "../../atoms/icons/Bag.svg";
import User from "../../atoms/icons/User.svg";
import PieChartComp from "../../molecules/Cards/PieChart";

function DashboardAnalysis() {
  return (
    <div className="flex flex-wrap">
      <Card
        logo={Logo}
        logoBg="rgba(85, 112, 241, 0.12)"
        titleOne="Sales"
        descOne="₦4,000,000.00"
        titleTwo="Volume"
        descTwo={450}
        percentageTwo="+20.00"
        cardBg="#fff"
      />
      <Card
        logo={User}
        logoBg="rgba(255, 204, 145, 0.16)"
        titleOne="Customers"
        descOne="1,250"
        percentageOne="+15.80%"
        titleTwo="Active"
        descTwo="1,180"
        percentageTwo="85%"
        cardBg="#fff"
      />
      <PieChartComp />
      <Card
        logo={User}
        logoBg="rgba(255, 204, 145, 0.16)"
        titleOne="Customers"
        descOne="1,250"
        percentageOne="+15.80%"
        titleTwo="Active"
        descTwo="1,180"
        percentageTwo="85%"
        cardBg="#5570F1"
      />
    </div>
  );
}

export default DashboardAnalysis;
