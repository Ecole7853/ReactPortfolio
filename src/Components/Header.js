import React from "react";
import Navigation from "./Navigation"

function Header(props) {
    console.log(props);
    return (
        <>
        <div id="h2Box">
                 <Navigation />
                <h1>
                    <div id="headerName">Eric Cole
                        <div id="imgContainer">
                        <img className="pic" src="./images/Face.jpg" />
                        </div>
                    </div>
                </h1>
            </div> 
        </>
    )
}

export default Header;