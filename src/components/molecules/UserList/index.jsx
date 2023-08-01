import React, { useState } from "react";
import Porofilepic from "../../atoms/icons/profilepic.png";
import "./index.css";
import SearchBar from "../../atoms/seachbar";

const usersData = [
  {
    id: 1,
    name: "John Doe",
    profilePicture: Porofilepic,
    message: "Hello there!",
    date: "12:00 am",
    chats: [
      { id: 1, from: "John Doe", message: "Hi!", date: "2023-08-01 12:34" },
      // Add more chat messages here for John Doe
    ],
  },
  {
    id: 1,
    name: "John Doe",
    profilePicture: Porofilepic,
    message: "Hello there!dsjdkskjdksjdksjdksjkdjskdsdsdhjsdhjsh",
    date: "12:00 am",
    chats: [
      { id: 1, from: "John Doe", message: "Hi!", date: "2023-08-01 12:34" },
      // Add more chat messages here for John Doe
    ],
  },
];

const UserList = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [activeChat, setActiveChat] = useState(null);

  const handleUserClick = (user, index) => {
    setActiveChat(index);
    setSelectedUser(user);
  };

  const renderUsers = () => {
    return usersData.map((user, index) => (
      <div
        key={index}
        className={`user ${activeChat === index ? "active-chat" : null}`}
        onClick={() => handleUserClick(user, index)}
      >
        <img
          src={user.profilePicture}
          alt={user.name}
          className="user-profile-pic"
        />
        <div className="user-info">
          <h3 className="user-name">{user.name}</h3>
          <p className="user-message">{`${user.message.substring(0, 40)}${
            user.message.length >= 40 ? "..." : ""
          }`}</p>
        </div>
        <div className="time-stamp">
          <span>New</span>

          <p className="user-date">{user.date}</p>
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

    return selectedUser.chats.map((chat) => (
      <div key={chat.id} className="chat">
        <p className="chat-from">{chat.from}</p>
        <p className="chat-message">{chat.message}</p>
        <p className="chat-date">{chat.date}</p>
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
        {renderUsers()}
      </div>
      <div className="chats-container">
        <h2>Chats</h2>
        {renderChats()}
      </div>
    </div>
  );
};

export default UserList;
