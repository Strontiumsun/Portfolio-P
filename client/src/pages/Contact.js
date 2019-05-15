import React from 'react';
import { Container, Row, Col } from "reactstrap";

function Contact() {
    return (
        <div>
            <Container>
                <h1>Contact Me</h1>
                <br></br>
                <Row>
                    <Col>
                        <h2>In Person</h2>
                        <h4>My Address:</h4>
                        <p>Izzy Hall
                            <br></br>
                            665 Melody Lane
                            <br></br>
                            Highland Park, IL 60035
                        </p>
                    </Col>
                    <Col>
                        <h2>On The Web</h2>
                        <h4><a className="contact-links" href="https://twitter.com/Strontiumsun">Twitter</a></h4>
                        <h4><a className="contact-links" href="https://strontiumsun.tumblr.com/">Tumblr</a></h4>
                    </Col>
                    <Col>
                        <h2>By Email</h2>
                        <h4>For general inquiries, find me at <i>izzyhall25@gmail.com</i></h4>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Contact;