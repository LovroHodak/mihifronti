import React from "react";
import "./BestSeller.css";

export default function BestSeller() {
  return (
    <div className="bestSeller">
      <h1 className="title">Best Sellers</h1>
      <div className="pair">
        <div className="innerDiv">
          <img
            src="https://cdn.pixabay.com/photo/2021/03/09/20/29/indoor-plant-tools-6082796_960_720.jpg"
            alt="imgg"
          />
          <div className="infoBS">
            <h1 className="name">Item</h1>
            <button className="btnz">Buy now</button>
          </div>
        </div>
        <div className="innerDiv">
          <img
            src="https://cdn.pixabay.com/photo/2016/11/23/00/56/bathroom-1851566_960_720.jpg"
            alt="imgg"
          />
          <div className="infoBS">
            <h1 className="name">Item</h1>
            <button className="btnz">Buy now</button>
          </div>
        </div>
        <div className="innerDiv">
          <img
            src="https://cdn.pixabay.com/photo/2018/11/04/20/21/harley-davidson-3794909_960_720.jpg"
            alt="imgg"
          />
          <div className="infoBS">
            <h1 className="name">Item</h1>
            <button className="btnz">Buy now</button>
          </div>
        </div>

      </div>

      <div className="pair">
      <div className="innerDiv">
          <img
            src="https://cdn.pixabay.com/photo/2014/07/01/12/36/tea-381235_960_720.jpg"
            alt="imgg"
          />
          <div className="infoBS">
            <h1 className="name">Item</h1>
            <button className="btnz">Buy now</button>
          </div>
        </div>
        
        <div className="innerDiv">
          <img
            src="https://cdn.pixabay.com/photo/2018/02/06/14/07/dance-3134828_960_720.jpg"
            alt="imgg"
          />
          <div className="infoBS">
            <h1 className="name">Item</h1>
            <button className="btnz">Buy now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* 
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
    </div> */
