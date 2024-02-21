import React, { createContext, useState } from "react";

export const CounterContext = createContext(null);

export const CounterProvider = ({ children }) => {
  const [event, setEvent] = useState(null);

  return (
    <CounterContext.Provider value={{ event, setEvent }}>
      {children}
    </CounterContext.Provider>
  );
};
