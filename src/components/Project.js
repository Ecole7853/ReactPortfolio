import React from "react";
// import screenshot from "../images/Screenshot.png"


function Project(props) {
    console.log(props)
    return (
        <>
        <div id="work">
            <h3>{props.title}</h3>
            <a target="_blank" href={props.hrefpath}><img className="imageContainer" alt={props.alt} src={props.image}/></a>
            <a target="_blank" href={props.github}>Github Repo</a>
        </div>
        </>
)}

export default Project;