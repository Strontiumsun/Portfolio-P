import React from "react";
import Carousel from "react-bootstrap/Carousel"
import Image from "../files/carema-1.png"

function Slider() {
    return (
        <Carousel className="carousel-sizer">
            <Carousel.Item>
                <img
                    className="d-block slide-sizer"
                    src={Image}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Carema Consulting</h3>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default Slider;