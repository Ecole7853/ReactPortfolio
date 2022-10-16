import React from "react";
import { Link } from "react-router-dom";
import pdf from "../assets/resumewcover.pdf";

function Navigation() {
  return (
    <>
      <nav>
        <div id="buttonSeperation">
          <ul id="homeButton">
            <li>
              <Link to="/">🏠</Link>
            </li>
          </ul>
          <ul id="navItems">
            <li id="buttons">
              <Link to="/AboutMe">About</Link>
            </li>
            <li id="buttons">
              <Link to="/Project">Projects</Link>
            </li>
            <li id="buttons">
              <Link to="/ContactMe">Contact</Link>
            </li>

            <li id="buttons">
              <a href={pdf} target="_blank" rel="noreferrer">
                Resume
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navigation;
