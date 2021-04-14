import React from "react";
import HamburgerNav from "./HamburgerNav";
import "./Navv.css";

export default function Navv() {
  return (
    <div className="Navv">
      <div className="navTitle">
        <h1 className="info">Info</h1>
        <h1 className="logo">UniShop</h1>
        <div className="cart">
          <img
          className='cartImg'
            alt="cartIcon"
            src={
              "https://www.iconsdb.com/icons/preview/white/shopping-cart-xxl.png"
            }
          />
          <h1>0</h1>
        </div>
      </div>

      <div className="categories">
        <h4>Kuhinja</h4>
        <h4>Vrt</h4>
        <h4>Sport</h4>
        <h4>Relax</h4>
      </div>
      <div className='hamham'>
        <HamburgerNav />
        <h1 className="logo">UniShop</h1>
      </div>
      
    </div>
  );
}
