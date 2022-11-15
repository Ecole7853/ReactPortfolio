import React from "react";
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

      ><div className="flex flex-col align-center justify-center text-center text-blue-300">
         <div  id="waviy">
          <span id="w">W</span>
          <span id="e1">e</span>
          <span id="l">l</span>
          <span id="c">c</span>
          <span id="o">o</span>
          <span id="m">m</span>
          <span id="e2">e</span>
          <span id="excl">!</span>
          </div>
         <p className="font-lg">Please feel free to browse!</p>
         </div>
      </motion.div>
    </>
  );
}

export default Landing;
