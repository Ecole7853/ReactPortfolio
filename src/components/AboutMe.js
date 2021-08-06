import React from "react";
import Navigation from "./Navigation"
// import face from "./images/Face.jpg"
// import cityridge from "./images/cityridge.jpg"

function AboutMe() {
    console.log(window.location.href)
    return (
        <>
            <div className="top">
                <div id="aboutMe">
                <h2>About Me</h2>
                <div id="imgContainer">
                    <img className="pic" src= "./images/Face.jpg"/>
                    </div>  
                        <div id="about">
                        <p id="aboutText">
                                My name is Eric Cole, I'm currently a foreman with an electrical company and work out of DC, I'm
                                also in a bootcamp through Trilogy learning Full stack development. My goals over the next few
                                years are to become a fullstack developer! Below, is some of the work I've accomplished within
                                the course.
                            </p>
                        </div>
                        
                </div>
            </div>
        </>
                )
}

export default AboutMe;