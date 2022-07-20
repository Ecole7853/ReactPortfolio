import React from "react";

function Landing() {
  console.log(window.location.href);
  return (
    <>
      <div className="landingContainer">
        <div className="landing">
          <h2>
            Welcome! My Name is Eric, I am a Software Engineer based out of
            Annapolis, MD. Thank you for checking out my page, feel free to
            check out my work, and Contact me!
          </h2>
        </div>
      </div>
    </>
  );
}

export default Landing;
