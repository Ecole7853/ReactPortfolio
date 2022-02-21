import React from "react";
import {Link} from "react-router-dom";
import pdf from "../assets/resumewcover.pdf" 

function Navigation() {
    return(
        <>
        <nav>
            <ul id="navItems">
                <li id="navAbout">
                    <Link to="/AboutMe">About Me</Link>
                </li>
                {/* <li id="navPortfolio">
                    <Link to="/Portfolio">Portfolio</Link>
                </li> */}
                <li id="navContact">
                    <Link to="/ContactMe">Contact Me</Link>
                </li>
                <li id="navResume">
                <a href={pdf} target="_blank">Resume</a>
                </li>
            </ul>
        </nav>
        </>
    )
}

export default Navigation;
