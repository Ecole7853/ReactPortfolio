import React from "react";
import github from "../images/github.png";
import linkedIn from "../images/linkedin.png";
import facebook from "../images/facebook.png";

function Footer() {
  return (
    <>
      <footer id="botFooter" className="flex justify-center fixed bottom-0 pb-4 pt-2 bg-gradient-to-r from-gray-600 to-neutral-900 h-35 w-full">
        <a className="mx-4 transition-all
   duration-1000 
   ease-in-out hover:bg-zinc-300 rounded-full"
          href="https://linkedin.com/in/ecole7853/"
          id="linkedin"
          target="_blank"
          rel="noreferrer"
        ><img src={linkedIn}>
        </img></a>{" "}
        <a className="mx-4 transition-all
   duration-1000 
   ease-in-out hover:bg-zinc-300 rounded-full"
          href="https://github.com/Ecole7853"
          id="github" 
          target="_blank"
          rel="noreferrer"
        ><img src={github}>
        </img></a>
        <a className="mx-4 transition-all
   duration-1000 
   ease-in-out hover:bg-zinc-300 rounded-full"
          href="https://www.facebook.com/eric.cole.980"
          id="facebook"
          target="_blank"
          rel="noreferrer"
        ><img src={facebook}>
        </img></a>
      </footer>
    </>
  );
}

export default Footer;
