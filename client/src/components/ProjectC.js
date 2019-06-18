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
                    <Button className="card-button" href={props.repo}>Repo</Button>
                    <Button className={props.deployment ? "card-button" : "inactive-button"} href={props.deployment ? props.deployment : ""}>Deployment</Button>

                </CardBody>
            </Card>
        </div>
    )
}

export default ProjectC;