import React from "react";
import "./Orders.css";
import Iphone from "../../atoms/icons/iPhone.svg";
import IphoneTwo from "../../atoms/icons/iPhone2.svg";

const orders = [
  {
    icon: Iphone,
    title: "iPhone 13",
    price: "730,000.00 x 1",
    date: "12 Sept 2022",
    productStatus: "Pending",
  },
  {
    icon: IphoneTwo,
    title: "iPhone 13",
    price: "730,000.00 x 1",
    date: "12 Sept 2022",
    productStatus: "Completed",
  },
  {
    icon: IphoneTwo,
    title: "iPhone 13",
    price: "730,000.00 x 1",
    date: "12 Sept 2022",
    productStatus: "Completed",
  },
  {
    icon: Iphone,
    title: "iPhone 13",
    price: "730,000.00 x 1",
    date: "12 Sept 2022",
    productStatus: "Pending",
  },
  {
    icon: IphoneTwo,
    title: "iPhone 13",
    price: "730,000.00 x 1",
    date: "12 Sept 2022",
    productStatus: "Completed",
  },
  {
    icon: Iphone,
    title: "iPhone 13",
    price: "730,000.00 x 1",
    date: "12 Sept 2022",
    productStatus: "Pending",
  },
];

function Orders() {
  return (
    <div className="orders">
      <h3 className="title">Recent Orders</h3>

      {orders.map((item, index) => (
        <div key={index} className="flex justify-between product">
          <div className="order-icon">
            <img src={item.icon} alt="Iphone" />
          </div>

          <div style={{ marginRight: "auto" }}>
            <h3 style={{ color: "#45464E", fontSize: "12px" }}>{item.title}</h3>
            <h3 style={{ color: "#33343A", fontSize: "12px" }}>
              ₦{item.price}
            </h3>
          </div>
          <div className="flex flex-col justify-end items-end">
            <h3 style={{ color: "#A6A8B1", fontSize: "12px" }}>{item.date}</h3>
            <span
              style={{
                background: "rgba(245, 126, 119, 0.12)",
                borderRadius: "8px",
                color:
                  item.productStatus === item.productStatus
                    ? "#CC5F5F"
                    : "#519C66",
                padding: "4px 15px",
              }}
            >
              {item.productStatus}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Orders;
