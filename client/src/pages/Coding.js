import React from 'react';
import ProjectC from "../components/ProjectC";
import { Container, Row, Col } from "reactstrap";
import BYOB from "../files/coding-byob.png"
import Spa from "../files/coding-spa.png"
import Wander from "../files/coding-wanderlust.png"
import Bamazon from "../files/customer_start.PNG"
import Portfolio from "../files/coding-portfolio.png"

function Coding() {
    return (
        <div>
            <Container>
                <Row>
                    <Col lg="6"><ProjectC
                        img={Wander}
                        name="Wanderlust"
                        category="NU Full-Stack Boot Camp"
                        content="App that allows users to read and write reviews of study abroad trips, featuring an interactive map"
                        tech="React, MongoDB, Mongoose, Passport.js, Semantic UI React, bycryptjs, AM Charts"
                        deployment="https://satisfying-wanderlust.herokuapp.com/"
                        repo="https://github.com/Strontiumsun/wanderlust" />
                    </Col>
                    <Col lg="6">
                        <ProjectC
                            img={Spa}
                            name="Spatify"
                            category="NU Full-Stack Boot Camp"
                            content="App built on the principle of yield management that allows users to book salon appointments"
                            tech="MySQL, JavaScript, Sequelize, Node Mailer, Materialize, Later.js"

                            repo="https://github.com/Strontiumsun/spatify"
                        />
                    </Col>
                </Row>
                <Row>
                    <Col lg="6" ><ProjectC
                        img={BYOB}
                        name="Chi BYOB"
                        category="NU Full-Stack Boot Camp"
                        content="App that searches for nearby BYOB restaurants based on user-inputted address and mile radius"
                        tech="Bootstrap, Firebase, JQuery, Anime.js"
                        repo="https://github.com/Strontiumsun/Chi-byob"
                    />
                    </Col>
                    <Col lg="6" ><ProjectC
                        img={Bamazon}
                        name="Bamazon"
                        category="NU Full-Stack Boot Camp"
                        content="Node/MySQL App that simulates purchasing products and managing an online store"
                        tech="Node.js, MySQL, Inquirer, CLI-Tables"
                        repo="https://github.com/Strontiumsun/bamazon"
                    />
                    </Col>
                </Row>
                <Row>
                    <Col lg="6">
                        <ProjectC
                            img={Portfolio}
                            name="Portfolio"
                            category="Personal"
                            content="Native React site built to showcase my coding skills and front-end design skills"
                            tech="React, Reactstrap, Bootstrap, React Router, Javascript, HTML, CSS"
                            repo="https://github.com/Strontiumsun/Portfolio-P"
                            deployment="https://izzy-hall.herokuapp.com/"
                        />
                    </Col>
                </Row>
            </Container>
        </div>

    )

}

export default Coding;