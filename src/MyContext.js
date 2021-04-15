import React, { useState, createContext, useEffect } from "react";
import {
  sliderData,
  BSDataTop,
  BSDataBottom,
  kuhinjaItems,
} from "./fakeData/data";
export const MyContext = createContext();

export const MyProvider = (props) => {
  const [sliderInfo, setSliderInfo] = useState(sliderData);
  const [bestTop, setBestTop] = useState(BSDataTop);
  const [bestBottom, setBestBottom] = useState(BSDataBottom);
  const [kuhProduct, setKuhProduct] = useState(kuhinjaItems);

  return (
    <MyContext.Provider
      value={[
        sliderInfo,
        setSliderInfo,
        bestTop,
        setBestTop,
        bestBottom,
        setBestBottom,
        kuhProduct, setKuhProduct
      ]}
    >
      {props.children}
    </MyContext.Provider>
  );
};
