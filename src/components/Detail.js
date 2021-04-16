import React, { useContext, useEffect } from "react";
import "./Detail.css";
import { Carousel } from "react-bootstrap";
import { MyContext } from "../MyContext";
import { Button } from "react-bootstrap";

export default function Detail({ match }) {
  const [
    sliderInfo,
    setSliderInfo,
    bestTop,
    setBestTop,
    bestBottom,
    setBestBottom,
    kuhProduct,
    setKuhProduct,
  ] = useContext(MyContext);


  let paramsId = match.params.id;

  return (
    <div className="detail">
      {kuhProduct.map((product, i) => {
        if (product._id === paramsId) {
          return (
            <div>
              <div className='detailTop'>
                <Carousel className="detSlider">
                  <Carousel.Item key={i}>
                    <img
                      className="d-block w-100"
                      src={product.fotoImg}
                      alt="ItemPhotos"
                    />
                  </Carousel.Item>
                </Carousel>
                <div className="detailInfo">
                  <h1>{product.name}</h1>
                  <p>Price: {product.price} €</p>
                  <p>In Stock: {product.stock}</p>
                  <div className="divBtn">
                    <Button variant="primary">Add</Button>
                    <Button variant="primary">Delete</Button>
                  </div>
                </div>
              </div>

              <div className="longDesc">
                <p>{product.longDesc}</p>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
}
