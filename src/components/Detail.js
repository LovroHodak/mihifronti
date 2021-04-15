import React, { useContext } from "react";
import "./Detail.css";
import { Carousel } from "react-bootstrap";
import { MyContext } from "../MyContext";
import { kuhinjaItems } from "../fakeData/data";
import { Button } from "react-bootstrap";

export default function Detail() {
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

  return (
    <div className="detail">
      <div className="detailTop">
        <Carousel className="detSlider">
          {kuhProduct[0].fotoImg.map((foto, i) => {
            return (
              <Carousel.Item key={i}>
                <img className="d-block w-100" src={foto} alt="ItemPhotos" />
              </Carousel.Item>
            );
          })}
        </Carousel>
        <div className="detailInfo">
          <h1>{kuhProduct[0].name}</h1>
          <p>Price: {kuhProduct[0].price} €</p>
          <p>In Stock: {kuhProduct[0].stock}</p>
          <div className="divBtn">
            <Button variant="primary">Add</Button>
            <Button variant="primary">Delete</Button>
          </div>
        </div>
      </div>

      <div className='longDesc'>
        <p>{kuhProduct[0].longDesc}</p>
      </div>
    </div>
  );
}
