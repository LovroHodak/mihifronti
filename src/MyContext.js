import React, { useState, createContext, useEffect } from "react";
import axios from "axios";
export const MyContext = createContext();

export const MyProvider = (props) => {
  const [sliderInfo, setSliderInfo] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [BS2, setBS2] = useState([]);
  const [BS3, setBS3] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/category", { withCredentials: true })
      .then((response) => {
        setSliderInfo(response.data);
      })
      .catch((err) => {
        console.log("this is error: ", err);
      });

    axios
      .get("http://localhost:5000/api/product", { withCredentials: true })
      .then((response) => {
        setAllProducts(response.data);

        setBS3(
          response.data
            .sort((a, b) => {
              return b.sold - a.sold;
            })
            .slice(0, 3)
        );

        setBS2(
          response.data
            .sort((a, b) => {
              return b.sold - a.sold;
            })
            .slice(3, 5)
        );
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
        allProducts,
        setAllProducts,
        BS2, 
        setBS2,
        BS3, 
        setBS3
      ]}
    >
      {props.children}
    </MyContext.Provider>
  );
};
