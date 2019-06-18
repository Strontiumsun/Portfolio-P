import React from 'react';
import { Container } from "reactstrap";
import Category from "../components/Category"

function Design() {
    return (
        <div>
            <Container>
                {/* <Category
                    path="/graphics"
                    name="Graphic Design and Illustration"
                    description="Graphics, illustrations and logos made with Adobe Photoshop and Illustrator"
                >
                </Category> */}
                <Category
                    path="/presentations"
                    name="Presentation Design"
                    description="Custom PowerPoint and Google Slides layouts"
                >
                </Category>
                <Category
                    path="/ui"
                    name="UI Design"
                    description="Website layout and design"
                ></Category>
            </Container>
        </div>


    )
}

export default Design;