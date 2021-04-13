import React from "react";
import BestSeller from "./BestSeller";
import "./Home.css";
import Slider from "./Slider";

export default function Home() {
  return (
    <div className="Home">
      <div className="sliderz">
        <Slider />
      </div>
      <div className="bestSellerz">
        <BestSeller/>
      </div>
      <img />
    </div>
  );
}
