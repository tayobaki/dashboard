"use client";

import { createContext, useContext, useState, useEffect } from "react";

const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(false);

  return (
    <Context.Provider value={{ activeMenu, setActiveMenu }}>
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
