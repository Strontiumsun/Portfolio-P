import React from "react";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from "reactstrap";

function ProjectC(props) {
    return (
        <div>
            <Card id="card-sizer">
                <CardImg src={props.img}></CardImg>
                <CardBody>
                    <CardTitle id="title-sizer" className="header-font">{props.name}</CardTitle>
                    <CardSubtitle className="subtitle-font">{props.category}</CardSubtitle>
                    <CardText>{props.content}</CardText>
                    <CardText>Technologies Used: {props.tech}</CardText>
                    <Button className="card-button" href={props.deployment}>Deployment</Button>
                    <Button className="card-button" href={props.repo}>Repo</Button>
                </CardBody>
            </Card>
        </div>
    )
}

export default ProjectC;