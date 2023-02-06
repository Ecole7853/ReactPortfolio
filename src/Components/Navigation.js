import React from "react";
import { Link } from "react-router-dom";
import pdf from "../assets/resumewcover.pdf";
import home from "../images/home.png";



//function Navigation() {
class Navigation extends React.Component{
  // handleClick(){
  //   console.log(document.getElementById("menu").display)
  //   if(document.getElementById("menu").style.display === "hidden"){
  //     document.getElementById("menu").style.display = "block";
  //   } else document.getElementById("menu").style.display = "hidden";

  // }

    handleClick(e) {
    e.preventDefault();
    const list = document.getElementById('menu').classList;
    list.toggle("hidden");
  }

render(){

  return (
    <>
      <nav className=" bg-gradient-to-r from-gray-600 to-neutral-900 flex-1">
        <div id="buttonSeperation" className="flex flex-column justify-between">
          <ul id="homeButton" className="hidden h-20 mb-3 mt-7 my-5 pt-3 pb-4 pl-3 pr-4 rounded-md transition-all
   duration-1000 
   ease-in-out hover:bg-zinc-400 xl:block">
            <li>
              <Link to="/">
                <img src={home}>
                </img>
              </Link>
            </li>
          </ul>
          <ul
            id="navItems"
            className="xl:inline-flex flex flex-row justify-between align-between p-4 m-4 hidden"
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
          <div onClick={this.handleClick} className="xl:hidden w-30 z-10">
            <svg className="w-24 flex align-center justify-center pl-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
            <ul id="menu" className="hidden">
              <li className="text-2xl text-black list-none flex whitespace-nowrap bg-zinc-600"><Link to="/">Home</Link></li>
              <li className="text-2xl text-black list-none flex whitespace-nowrap bg-zinc-600"><Link to="/AboutMe">About</Link></li>
              <li className="text-2xl text-black list-none flex whitespace-nowrap bg-zinc-600"><Link to="/Project">Projects</Link></li>
              <li className="text-2xl text-black list-none flex whitespace-nowrap bg-zinc-600"><Link to="/Contact">Contact Me</Link></li>
              <li className="text-2xl text-black list-none flex whitespace-nowrap bg-zinc-600">
                <a href={pdf} target="_blank" rel="noreferrer">
                Resume
                </a>
            </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
}


export default Navigation;
