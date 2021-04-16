import React from "react";
import HamburgerNav from "./HamburgerNav";
import "./Navv.css";
import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap'

export default function Navv() {
  return (
    <div className="Navv">
      <div className="navTitle">
        <Link to='/info'><h1 className="info">Info</h1></Link>
        <Link to='/'><h1 className="logo">UniShop</h1></Link>
        <Link to='/cart'>
        <div className="cart">
          
            <img
              className="cartImg"
              alt="cartIcon"
              src={
                "https://www.iconsdb.com/icons/preview/white/shopping-cart-xxl.png"
              }
            />
            <h1>0</h1>
          
        </div>
        </Link>
      </div>

      <div className='bootCat'>
        <Button as={Link} to="/kuhinja" className='bootBtn' variant="primary">Kuhinja</Button>
        <Button as={Link} to="/vrt" className='bootBtn' variant="primary">Vrt</Button>
        <Button as={Link} to="/sport" className='bootBtn' variant="primary">Sport</Button>
        <Button as={Link} to="/relax" className='bootBtn' variant="primary">Relax</Button>
        <Button as={Link} to="/drugo" className='bootBtn' variant="primary">Drugo</Button>
      </div>
      <div className="hamham">
        <HamburgerNav />
        <Link to="/">
          <h1 className="logo">UniShop</h1>
        </Link>
      </div>
    </div>
  );
}
