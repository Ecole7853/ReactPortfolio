import React from "react";
import Header from "./Header";

function Resume() {
    return(
        <>

        <Header />        
        <div id="resume">
        <a id="resumeHref" href="https://www.docdroid.net/h7IR3xI/exampleresume-pdf">This is my Resume</a>
        <div id="myProfs">
        <h3>My proficiencies</h3>
        <ul id="resumeUl">
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>jQuery</li>
        <li>React</li>
        <li>Mongo</li>
        <li>Express</li>
        <li>robo3t</li>
        <li>MySQL</li>
        </ul>
        </div>
        </div>
        </>
    )
}

export default Resume;