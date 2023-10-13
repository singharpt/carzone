import React, { createContext, useState } from "react";

export const MyContext = createContext();

export function MyContextProvider({ children }) {
  const [state, setState] = useState({
    interiorState: [],
    exteriorState: [],
    wheelState: [],
    roofState: [],
    carState: [],
  });

  const updateStates = (key, value) => {
    setState((prevState) => ({ ...prevState, [key]: value }));
  };

  const getStates = (key) => state[key];

  return (
    <MyContext.Provider value={{ getStates, updateStates }}>
      {children}
    </MyContext.Provider>
  );
}
