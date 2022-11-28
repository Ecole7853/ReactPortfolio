import React from "react";
import { motion } from "framer-motion";
import me from "../images/mahFacePartDuex.jpg"

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
        <div id="aboutCont" className="">
          <div id="fullCont1" className="flex justify-around">
            <div id="contOne" className="flex">
              <div id="imageOne" className="max-w-md opacity-50 mt-12 mr-12">
                <img className=" rounded-lg"src={me}>
              </img>
              </div>
              <p id="textOne" className="ml-10 text-xl max-w-xl text-blue-300 text-center space-x-10 mt-10">Hello, my name is Eric, and I live in Maryland. I&apos;ve been coding for about 2 years mostly in JavaScript. I&apos;ve come to enjoy MERN stack the most. Which is why I remade my portfolio in react. I picked up coding because it seemed like a fun hobby, so I took a bootcamp and have been coding since. I work with University of Connecticut now, as a fullstack educator. I quit my job as an electrical superintendant to further persue this career. That job had a lot of project management, I was in charge of up to 50 people depending on project phase, and was responsible for communicating with the project leads. My last project was the E2 building of City Ridge, you can actually see a virtual 3d walkthrough of the project on youtube. I&apos;m currently working on a forum page that can be easily changed based on the customers needs. Utilizing MERN, this page will feature react components that can easily be renamed and purposed for sub forums, making the project easily reused for each individual customer. Other, already completed projects, can be seen in the projects tab of this portfolio.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default AboutMe;
