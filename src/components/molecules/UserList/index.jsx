import React, { useState } from "react";
import Jane from "../../../assets/images/Jane.svg";
import Janet from "../../../assets/images/Janet.svg";
import Kunle from "../../../assets/images/Kunle.svg";
import Bag from "../../atoms/icons/Bag.svg";
import Send from "../../atoms/icons/Send.svg";
import Plus from "../../atoms/icons/plus.svg";
import Smile from "../../atoms/icons/smile.svg";
import Check from "../../atoms/icons/check.svg";
import iPhone from "../../atoms/icons/iPhone.svg";
import "./index.css";
import SearchBar from "../../atoms/seachbar";

const usersData = [
  {
    id: 1,
    name: "Jane Doe",
    profilePicture: Jane,
    message: "Hello, I want to make enquiries about your product",
    time: "12:00 am",
    date: "2023-08-01",
    status: "New",
    chats: [
      {
        message: "Hello, I want to make enquiries about your product",
        time: "12:00",
        productTag: true,
      },
      {
        message: "I am really interested in your product",
        time: "12:04",
        productTag: false,
      },
    ],
  },
  {
    id: 2,
    name: "Janet Adebayo",
    profilePicture: Janet,
    message: "Hello, I want to make enquiries about your product",
    time: "12:00 am",
    date: "2023-08-01",
    status: "New",
    chats: [
      {
        message: "Hello, I want to make enquiries about your product",
        time: "12:00",
      },
    ],
  },
  {
    id: 3,
    name: "Kunle Adekunle",
    profilePicture: Kunle,
    message: "Hello, I want to make enquiries about your product",
    time: "12:00 am",
    date: "2023-08-01",
    status: "New",
    chats: [
      {
        message: "Hello, I want to make enquiries about your product",
        time: "12:00",
      },
    ],
  },
  {
    id: 4,
    name: "Jane Doe",
    profilePicture: Jane,
    message: "Hello, I want to make enquiries about your product",
    time: "12:00 am",
    date: "2023-08-01",
    status: 2,
    chats: [
      {
        message: "Hello, I want to make enquiries about your product",
        time: "12:00",
      },
    ],
  },
  {
    id: 5,
    name: "Janet Adebayo",
    profilePicture: Janet,
    message: "Hello, I want to make enquiries about your product",
    time: "12:00 am",
    date: "2023-08-01",
    status: "",
    chats: [
      {
        message: "Hello, I want to make enquiries about your product",
        time: "12:00",
      },
    ],
  },
  {
    id: 4,
    name: "Jane Doe",
    profilePicture: Jane,
    message: "Hello, I want to make enquiries about your product",
    time: "12:00 am",
    date: "2023-08-01",
    status: 2,
    chats: [
      {
        message: "Hello, I want to make enquiries about your product",
        time: "12:00",
      },
    ],
  },
  {
    id: 5,
    name: "Janet Adebayo",
    profilePicture: Janet,
    message: "Hello, I want to make enquiries about your product",
    time: "12:00 am",
    date: "2023-08-01",
    status: "",
    chats: [
      {
        message: "Hello, I want to make enquiries about your product",
        time: "12:00",
      },
    ],
  },
  {
    id: 6,
    name: "Kunle Adekunle",
    profilePicture: Kunle,
    message: "Hello, I want to make enquiries about your product",
    time: "12:00 am",
    date: "2023-08-01",
    status: "",
    chats: [
      {
        message: "Hello, I want to make enquiries about your product",
        time: "12:00",
      },
    ],
  },
];

