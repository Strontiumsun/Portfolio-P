import React from "react";
import Resume from "../files/resume-v3.pdf"

function Navbar() {
    return (
        <nav className="navbar">
            <a className="navbar-brand navbar-custom" href="/">Home</a>
            <a className="navbar-brand navbar-custom" href="/about">About</a>
            <a className="navbar-brand navbar-custom" href="/contact">Contact</a>
            <a className="navbar-brand navbar-custom" href={Resume}>Resume</a>
        </nav>
    )
}

export default Navbar;

