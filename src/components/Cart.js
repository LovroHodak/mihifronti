import React, { useContext, useEffect, useState } from "react";
import "./Cart.css";
import { MyContext } from "../MyContext";
import { Button, Jumbotron, Modal, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Cart() {
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
    nrOfCartItems,
    setNrOfCartItems,
    total,
    setTotal,
    soldHistory, setSoldHistory,
    initial, setInitial
  ] = useContext(MyContext);





  return (
    <div className="cartScreen">
      {cart.length === 0 ? (
        <h1>Your cart is empty..</h1>
      ) : (
        <div className="cartItems">
          {cart.map((item, i) => {
            return (
              <div key={i} className="cartItem">
                <img className="itemImg" src={item.fotoImg} alt={item.name} />
                <h1>
                  <Link className="linkCart" to={`/detail/${item._id}`}>
                    {item.name}
                  </Link>
                </h1>
                <h2>{item.stock} x </h2>
                <h2>{item.price} €</h2>
                <div>
                  {allProducts.map((product, i) => {
                    if (item._id === product._id && product.stock > 0) {
                      return (
                        <Button key={i} onClick={() => addToCart(item._id)}>Add</Button>
                      );
                    }
                  })}

                  <Button onClick={() => deleteFromCart(item._id)}>
                    Delete
                  </Button>
                </div>
              </div>
            );
          })}
          <Jumbotron>
            <h1 style={{ textAlign: "center" }}>Total: {total} €</h1>
            <p style={{ textAlign: "center" }}>
              This is a simple hero unit, a simple jumbotron-style component for
              calling extra attention to featured content or information.
            </p>
            <p style={{ textAlign: "center" }}>
              <Button as={Link} to='/userData' variant="primary">
                Confirm
              </Button>
            </p>
          </Jumbotron>
        </div>
      )}

    </div>
  );
}
