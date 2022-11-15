import React from "react";
import Photo from "../images/contactCode2.png";
import { motion } from "framer-motion";

function ContactMe() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0.7 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.5 }}
      >
        <div id="contactContainer" className="flex flex-row justify-center space-x-20 mt-20">
          <div id="contactCont" className="flex flex-col text-center">
            <p className="text-white text-2xl max-w-lg mx-10 my-10">
             Github/Linkedin/Facebook can all be seen on the bottom of the page, as direct links to mine. Phone number/email are here aswell, please reach out! I also accept homing pigeons, folded papers with notes passed through class, can and string (you provide), telegram, and drive-by-yelling.  
            </p> 
            <ul id="contList">
              <li>
                <a id="contactLink" href="mailto:ewc1561@gmail.com"className="text-white text-2xl max-w-lg mx-10 my-10">
                  ewc1561@gmail.com
                </a>
              </li>
              <li className="text-white text-2xl max-w-lg mx-10 my-10">Cellphone: 443-909-8177</li>
            </ul>
            </div>
      
          <div id="contactTypes" className="flex text-center justify-center">
            <div id="contImg">
              <img src={Photo} alt="image of code" className="mx-10 my-10 max-h-xl max-w-xl"/>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default ContactMe;
