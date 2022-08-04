import React from "react";

function AboutMe() {
  console.log(window.location.href);
  return (
    <>
      <div className="top">
        <div id="aboutMe">
          <p id="aboutTitle">
            <h2>Welcome!</h2>
          </p>
          <p id="pageText">
            My name is Eric, I am a software developer based out of Annapolis,
            MD. When I'm not asynchronous teaching with University of
            Conneticut, I'm working on personal projects. I've you would like to
            check those out, stop by the "Projects" tab in the nav!
          </p>
        </div>{" "}
      </div>
    </>
  );
}

export default AboutMe;
