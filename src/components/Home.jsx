import React from 'react';
import './home.css';
import Carousel from 'react-bootstrap/Carousel';
import Header from './Header';
import Map from './Map'


export default function Home() {
    return (
        <div className="main">
            <Header />
            <div  className="carousel">
                <Carousel>
                        <Carousel.Item className="cIItem">
                            <img className="d-block w-100"  id="img" src='../OnePiece.jpg' alt="First slide"></img>
                            <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item className="cIItem">
                            <img
                                className="d-block w-100"
                                id="img"
                                src="../swamp.jpg"
                                alt="Third slide"
                            />
                            <Carousel.Caption>
                                <h3>Second slide label</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item className="cIItem">
                            <img
                                className="d-block w-100"
                                id="img"
                                src="../swamp.jpg"
                                alt="Third slide"
                            />
                            <Carousel.Caption>
                                <h3>Third slide label</h3>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                    <div className="theMap"><Map />
                    </div>
            </div>
        </div>
    )
}
