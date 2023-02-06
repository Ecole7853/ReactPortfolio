import React from "react";
import { motion } from "framer-motion";
// import HTMLFlipBook from "react-pageflip";
// import space from "../images/newspacetimes.png"
// import forum from "../images/forum.png"
// import weather from "../images/weather.png"
// import recipe from "../images/recipe.png"

function Project() {
  let projects = [
    {
      id:1,
      title: "New Space Times",
      hrefpath: "https://obscure-tor-43671.herokuapp.com/",
      image: "./images/SpaceApp.png",
      alt: "Space Image",
      github: "https://github.com/Ecole7853/NewSpaceTimes",
    },
    {
      id:2,
      title: "Code Quiz",
      hrefpath: "https://ecole7853.github.io/CodeQuiz/",
      image: "./images/CodeQuiz.png",
      alt: "code-quiz",
      github: "https://github.com/Ecole7853/CodeQuiz",
    },
    {
      id:3,
      title: "Multi-city Weather tracking App",
      hrefpath: "https://ecole7853.github.io/WeatherPage/",
      image: "./images/WeatherApp.png",
      alt: "Weather Generator App Image",
      github: "https://github.com/Ecole7853/WeatherPage",
    },
    {
      id:4,
      title: "Password Generator",
      hrefpath: "https://ecole7853.github.io/PasswordGenerator/",
      image: "./images/PasswordGen.png",
      alt: "Password Generator Image",
      github: "https://github.com/Ecole7853/PasswordGenerator",
    },
  ];

  return (
    <>
      <motion.div
        initial={{ opacity: 0.7 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.5 }}
      >
        {/* <HTMLFlipBook width={750} height={450} className="text-blue-300 bg-black">
          <div className="workBookPage1 flex flex-col">
            ~Page 1~
            <div>
              <img className="" src={space}>
                </img>
            </div>
            <p className="text-center text-xl ml-10">
              a news board,utilizing API&apos;s that feature spaceX and Nasa. It provides news, and a &quot;nasa photo of the day&quot; that users can save. Please check it out, I haven&apos;t implemented email verification, so you can make a bogus account.    
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
    
        </HTMLFlipBook> */}
        <div className="container mx-auto">
          <div className="flex flex-wrap ">
              {projects.map((project) => (
                <div key={project.id} className="text-xl text-white my-20">
                 <div className="flex align-center justify-center my-2 text-2xl"> {project.title} </div>
                 <a href={project.hrefpath} target="_blank" rel="noreferrer" className="flex align-center justify-center my-2"> {project.hrefpath} </a>
                 <a href={project.github} target="_blank" rel="noreferrer" className="flex align-center justify-center my-2"> {project.github} </a>
                 <img className="flex align-center justify-center my-2" src={project.image} alt={project.alt} href={project.hrefpath} target="_blank" rel="noreferrer"/>
                </div>
              ))}
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default Project;
