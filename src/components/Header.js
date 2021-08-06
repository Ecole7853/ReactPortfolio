import React from "react";
import Navigation from "./Navigation"

function Header(props) {
    console.log(props);
    return(
        <>
       <h1>
       Eric Cole
        </h1>
        <Navigation pageChanger = {props.pageChanger} navColor={props.navColor} currentPage = {props.currentPage}/>
        </>
    )
}

export default Header;