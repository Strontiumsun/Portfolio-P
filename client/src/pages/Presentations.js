import React from 'react';
import { Container } from "reactstrap";
import Carousel from "../components/Carousel";
import CaremaImage1 from "../files/carema-1.png"
import CaremaImage2 from "../files/carema-2.png"
import CaremaImage5 from "../files/carema-5.png"
import CaremaImage6 from "../files/carema-6.png"
import WanderImage1 from "../files/wanderlust-1.png"
import WanderImage2 from "../files/wanderlust-2.png"
import WanderImage3 from "../files/wanderlust-3.png"
import WanderImage4 from "../files/wanderlust-4.png"
import SpatifyImage1 from "../files/spatify-1.png"
import SpatifyImage2 from "../files/spatify-2.png"
import SpatifyImage3 from "../files/spatify-3.png"
import SpatifyImage4 from "../files/spatify-4.png"
import GradusImage1 from "../files/gradus-1.png"
import GradusImage2 from "../files/gradus-2.png"
import GradusImage3 from "../files/gradus-3.png"
import GradusImage4 from "../files/gradus-4.png"

function Presentations() {
    return (
        <Container>
            <Carousel
                image1={CaremaImage1}
                image2={CaremaImage2}
                image3={CaremaImage5}
                image4={CaremaImage6}
            />
            <div>
                <p>Original Presentation</p>
            </div>
            <Carousel
                image1={WanderImage1}
                image2={WanderImage2}
                image3={WanderImage3}
                image4={WanderImage4}
            />
            <div>
                <p>Original Presentation</p>
            </div>
            <Carousel
                image1={SpatifyImage1}
                image2={SpatifyImage2}
                image3={SpatifyImage3}
                image4={SpatifyImage4}
            />
            <div>
                <p>Original Presentation</p>
            </div>
            <Carousel
                image1={GradusImage1}
                image2={GradusImage2}
                image3={GradusImage3}
                image4={GradusImage4}
            />
            <div>
                <p>Original Presentation</p>
            </div>
        </Container>

    )
}

export default Presentations;