import React from "react";
import { motion } from "framer-motion";

function AboutMe() {
  console.log(window.location.href);
  return (
    <>
      <motion.div
        initial={{ opacity: 0.7 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.5 }}
      >
        <div className="top">
          <div id="aboutMe">
            <div id="aboutCont">
              <p id="aboutTitle">{/* <h2></h2> */}</p>
              <p id="pageText">
                My name is Eric, I am a software developer based out of
                Annapolis, MD. When I'm not asynchronous teaching with
                University of Conneticut, I'm working on personal projects. If
                you would like to check those out, stop by the "Projects" tab in
                the nav! Please also check out the contact page and reach out if
                you have any questions.
              </p>
            </div>
          </div>{" "}
        </div>
      </motion.div>
    </>
  );
}

export default AboutMe;
