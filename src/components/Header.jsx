import React from 'react';
import './head.css';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

export default function Header() {
    return (
        <div className="contain">
            <div className="title"><Link className="link"><h1 className="header">Chattanooga Primitive Baptist Church</h1></Link></div>
            <div className="links">
                <Link className="link"><h3 className="text">Home</h3></Link>
                <Link to="/services" className="link"><h3 className="text">Services</h3></Link>
                <Link className="link"><h3 className="text">About Us</h3></Link>
                <Link className="link"><Button><h3>Contact Us</h3></Button></Link>
            </div>
        </div>
    )
}