const UserList = () => {
  const [selectedUser, setSelectedUser] = useState([usersData[0]]);
  const [activeChat, setActiveChat] = useState(0);

  const [messages, setMessages] = useState([
    "Hello Janet, thank you for reaching out",
    "What do you need to know?",
  ]);
  const [newMessage, setNewMessage] = useState("");
  const messageFromSender = ["Hello"];

  const handleSendMessage = () => {
    if (newMessage.trim() !== "") {
      setMessages([...messages, newMessage]);
      setNewMessage("");
    }
  };

  const handleUserClick = (user, index) => {
    setActiveChat(index);
    setSelectedUser([user]);
  };

  const renderUsers = () => {
    return usersData.map((user, index) => (
      <div
        key={index}
        className={`user  ${activeChat === index ? "active-chat" : null}`}
        onClick={() => handleUserClick(user, index)}
      >
        <img
          src={user.profilePicture}
          alt={user.name}
          className="user-profile-pic"
        />
        <div className="user-info">
          <h3 className="user-name">{user.name}</h3>
          <p className="user-message">{`${user.message.substring(0, 24)}${
            user.message.length >= 35 ? "..." : ""
          }`}</p>
        </div>
        <div className="time-stamp">
          {user.status === "New" && <span>{user.status}</span>}
          {user.status === 2 && (
            <div className="no-of-chats">{user.status}</div>
          )}

          <p className="user-date">{user.time}</p>
        </div>
      </div>
    ));
  };

  const renderChats = () => {
    if (!selectedUser) {
      return (
        <div className="no-user-selected">Select a user to view chats.</div>
      );
    }

    return selectedUser.map((item, index) => (
      <div key={index} className="chat flex flex-col justify-between">
        <div className="chat-head">
          <img
            className="profilepics"
            src={item.profilePicture}
            alt="Jane Doe"
          />
          <div className="user-status">
            <h4>{item.name}</h4>
            <p style={{ color: "#B6BFE8" }}>
              <span className="bpoint"></span>Online{" "}
              <span style={{ color: "#8B8D97" }}>12:55 am</span>
            </p>
          </div>
          <div className="user-status-right">
            <div className="flex">
              <div className="bannerOne">New Customer</div>
              <a href="/profile" style={{ color: "#5570F1" }}>
                View Profile
              </a>
            </div>
            <p className="flex items-center" style={{ color: "#8B8D97" }}>
              <img src={Bag} className="h-4 w-4" alt="" /> 0 Orders
            </p>
          </div>
        </div>

        <div className="w-full h-60 overflow-y no-scrollbar">
          <div className="w-full flex justify-center item-center">
            <p className="chat-date">{item.date}</p>
          </div>

          <div className="chat-messages">
            {item.chats.map((item, index) => (
              <div key={index} className="w-full">
                {item.productTag === true ? (
                  <div className="product ">
                    <div className="flex items-end">
                      <img src={iPhone} alt="iPhone" />
                      <div style={{ marginRight: "13px" }}>
                        <p className="protitle">iPhone 13</p>
                        <p className="price">₦730,000.00</p>
                      </div>
                      <p
                        style={{
                          fontSize: "12px",
                          color: "#A6A8B1",
                          margin: "0",
                        }}
                      >
                        12 In Stock
                      </p>
                    </div>
                  </div>
                ) : null}

                <div className="customer-dm">
                  <p className="message">{item.message}</p>
                  <p style={{ marginTop: "2px", color: "#8B8D97" }}>
                    {item.time} am
                  </p>
                </div>
              </div>
            ))}

            <div className="flex flex-col">
              {messages.map((item, index) => (
                <div
                  key={index}
                  className="my-dm flex justify-end items-end w-full flex-col"
                >
                  <p className="message">{item}</p>
                  <p
                    className="flex items-center"
                    style={{ marginTop: "2px", color: "#8B8D97" }}
                  >
                    12:55 am{" "}
                    <span>
                      <img src={Check} alt="" />
                    </span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex cus-px">
          <div className="input-container">
            <div className="plus-icon">
              <img src={Plus} className="w-6 h-6" alt="file" />
            </div>
            <input
              className="message-input"
              type="text"
              placeholder="Your message"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
            />
            <div className="emojis">
              <img src={Smile} className="w-6 h-6" alt="icon" />
            </div>
            <button className="send-button" onClick={handleSendMessage}>
              <span style={{ marginRight: "8px" }}>Send</span>{" "}
              <img src={Send} className="w-6 h-6" alt="" />
            </button>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div className="user-list-container">
      <div className="users-container">
        <div className="flex justify-between header items-center">
          <h2 style={{ color: "#2C2D33", fontSize: "18px" }}>Contacts</h2>{" "}
          <p style={{ color: "#A6A8B1", fontSize: "18px" }}>34</p>
        </div>
        <div className="header flex justify-center cus-mb">
          <SearchBar />
        </div>
        <div className="flex flex-col h-60 overflow-y no-scrollbar">
          {renderUsers()}
        </div>
      </div>
      <div className="chats-container">{renderChats()}</div>
    </div>
  );
};

export default UserList;
