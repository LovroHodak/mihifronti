import React from "react";
import "./Navv.css";

export default function Navv() {
  return (
    <div className="Navv">
      <div className='navTitle'>
        <h1 className='info'>Info</h1>
        <h1 className="logo">UniShop</h1>
        <h1 className='cart'>Cart (0)</h1>
      </div>

      <div className="categories">
        <h4>Kuhinja</h4>
        <h4>Vrt</h4>
        <h4>Sport</h4>
        <h4>Relax</h4>
      </div>
    </div>
  );
}
