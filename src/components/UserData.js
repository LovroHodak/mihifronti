import React, { useContext, useState } from "react";
import { MyContext } from "../MyContext";
import "./UserData.css";
import { Form, Button } from "react-bootstrap";
import {Link, useHistory} from 'react-router-dom'

export default function UserData() {
    let history = useHistory();

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
    soldHistory,
    setSoldHistory,
    initial,
    setInitial,
  ] = useContext(MyContext);

  

  console.log(soldHistory)

  const [email, setEmail] = useState("");

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const buyIt = (e) => {
    e.preventDefault();

    setSoldHistory((prevClients) => [
      ...prevClients,
      {
        email: email,
        cart: cart.map((item) => {
          return `Item: ${item.name}, nrOfItems: ${item.stock}, price: ${item.price}€` ;
        }),
      },
    ]);

    setEmail('')
    setCart([])
    setNrOfCartItems(0)
    setInitial(allProducts)

    history.push("/successPage");
    
    console.log("i work");
  };

  return (
    <Form className="userData" onSubmit={buyIt}>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          onChange={updateEmail}
          type="email"
          name="email"
          value={email}
          placeholder="Enter email"
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}
