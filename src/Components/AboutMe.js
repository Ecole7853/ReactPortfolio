import React from "react";
import Header from "./Header";

function AboutMe() {
    console.log(window.location.href)
    return (
        <>
            <Header />
            <div className="top">
                <div id="aboutMe">
                    <h2>About Me</h2>
                        <div id="about">
                            <p id="aboutText">
                                Hello world!
                                My name is Eric Cole, thanks for viewing my portfolio! While here feel free to check out some of my other projects which can be seen below!
                            </p>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default AboutMe;