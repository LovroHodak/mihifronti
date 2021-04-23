/* import React, { useContext, useState } from "react";
import { MyContext } from "../MyContext";
import "./Admin.css";

export default function Admin() {
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

  return (
    <div className="admin">
      {soldHistory.length !== 0 ? (
        <div>
            {soldHistory.map((item, i) => {
                return (<div key={i}>
                    <p>{item.name}</p>
                    <p>{item.email}</p>
                    <p>{item.address}</p>
                    <p>{item.city}</p>
                    <p>{item.total}</p>
                    <div>
                        {item.cart.map((product, i) => {
                            return (<div key={i}>
                                <p>{product.name}</p>
                                <p>{product.stock}</p>
                                <p>{product.price}</p>
                            </div>)
                        })}
                    </div>
                </div>)
            })}
        </div>
      ) : (
        <div>You havnt yet sold anything</div>
      )}
    </div>
  );
} */
