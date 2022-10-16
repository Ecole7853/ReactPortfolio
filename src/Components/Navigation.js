import React from "react";
import { Link } from "react-router-dom";
import pdf from "../assets/resumewcover.pdf";
import home from "../images/home.png";

function Navigation() {
  return (
    <>
      <nav className="bg-slate-700">
        <div id="buttonSeperation">
          <ul id="homeButton">
            <li>
              <a href={home} target="_blank" rel="noreferrer"></a>
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
