import React from "react";

function Navigation(props) {
    return(
        <>
        <nav>
            <ul id="navItems">
                <li>
                    <a className={window.location.href==="AboutMe"?"current": ""} id="aboutMeLink" onClick = {() => props.pageChanger("AboutMe")} href="#AboutMe">About Me</a>
                </li>
                <li>
                    <a className={props.navColor===2?"current": ""} id="portfolioLink" onClick = {() => props.pageChanger("Portfolio")} href="#Portfolio">Portfolio</a>
                </li>
                <li>
                    <a className={props.navColor===3?"current": ""} id="contactMeLink" onClick = {() => props.pageChanger("ContactMe")} href="#ContactMe">Contact Me</a>
                </li>
                <li>
                    <a className={props.navColor===4?"current": ""} id="resumeLink" onClick = {() => props.pageChanger("Resume")} href="#Resume">Resume</a>
                </li>
            </ul>
        </nav>
        </>
    )
}

export default Navigation;
