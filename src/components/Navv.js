import React from "react";
import HamburgerNav from "./HamburgerNav";
import "./Navv.css";
import { Link } from "react-router-dom";

export default function Navv() {
  return (
    <div className="Navv">
      <div className="navTitle">
        <Link to='/info'><h1 className="info">Info</h1></Link>
        <Link to='/'><h1 className="logo">UniShop</h1></Link>
        <Link to='/cart'>
        <div className="cart">
          
            <img
              className="cartImg"
              alt="cartIcon"
              src={
                "https://www.iconsdb.com/icons/preview/white/shopping-cart-xxl.png"
              }
            />
            <h1>0</h1>
          
        </div>
        </Link>
      </div>

      <div className="categories">
        <Link to="/kuhinja" className="links">
          <h4>Kuhinja</h4>
        </Link>
        <Link to="/vrt" className="links">
          <h4>Vrt</h4>
        </Link>
        <Link to="/sport" className="links">
          <h4>Sport</h4>
        </Link>
        <Link to="/relax" className="links">
          <h4>Relax</h4>
        </Link>
      </div>
      <div className="hamham">
        <HamburgerNav />
        <Link to="/">
          <h1 className="logo">UniShop</h1>
        </Link>
      </div>
    </div>
  );
}
