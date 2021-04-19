import React, { useContext, useEffect } from "react";
import "./Detail.css";
import { Carousel } from "react-bootstrap";
import { MyContext } from "../MyContext";
import { Button } from "react-bootstrap";

export default function Detail({ match }) {
  const [
    sliderInfo,
    setSliderInfo,
    allProducts,
    setAllProducts,
    BS2,
    setBS2,
    BS3,
    setBS3,
    addToCart,
    deleteFromCart,
    cart,
    setCart,
  ] = useContext(MyContext);

  let paramsId = match.params.id;

  return (
    <div className="detail">
      {allProducts.map((product, i) => {
        if (product._id === paramsId) {
          return (
            <div key={i}>
              <div className="detailTop">
                <Carousel className="detSlider">
                  <Carousel.Item>
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
                    {product.stock > 0 ? (
                      <Button
                        onClick={() => addToCart(product._id)}
                        variant="primary"
                      >
                        Add
                      </Button>
                    ) : (
                      <></>
                    )}
                    {cart.map((item, i) => {
                      if (item._id === product._id && item.stock > 0) {
                        return (
                          <Button
                            key={i}
                            onClick={() => deleteFromCart(product._id)}
                            variant="primary"
                          >
                            Delete
                          </Button>
                        );
                      }
                    })}
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
