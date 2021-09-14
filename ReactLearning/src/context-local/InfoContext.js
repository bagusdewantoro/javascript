import React, { createContext, useReducer, useEffect } from 'react';

// reducer
let reducer = (info, newInfo) => {
  // to reset the value:
  if (newInfo === null) {
    localStorage.removeItem("info");
    return initialState;
  }
  return { ...info, ...newInfo };
};

// initial state
const initialState = {
  name: "John Smith",
  age: 52,
  email: "john.smith@gmail.com"
};

// LOCAL STORAGE
const localState = JSON.parse(localStorage.getItem("info"));

// create context
const InfoContext = createContext();

// Provider Component
const InfoProvider = ({ children }) => {
  // without LOCAL STORAGE
  // const [info, setInfo] = useReducer(reducer, initialState);

  // with LOCAL STORAGE:
  const [info, setInfo] = useReducer(reducer, localState || initialState);
  useEffect(() => {
    localStorage.setItem("info", JSON.stringify(info));
  }, [info]);

  return (
    <InfoContext.Provider value={{ info, setInfo }} >
      { children }
    </InfoContext.Provider>
  );
};

export { InfoContext, InfoProvider };
