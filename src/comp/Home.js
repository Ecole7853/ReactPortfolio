import React from "react";
import {Link, withRouter} from "react-router-dom";


function Home() {
    return(
        <>
        <div id="homePage">
            <h2>
                Welcome to my Portfolio!
            </h2>
            <button id="welcomeButton"><Link to="/ProfileContainer">Enter here!</Link></button>
        </div>
        </>
    )
}

export default withRouter(Home);