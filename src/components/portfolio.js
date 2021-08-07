import React from "react";
import Project from "./Project";
import Projectinfo from "./projectinfo";
import Header from "./Header";

function Portfolio() {
    return(
      
        <div id="portfolio">  
        <Header />
            <h2>
                My Projects
            </h2>
                <div className="workSection">{Projectinfo.map(project =>
                    <Project title={project.title} hrefpath={project.hrefpath} image={project.image} alt={project.alt} github={project.github}/>
                    
                )}
                </div>
        </div>
    )
}

export default Portfolio;