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

  const setActive = (fotoId) => {
    let newActive = allProducts.map((product) => {
      if (product._id === paramsId) {
        const updateProduct = {
          ...product,
          fotoImg: product.fotoImg.map((foto) => {
            if (foto.active === true) {
              const updateActive = {
                ...foto,
                active: false,
              };
              return updateActive;
            }
            return foto;
          }),
        };
        return updateProduct;
      }
      return product;
    });

    let betterActive = newActive.map((product) => {
      if (product._id === paramsId) {
        const updateProduct = {
          ...product,
          fotoImg: product.fotoImg.map((foto) => {
            if (foto.id === fotoId) {
              const updateActive = {
                ...foto,
                active: true,
              };
              return updateActive;
            }
            return foto;
          }),
        };
        return updateProduct;
      }
      return product;
    });

    setAllProducts(betterActive);
  };

  return (
    <div>
      {allProducts.map((product, i) => {
        if (product._id === paramsId) {
          return (
            <div key={i}  className="detail">
              <div className="detailTop">
                <div className="detail2">
                  <div className='smalls'>
                    {product.fotoImg.map((foto, i) => {
                      if (foto.active === true) {
                        return (
                          <div key={i} className='innerDivImg'>
                            <img
                              src={foto.lnk}
                              className="smallActiveImg"
                              alt="smallFoto"
                              onClick={() => setActive(foto.id)}
                            />
                          </div>
                        );
                      }
                      return (
                        <div  key={i}  className='innerDivImg'>
                          <img
                            src={foto.lnk}
                            className="smallNonactiveImg"
                            alt="smallFoto"
                            onClick={() => setActive(foto.id)}
                          />
                        </div>
                      );
                    })}
                  </div>

                  <div className='biggs'>
                    {product.fotoImg.map((foto, i) => {
                      if (foto.active === true) {
                        return (
                          <div key={i} className='bigDivImg'>
                            <img
                              src={foto.lnk}
                              className="bigImg"
                              alt="bigFoto"
                            />
                          </div>
                        );
                      }
                    })}
                  </div>
                </div>

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
                    {/* {cart.map((item, i) => {
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
                    })} */}
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
