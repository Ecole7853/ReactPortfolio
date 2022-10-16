import React from "react";
import { motion } from "framer-motion";
import HTMLFlipBook from "react-pageflip";

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
        <HTMLFlipBook width={600} height={1200} className="workBook">
          <div className="workBookPage1">Page 1</div>
          <div className="workBookPage2">Page 2</div>
          <div className="workBookPage3">Page 3</div>
          <div className="workBookPage4">Page 4</div>
        </HTMLFlipBook>
      </motion.div>
    </>
  );
}

export default Project;
