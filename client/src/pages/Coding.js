import React from 'react';
import ProjectC from "../components/ProjectC";
import { Container, Row, Col } from "reactstrap";
import BYOB from "../files/coding-byob.png"
import Spa from "../files/coding-spa.png"
import Wander from "../files/coding-wanderlust.png"

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
                            deployment="https://warm-forest-47596.herokuapp.com/"
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
                        deployment="https://strontiumsun.github.io/Chi-byob/"
                        repo="https://github.com/Strontiumsun/Chi-byob"
                    />
                    </Col>
                </Row>
            </Container>
        </div>

    )

}

export default Coding;