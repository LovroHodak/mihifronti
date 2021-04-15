import React, { useContext } from "react";
import "./BestSeller.css";
import { MyContext } from "../MyContext";

export default function BestSeller() {
  const [
    sliderInfo,
    setSliderInfo,
    bestTop,
    setBestTop,
    bestBottom,
    setBestBottom,
  ] = useContext(MyContext);

  return (
    <div className="bestSeller">
      <h1 className="title">Best Sellers</h1>

      <div className="pair">
        {bestTop.map((item) => {
          return (
            <div key={item.id} className="innerDiv">
              <img src={item.itemImg} alt={item.itemName} />
              <div className="infoBS">
                <h1 className="name">{item.itemName}</h1>
                <button className="btnz">Buy now</button>
              </div>
            </div>
          );
        })}
      </div>

      <div className="pair">
        {bestBottom.map((item) => {
          return (
            <div key={item.id} className="innerDiv">
              <img src={item.itemImg} alt={item.itemName} />
              <div className="infoBS">
                <h1 className="name">{item.itemName}</h1>
                <button className="btnz">Buy now</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
