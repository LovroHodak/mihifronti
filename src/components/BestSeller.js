import React from "react";
import "./BestSeller.css";

export default function BestSeller() {
  return (
    <div className="bestSeller">
      <div style={{ display: "flex" }}>
        <div className="div1">
          <button style={{ borderRadius: 7, marginLeft: 5}}>Buy now</button>
        </div>
        <div className="div2">
          <button style={{ borderRadius: 7, marginLeft: 5}}>Buy now</button>
        </div>
      </div>

      <div style={{ display: "flex" }}>
        <div className="div3">
          <button style={{ borderRadius: 7, marginLeft: 5}}>Buy now</button>
        </div>
        <div className="div4">
          <button style={{ borderRadius: 7, marginLeft: 5}}>Buy now</button>
        </div>
      </div>
    </div>
  );
}
