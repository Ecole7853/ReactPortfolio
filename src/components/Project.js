import React from "react";
import screenshot from "../images/Screenshot.png"


function Project(props) {
    console.log(props)
    return (
        <>
        <div id="work">
            <h2>{props.title}</h2>
            <a href={props.hrefpath}><img class="imageContainer" alt={props.alt} src={screenshot}/></a>
        </div>
        </>
)}

export default Project;