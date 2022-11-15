import React from "react";
import { motion } from "framer-motion";
import HTMLFlipBook from "react-pageflip";
import space from "../images/newspacetimes.png"
import forum from "../images/forum.png" 
import weather from "../images/weather.png" 
import recipe from "../images/recipe.png" 

function Project() {
  console.log();
  return (
    <>
      <motion.div
        initial={{ opacity: 0.7 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.5 }}
      >
        <HTMLFlipBook width={938} height={675} className="workBook text-blue-300 bg-black object-fill ml-5 mt-5">
          <div className="workBookPage1 flex flex-col">
            ~Page 1~
            <div>
              <img className="" src={space}>
                </img>
            </div>
            <p className="text-center text-xl ml-10">
              This is a news board, dedicated to space, utilizing API&apos;s that feature spaceX and Nasa, including photos from the new Perseverance Rover. It provides news, and a &quot;nasa photo of the day&quot; that user can save to their profile if they like! Please check it out, feel free to make a bogus user I haven&apos;t implemented any email verification, some of the stories are amazing. Also features an amazing photo of our dear pal, Hal. This project was not completed alone, and had 2 others, for my part, the theme, and a large portion of Javascript was completed, also the base react app.   
            </p>
           <a className="text-red-400 flex flex-col text-center text-3xl" href="https://newspacetimes1561.herokuapp.com/">Check it out here!</a>
          </div>
          <div className="workBookPage1 flex flex-col">
            ~Page 2~
            <div>
              <img className="" src={forum}>
                </img>
            </div>
            <p className="text-center text-xl ml-10">
              A community forum used for code related conversation, intended as a potential piggy back page for the college that I attended. Users can log in, and post on each otheres threads about various topics related to code! 
            </p>
            <a className="text-red-400 flex flex-col text-center text-3xl" href="https://boiling-lowlands-90882.herokuapp.com/">Check it out here!</a>
          </div>
          <div className="workBookPage1 flex flex-col">
            ~Page 3~
            <div>
              <img className="" src={weather}>
                </img>
            </div>
            <p className="text-center text-xl ml-10">
          A weather board, that allows local storage to store recent searches, simply bookmark this, and it is much more light weight than something like weather.com or other popular ad filled pages. 
            </p>
            <a className="text-red-400 flex flex-col text-center text-3xl" href="https://ecole7853.github.io/WeatherPage/">Check it out here!</a>
          </div>
          <div className="workBookPage1 flex flex-col">
            ~Page 4~
            <div>
              <img className="" src={recipe}>
                </img>
            </div>
            <p className="text-center text-xl ml-10">
           A recipe page that works in reverse to common pages, here, you tell us what you have in your house available, and this page will generate up to 5 available dishes in accordian format that you can make!
            </p>
            <a className="text-red-400 flex flex-col text-center text-3xl" href="https://synag.github.io/project_1_recipe_mixer/index.html">Check it out here!</a>
          </div>
    
        </HTMLFlipBook> 
      </motion.div>
    </>
  );
}

export default Project;
