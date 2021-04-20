import React, { useContext, useState, useEffect, useRef } from "react";
import { MyContext } from "../MyContext";

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
    
      console.log(soldHistory)

      

    return (
        <div>
            <h1 style={{color: 'white'}}>{soldHistory[0].email} your order was successful !!!</h1>
        </div>
    )
}
