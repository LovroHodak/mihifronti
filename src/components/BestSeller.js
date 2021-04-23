import React, { useContext } from "react";
import "./BestSeller.css";
import { MyContext } from "../MyContext";
import { Link } from 'react-router-dom'

export default function BestSeller() {
  const [
    sliderInfo,
    setSliderInfo,
    allProducts,
    setAllProducts,
    BS2, 
    setBS2,
    BS3, 
    setBS3
  ] = useContext(MyContext);

  return (
    <div className="bestSeller">
      <h1 className="title">Best Sellers</h1>

      <div className="pair">
        {BS3.map((item) => {
          return (
            <div key={item.id} className="innerDiv">
              <img src={item.fotoImg[0].lnk} alt={item.name} />
              <div className="infoBS">
                <h1 className="name">{item.name}</h1>
                <button className="btnz"><Link to={`/detail/${item._id}`}>Buy now</Link></button>
              </div>
            </div>
          );
        })}
      </div>

      <div className="pair">
        {BS2.map((item) => {
          return (
            <div key={item.id} className="innerDiv">
              <img src={item.fotoImg[0].lnk} alt={item.name} />
              <div className="infoBS">
                <h1 className="name">{item.name}</h1>
                <button className="btnz"><Link to={`/detail/${item._id}`}>Buy now</Link></button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
