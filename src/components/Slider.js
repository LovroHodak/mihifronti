import React from "react";

import { Carousel } from "react-bootstrap";

export default function Slider() {

  
  return (
    <div className="slider">
      <Carousel>
        <Carousel.Item className='carousel'>
          <img
            className="d-block w-100  imgg"
            src="https://images.unsplash.com/photo-1580757468214-c73f7062a5cb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1778&q=80"
            alt="Kitchen slide"
          />
          <Carousel.Caption>
            <h3>KUHINJA</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className='carousel'>
          <img
            className="d-block w-100  imgg"
            src="https://images.unsplash.com/photo-1547854760-f580559a870e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1778&q=80"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>VRT</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className='carousel'>
          <img
            className="d-block w-100  imgg"
            src="https://images.unsplash.com/photo-1605666711391-4797967287aa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1778&q=80"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>SPORT</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className='carousel'>
          <img
            className="d-block w-100 imgg"
            src="https://images.unsplash.com/photo-1539601591461-2a5e0edb6915?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1778&q=80"
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
