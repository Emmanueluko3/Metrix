import React, { createContext, useState } from "react";

const EventContext = createContext();

const EventProvider = ({ children }) => {
  const [openSideBar, setOpenSideBar] = useState(null);
  const [openNotification, setOpenNotification] = useState(null);

  const triggerSideBar = () => {
    if (openSideBar) {
      openSideBar();
    }
  };

  const triggerNotification = () => {
    if (openNotification) {
      openNotification();
    }
  };

  return (
    <EventContext.Provider
      value={{
        triggerSideBar,
        setOpenSideBar,
        triggerNotification,
        setOpenNotification,
      }}
    >
      {children}
    </EventContext.Provider>
  );
};

export { EventContext, EventProvider };
