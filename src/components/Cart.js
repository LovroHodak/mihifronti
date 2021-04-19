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
  console.log(cart);

  // Modal
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Inputs
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [street, setStreet] = useState("");
  const [zip, setZip] = useState("");
  const [city, setCity] = useState("");

  const updateName = (e) => {
    setName(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updateStreet = (e) => {
    setStreet(e.target.value);
  };

  const updateZip = (e) => {
    setZip(e.target.value);
  };

  const updateCity = (e) => {
    setCity(e.target.value);
  };

  const buyIt = (e) => {
    e.preventDefault();

    setSoldHistory((prevClients) => [
      ...prevClients,
      {
        name: name,
        email: email,
        street: street,
        zip: zip,
        city: city,
        items: cart.map((item) => {
          return item
        })
      }
    ])

    setName('')
    setEmail('')
    setStreet('')
    setZip('')
    setCity('')
    
    setCart([])
    setInitial(allProducts)
    setNrOfCartItems(0)
  }

  console.log(soldHistory)
  console.log(cart)

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
              <Button onClick={handleShow} variant="primary">
                Confirm
              </Button>
            </p>
          </Jumbotron>
        </div>
      )}

      <Modal centered show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={buyIt}>
            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control name="name" type="text" placeholder="Enter name" value={name}
              onChange={updateName} />
              
            </Form.Group>

            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control name='email' type="text" placeholder="Enter email" value={email}
              onChange={updateEmail} />
              
            </Form.Group>

            <Form.Group>
              <Form.Label>Street</Form.Label>
              <Form.Control name='street' type="text" placeholder="Enter street and number" value={street}
              onChange={updateStreet}/>
            </Form.Group>

            <Form.Group>
              <Form.Label>Zip</Form.Label>
              <Form.Control name='zip' type="text" placeholder="Zip" value={zip}
              onChange={updateZip} />
            </Form.Group>

            <Form.Group>
              <Form.Label>City</Form.Label>
              <Form.Control name='city' type="text" placeholder="City" value={city}
              onChange={updateCity}/>
            </Form.Group>

            <Form.Text className="text-muted" style={{marginBottom:'15px'}}>
                We'll never share your data with anyone else.
              </Form.Text>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>

        </Modal.Body>
      </Modal>
    </div>
  );
}
