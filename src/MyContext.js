import React, { useState, createContext, useEffect } from "react";
import axios from "axios";
import {
  BSDataTop,
  BSDataBottom,
  kuhinjaItems,
} from "./fakeData/data";
export const MyContext = createContext();

export const MyProvider = (props) => {
  const [sliderInfo, setSliderInfo] = useState([]);
  const [bestTop, setBestTop] = useState(BSDataTop);
  const [bestBottom, setBestBottom] = useState(BSDataBottom);
  const [kuhProduct, setKuhProduct] = useState(kuhinjaItems);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/category", { withCredentials: true })
      .then((response) => {
        setSliderInfo(response.data);
        console.log(response.data)
      })
      .catch((err) => {
        console.log("this is error: ", err);
      });
  }, []);

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
