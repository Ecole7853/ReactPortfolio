import React from "react";
import {Link, withRouter} from "react-router-dom";


function Home() {
    return(
        <>
        <div id="homePage">
            <h1>
                Welcome
            </h1>
            <button><Link to="/portfolio">Click Me</Link></button>
        </div>
        </>
    )
}

export default withRouter(Home);