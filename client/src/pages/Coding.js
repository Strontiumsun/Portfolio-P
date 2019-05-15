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
                    <Col xs="6"><ProjectC
                        img={BYOB}
                        name="Chi BYOB"
                        category="NU Full-Stack Boot Camp"
                        content="App that searches for nearby BYOB restaurants based on user-inputted address and mile radius"
                        deployment="https://strontiumsun.github.io/Chi-byob/"
                        repo="https://github.com/Strontiumsun/Chi-byob"
                    />
                    </Col>
                    <Col xs="6">
                        <ProjectC
                            img={Spa}
                            name="Spatify"
                            category="NU Full-Stack Boot Camp"
                            content="App built on the principle of yield management that allows users to book salon appointments"
                            deployment="https://warm-forest-47596.herokuapp.com/"
                            repo="https://github.com/Strontiumsun/spatify"
                        />
                    </Col>
                </Row>
                <Row>
                    <Col xs="6"><ProjectC
                        img={Wander}
                        name="Wanderlust"
                        category="NU Full-Stack Boot Camp"
                        content="App that allows users to read and write reviews of study abroad trips, featuring an interactive map"
                        deployment="https://satisfying-wanderlust.herokuapp.com/"
                        repo="https://github.com/Strontiumsun/wanderlust" />
                    </Col>
                </Row>
            </Container>
        </div>

    )

}

export default Coding;