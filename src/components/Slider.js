import React from "react";
import "./Slider.css";

import { Carousel } from "react-bootstrap";

export default function Slider() {
  return (
    <div className="slider">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://cdn.pixabay.com/photo/2016/05/24/13/29/olive-oil-1412361_960_720.jpg"
            alt="Kitchen slide"
          />
          <Carousel.Caption>
            <h3>KUHINJA</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://cdn.pixabay.com/photo/2017/07/30/23/59/garlic-2556022_960_720.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>VRT</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://cdn.pixabay.com/photo/2014/11/17/13/17/crossfit-534615_960_720.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>SPORT</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://cdn.pixabay.com/photo/2017/09/01/21/53/blue-2705642_960_720.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>RELAX</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
