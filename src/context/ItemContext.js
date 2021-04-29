import React, { createContext, useReducer } from "react";
import { AppReducer } from "./AppReducer";

export const ItemContext = createContext();

const ItemContextProvider = (props) => {
  const [items, dispatch] = useReducer(AppReducer, []);

  return (
    <ItemContext.Provider value={{ items, dispatch }}>
      {props.children}
    </ItemContext.Provider>
  );
};

export default ItemContextProvider;
