import React from "react";
import { motion } from "framer-motion";
import me from "../images/mahFacePartDuex.jpg"
import family from "../images/family.jpg"
import family2 from "../images/family4.jpg"
import cityridge from "../images/cityridge.jpg"
import car from "../images/car.jpeg"
import gym from "../images/gym.jpg"


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
        <div id="aboutCont" className="flex flex-row">
          <div id="fullCont1" className="flex-1 flex-col mt-5 ml-5 mx-auto">
            <div id="contOne" className="flex flex-row space-x-10 mb-5">
              <div id="imageOne" className="max-w-xs opacity-50 ml-10"><img src={me}>
              </img></div>
              <p id="textOne" className="text-white text-2xl max-w-lg text-blue-300 text-center space-x-10 mt-10">Hello, my name is Eric, thanks for visiting my portfolio, this is the about me page where we pretend I&apos;m super interesting and you&apos;re absolutely captivated. I&apos;m a software engineer with Trilogy working at the University of Conneticut.</p>
            </div>
            <div id="contTwo" className="flex flex-row my-5">
              <div id="imageTwo" className="max-w-xs ml-10 mr-20 opacity-50">
                <img src={family}>
                </img>
              </div>
              <div id="imageTwo2" className="max-w-sm ml-5 opacity-50">
                <img src={family2}>
                </img>
              </div>
            </div>
          </div>
          <div id="fullCont2" className="flex-1 flex-col mx-auto">
            <div id="contThree" className="flex flex-row my-5">
              <div id="imageThree" className="max-w-xs opacity-50 mt-5"> <img src={cityridge}>
              </img></div>
              <p id="textThree" className="text-white text-2xl max-w-lg text-blue-300 text-center space-x-10 mb-10 ml-5">This is City Ridge, it&apos;s a series of multi-family dwelling units in Washington, DC that I worked on as my last project at my previous career, the building in the bottom right of the picture was mine! You can see a virtual tour, showing the size and scope of this project by googling &quot;City Ridge&quot;</p>
            </div>
            <div id="fullCont3" className="flex flex-row">
            <div id="contFour" className="flex flex-col my-5">
              <p id="textFour" className="text-white text-2xl max-w-md text-blue-300 text-center mr-5 mt-5 mb-10">This is one of my hobbies, I also train Jiu Jitsu and have trained for Marylands strongest man competition at Colosseum Gym in Columbia.</p> 
              <div id="imageFour" className="max-w-xs ml-10 opacity-50 mb-20">
                <img src={car}>
                </img>  
                </div>
            </div>
            <div id="contFive" className="flex flex-col my-5">
              <div id="imageFive" className="max-w-xs mt-5 ml-5 opacity-50">
                <img src={gym}>
                </img>
              </div>
            </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default AboutMe;
