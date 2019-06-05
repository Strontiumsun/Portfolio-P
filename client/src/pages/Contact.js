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
                        <h2>Professional</h2>
                        <h4><a className="contact-links" href="https://github.com/Strontiumsun">GitHub</a></h4>
                        <h4><a className="contact-links" href="https://www.linkedin.com/in/izzy-hall-3484ba134/">LinkedIn</a></h4>
                    </Col>
                    <Col>
                        <h2>Social Media</h2>
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