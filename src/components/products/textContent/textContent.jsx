/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import dataProducts from "../../../data/carousel.json";

export const TextContext = createContext();

export const TextProvider = ({ children }) => {
  const [dynamicText, setDynamicText] = useState({
    id: dataProducts[0].id,
    title: dataProducts[0].title,
    subtitle: dataProducts[0].subtitle,
  });

  const updateText = (newText) => {
    setDynamicText(newText);
  };

  return (
    <TextContext.Provider value={{ dynamicText, updateText }}>
      {children}
    </TextContext.Provider>
  );
};
