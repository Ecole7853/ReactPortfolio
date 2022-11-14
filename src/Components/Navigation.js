import React from "react";
import { Link } from "react-router-dom";
import pdf from "../assets/resumewcover.pdf";
import home from "../images/home.png";

function Navigation() {
  return (
    <>
      <nav className="bg-gradient-to-r from-gray-600 to-neutral-900 flex-1">
        <div id="buttonSeperation" className="flex flex-column justify-between">
           <ul id="homeButton" className="h-20 mb-3 mt-7 my-5 pt-3 pb-4 pl-3 pr-4 rounded-md transition-all
   duration-1000 
   ease-in-out hover:bg-zinc-400"> 
            <li>
              <Link to="/">
                <img src={home}>
                </img>
              </Link>
            </li>
          </ul>
          <ul
            id="navItems"
            className="flex flex-row justify-between align-between p-4 m-4"
          >
            <li id="buttons" className="text-2xl font-medium text-gray-500 pt-4 px-2 mx-1 pb-4 rounded-md transition-all
   duration-1000 
   ease-in-out hover:bg-zinc-600 hover:text-black">
              <Link to="/AboutMe">About</Link>
            </li>
            <li id="buttons" className="text-2xl font-medium text-gray-500 pt-4 px-2 mx-1 pb-4 rounded-md transition-all
   duration-1000 
   ease-in-out hover:bg-zinc-600 hover:text-black">
              <Link to="/Project">Projects</Link>
            </li>
            <li id="buttons" className="text-2xl font-medium text-gray-500 pt-4 px-2 mx-1 pb-4 rounded-md transition-all
   duration-1000 
   ease-in-out hover:bg-zinc-600 hover:text-black">
            <Link to="/Contact">Contact Me</Link>
            </li>
            <li id="buttons" className="text-2xl font-medium text-gray-500 pt-4 px-2 mx-1 pb-4 rounded-md transition-all
   duration-1000 
   ease-in-out hover:bg-zinc-600 hover:text-black">
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
