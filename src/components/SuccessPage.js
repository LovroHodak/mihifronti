import React, { useContext, useState, useEffect, useRef } from "react";
import { MyContext } from "../MyContext";
import "./SuccessPage.css";
import {Image} from 'react-bootstrap'

export default function SuccessPage() {
  const [
    sliderInfo,
    setSliderInfo,
    allProducts,
    setAllProducts,
    BS2,
    setBS2,
    BS3,
    setBS3,
    addToCart,
    deleteFromCart,
    cart,
    setCart,
    nrOfCartItems,
    setNrOfCartItems,
    total,
    setTotal,
    soldHistory,
    setSoldHistory,
    initial,
    setInitial,
  ] = useContext(MyContext);

  console.log(soldHistory);

  return (
    <div className="successPage">
      {soldHistory.length > 0 ? (
        <div className='goodGood'>
        <h1 className="sucGoodTitle">
          Thank you {soldHistory[soldHistory.length - 1].name.toUpperCase()} for
          your order!
        </h1>
        <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrA-Hjwh0PrysnRa-wKM7rY7rlSL4dT45Ivw&usqp=CAU" roundedCircle />
        </div>
      ) : (
        <div className="lost">
          <h1 className="sucTitle">
            This is not the page you are looking for!
          </h1>
          <img
            className="lostImg"
            alt="lostImg"
            src="https://www.finfunmermaid.com/media/wysiwyg/fun-transition-page-graphics/ff-no-results-binoculars.svg"
          />
        </div>
      )}
    </div>
  );
}
