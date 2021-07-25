import React from "react";
import Project from "./Project";
import Projectinfo from "./projectinfo";

function Portfolio() {
    return(
      
        <div id="portfolio">
            <h1>
                My Works
            </h1>
                {Projectinfo.map(project =>
                    <Project title={project.title} hrefpath={project.hrefpath} image={project.image} alt={project.alt}/>
                    
                )}
        </div>
    
    )
}

export default Portfolio;