import React from "react";
import Carousel from "react-bootstrap/Carousel"


function Slider(props) {
    return (
        <Carousel className="carousel-sizer">
            <Carousel.Item>
                <img
                    className="d-block slide-sizer"
                    src={props.image1}
                    alt="slides"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block slide-sizer"
                    src={props.image2}
                    alt="slides"
                />

            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block slide-sizer"
                    src={props.image3}
                    alt="slides"
                />

            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block slide-sizer"
                    src={props.image4}
                    alt="slides"
                />
            </Carousel.Item>
        </Carousel>
    )
}

export default Slider;