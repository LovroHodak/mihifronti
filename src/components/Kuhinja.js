import React, {useContext} from "react";
import "./Kuhinja.css";
import { Card, Button } from "react-bootstrap";
import { MyContext } from '../MyContext'
import { kuhinjaItems } from "../fakeData/data";

export default function Kuhinja() {
  const [sliderInfo,
    setSliderInfo,
    bestTop,
    setBestTop,
    bestBottom,
    setBestBottom,
    kuhProduct, setKuhProduct] = useContext(MyContext)


  return (
    <div className="kuhinja">
      <Card className="text-center featCard">
        <Card.Header>Featured</Card.Header>
        <Card.Body>
          <Card.Title >
            Special title treatment
          </Card.Title>
          <Card.Text >
            With supporting text below as a natural lead-in to additional
            content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
        <Card.Footer className="text-muted">2 days ago</Card.Footer>
      </Card>

      <div className='cards'>
      {kuhinjaItems.map((product) => {
        return (        <Card key={product.id} className='oneCard'>
          <Card.Img
            variant="top"
            src={product.fotoImg}
            alt={product.name}
          />
          <Card.Body>
            <Card.Title >{product.name}</Card.Title>
            <Card.Text >
              {product.shortDesc}
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>)
      })}

      </div>
    </div>
  );
}
