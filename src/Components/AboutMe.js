import React from "react";

function AboutMe() {
  console.log(window.location.href);
  return (
    <>
      <div className="top">
        <div id="aboutMe">
          <p id="aboutTitle">
            <h2>About Me</h2>
          </p>
          <p id="pageText">Hello World.</p>
        </div>{" "}
      </div>
    </>
  );
}

export default AboutMe;
