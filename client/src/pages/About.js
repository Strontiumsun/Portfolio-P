import React from 'react';
import { Container } from "reactstrap";

function About() {
    return (
        <div>
            <Container>
                <h1>About Me</h1>
                <p>I'm Izzy Hall, also known as Strontium on the web, and I've been doing it my own way since 1993.
                    An artist, writer, editor, presentation designer and web developer,
                    my goal in life is to create and for my creations to impact others. I love color, space, words
                    and the world around me, filled with endless sources of fascination.
                </p>
                <p>I live in Chicago, IL and attended undergrad at Lake Forest College. I got my full-stack certification
                    at Northwestern University.
                </p>
                <br></br>
                <h1>Skill Set</h1>
                <h3>Web Development:</h3><div>React, Node.js, JavaScript, JQuery, Bootstrap, CSS, GitHub, MongoDB, MySQL, Firebase, HTML, APIs, Mongoose, Sequelize</div>
                <h3>Digital Art:</h3><div>Adobe Photoshop, Illustrator and InDesign; Clip Studio Paint</div>
                <h3>Communications:</h3><div>Microsoft Office Suite, Google Drive, WordPress, Constant Contact</div>
                <br />
            </Container>
        </div>

    )

}

export default About;