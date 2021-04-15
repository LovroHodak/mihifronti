import React, { useContext } from "react";
import "./Kuhinja.css";
import { Card, Button } from "react-bootstrap";
import { MyContext } from "../MyContext";
import { kuhinjaItems } from "../fakeData/data";
import {Link} from 'react-router-dom'

export default function Kuhinja() {
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
    <div className="kuhinja">
      {/* <h1 className='kuhNaslov'>Kuhinja</h1> */}
      <Card className="text-center featCard">
        <Card.Header>Featured</Card.Header>
        <Card.Body>
          <Card.Title>Special title treatment</Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional
            content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
        <Card.Footer className="text-muted">2 days ago</Card.Footer>
      </Card>

      <div className="cards">
        {kuhinjaItems.map((product, i) => {
          return (
            <Card key={i} className="oneCard">
              <Card.Img
                variant="top"
                src={product.fotoImg[0]}
                alt={product.name}
              />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.shortDesc}</Card.Text>
                <Button as={Link} to="/detail" variant="primary">View More</Button>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
