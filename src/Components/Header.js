import React from "react";
import Navigation from "./Navigation"

function Header(props) {
    console.log(props);
    return(
        <>
       <h1>
       Eric Cole
       <div id="h2Box"/>
            <div id="imgContainer">
            <img className="pic" src="./images/Face.jpg" />
        </div>
        </h1>
        <Navigation/>
        </>
    )
}

export default Header;