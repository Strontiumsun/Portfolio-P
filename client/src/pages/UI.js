import React from 'react';
import { Container, Button } from "reactstrap";
import SplashPage from "../files/wanderlust-splash.png";
import List1 from "../files/wanderlust-list-1.png";
import List2 from "../files/wanterlust-list-2.png";


function UI() {
    return (
        <Container>
            <div className="site-design-container">
                <h2><a href="https://satisfying-wanderlust.herokuapp.com/" className="contact-links">Wanderlust </a>Design</h2>
                <img src={SplashPage} alt="splash page design" className="screenie-sizer" />
                <p>Design for Home Page/Splash Page</p>
                <img src={List1} alt="list page final" className="screenie-sizer" />
                <p>Design for Review List Page with suggested pixel sizes.</p>
                <img src={List2} alt="alternate list page" className="screenie-sizer" />
                <p>Alternate color scheme for Review List Page</p>
                <Button outline href="/design" className="back-button">Back</Button>
            </div>
        </Container>
    )
}

export default UI;