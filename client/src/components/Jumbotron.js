import React from "react";
import { Jumbotron } from 'reactstrap';
import Logo from "../files/logo2.png";


function Jumbo() {
    return (
        <div>
            <Jumbotron id="jumbo-fix">
                <div id="jumbo-box">
                    <img src={Logo} alt="my logo" className="logo-sizer" />
                </div>

            </Jumbotron>
        </div>


    )
}

export default Jumbo;