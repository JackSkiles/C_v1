
import React from 'react';
import './head.css';
import { Link } from 'react-router-dom';
import { Button, Dropdown } from 'react-bootstrap';

export default function Header() {
    return (
        <div className="contain">
            <div className="titles"><Link className="link1"><h1 className="header">Chattanooga Primitive Baptist Church</h1></Link></div>
            <div className="links">
                <Link to="/" className="link"><h3 className="text">Home</h3></Link>
                <Link to="/services" className="link"><h3 className="text">Services</h3></Link>
                <Link className="link"><h3 className="text">About Us</h3></Link>
                <Link className="link"><Button><h3>Contact Us</h3></Button></Link>
            </div>
            <div className="drop">
                <Dropdown >
                    <Dropdown.Toggle variant="secondary" id="dropdown-basic" >MENU
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="dropMenu">
                        <Dropdown.Item><Link to="/services" className="link"><h3 className="text">Services</h3></Link></Dropdown.Item>
                        <Dropdown.Item> <Link className="link"><h3 className="text">About Us</h3></Link></Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item><Link className="link"><Button className="contact"><h3 className="contactText">Contact Us</h3></Button></Link></Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        </div>
    )
}