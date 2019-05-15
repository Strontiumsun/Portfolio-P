import React from "react";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from "reactstrap";

function ProjectC() {
    return (
        <div>
            <Card>
                <CardImg src="https://66.media.tumblr.com/fbb6a079054e4d8f138ba4b0b4f39dab/tumblr_prf4mjtKTi1t2t6aqo1_500.png"></CardImg>
                <CardBody>
                    <CardTitle>Card title</CardTitle>
                    <CardSubtitle>Card subtitle</CardSubtitle>
                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                    <Button>Button</Button>
                </CardBody>
            </Card>
        </div>
    )
}

export default ProjectC;