"use client";
const { createContext, useState } = require("react");

const data = {
  short: {
    artists: [],
    tracks: [],
  },
  medium: {
    artists: [],
    tracks: [],
  },
  long: {
    artists: [],
    tracks: [],
  },
};

export const dataContext = createContext(data);

export const DataContextProvider = ({ children }) => {
  const [data, setData] = useState();
  const values = {
    data,
    setData,
  };

  return <dataContext.Provider value={values}>{children}</dataContext.Provider>;
};
