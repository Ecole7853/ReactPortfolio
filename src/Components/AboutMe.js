import React from "react";
import Header from "./Header";
import Project from "./Project";
import Projectinfo from "./projectinfo";

function AboutMe() {
    console.log(window.location.href)
    return (
        <>
            <Header />
            <div className="top">
                <div id="aboutMe">
                        <p id="aboutTitle">
                            <h2>About Me</h2>
                        </p>
                        <p id="aboutText">
                            Hello world!
                            My name is Eric Cole, thanks for viewing my portfolio! While here feel free to check out some of my other projects which can be seen below!
                        </p>
                        <p id="aboutText">
                        Upcoming changes: -better pictures for projects below -better header, with graphics.
                        </p>
                </div>
                <div id="portfolio">
                    <h2>
                        My Projects
                    </h2>
                </div>
                <div className="workSection">{Projectinfo.map(project =>
                    <Project title={project.title} hrefpath={project.hrefpath} image={project.image} alt={project.alt} github={project.github} />

                )}
                </div>
            </div>
        </>

    )
}

export default AboutMe;