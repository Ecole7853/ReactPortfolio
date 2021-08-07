import React from "react";
import {Link} from "react-router-dom";

function Navigation() {
    return(
        <>
        <nav>
            <ul id="navItems">
                <li>
                    <Link to="/AboutMe">About Me</Link>
                </li>
                <li>
                    <Link to="/Portfolio">Portfolio</Link>
                </li>
                <li>
                    <Link to="/ContactMe">Contact Me</Link>
                </li>
                <li>
                    <Link to="/Resume">Resume</Link>
                </li>
            </ul>
        </nav>
        </>
    )
}

export default Navigation;
