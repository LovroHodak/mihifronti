import React, { useContext } from "react";
import "./KATEGORIJE.css";
import { Card, Button } from "react-bootstrap";
import { MyContext } from "../MyContext";
import { Link } from "react-router-dom";

export default function Kuhinja() {
  const [
    sliderInfo,
    setSliderInfo,
    allProducts,
    setAllProducts
  ] = useContext(MyContext);

  return (
    <div className="kategorije">
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
        {allProducts.map((product, i) => {
          if (product.category === "Kuhinja") {
            return (
              <Card key={i} className="oneCard">
                <Card.Img
                  variant="top"
                  src={product.fotoImg}
                  alt={product.name}
                />
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>{product.shortDesc}</Card.Text>
                  <Button as={Link} to={`/detail/${product._id}`} variant="primary">
                    View More
                  </Button>
                </Card.Body>
              </Card>
            );
          }
        })}
      </div>
    </div>
  );
}
