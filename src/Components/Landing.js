import React from "react";
import Photo from "../images/mahFace.png";
import { motion } from "framer-motion";

function Landing() {
  console.log(window.location.href);
  return (
    <>
      <motion.div
        initial={{ opacity: 0.7 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.5 }}
      >
        <div className="landingContainer">
          <div className="landingImg">
            <div className="faceCont">
              {/* <img src={Photo} alt="image of code" height="300" width="300" /> */}
            </div>
            <div className="landing">
              <h2>
                Welcome to my page, this page is made with react, to display the
                skill, and I used CSS transitions to ease the page change.
                Please feel free to check out my social media links at the
                bottom, my projects, resume and contact me!
              </h2>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default Landing;
