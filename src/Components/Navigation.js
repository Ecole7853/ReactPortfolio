import React from "react";
import {Link} from "react-router-dom";

function Navigation() {
    return(
        <>
        <nav>
            <ul id="navItems">
                <li id="navAbout">
                    <Link to="/AboutMe">About Me</Link>
                </li>
                <li id="navPortfolio">
                    <Link to="/Portfolio">Portfolio</Link>
                </li>
                <li id="navContact">
                    <Link to="/ContactMe">Contact Me</Link>
                </li>
                <li id="navResume">
                    <Link to="/Resume">Resume</Link>
                </li>
            </ul>
        </nav>
        </>
    )
}

export default Navigation;
