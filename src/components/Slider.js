import React, { useContext, useRef } from "react";
import "./Slider.css";
import { MyContext } from "../MyContext";

import { Carousel } from "react-bootstrap";

export default function Slider() {
  const [sliderInfo, setSliderInfo] = useContext(MyContext);

  // THIS REF IS DOIN NOTHING
  const target = useRef(null);

  return (
    <div className="slider" ref={target}>
      <Carousel target={target.current}>
        {sliderInfo.map((item, i) => {
          return (
            <Carousel.Item key={i}>
              <img
                className="d-block w-100"
                src={item.categoryImg}
                alt={item.categoryName}
              />
              <Carousel.Caption>
                <h3>{item.categoryName}</h3>
                <p>{item.categoryDesc}</p>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
}
