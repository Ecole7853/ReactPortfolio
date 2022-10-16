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
        <div id="contactContainer">
          <div id="contactCont">
            <p>
              Please feel free to reach out with any questions, below you can
              find my cell phone, and email address, at the bottom of the page
              you can find my github/facebook/linkedin
            </p>
            <ul id="contList">
              <li>
                <a id="contactLink" href="mailto:ewc1561@gmail.com">
                  ewc1561@gmail.com
                </a>
              </li>
              <li>Cellphone: 443-909-8177</li>
            </ul>
          </div>
          <div id="contactTypes">
            <div id="contImg">
              <img src={Photo} alt="image of code" height="400" width="600" />
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default ContactMe;
