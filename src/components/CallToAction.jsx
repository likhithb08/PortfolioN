import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const CallToAction = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  return (
    <div className="flex flex-col items-center justify-center p-4 sm:p-8 lg:p-20 m-2 sm:m-5">
      {/* Background decorative card */}
      <div className="bg-[#f6a076] w-full max-w-sm sm:max-w-2xl lg:max-w-4xl h-48 sm:h-56 lg:h-60 rounded-2xl transform rotate-1 shadow-2xl hover:scale-105 transition-all"></div>
      
      {/* Main content card */}
      <div className="bg-[#f0e0d8] w-full max-w-sm sm:max-w-2xl lg:max-w-4xl h-48 sm:h-56 lg:h-60 rounded-2xl transform -rotate-1 relative -mt-44 sm:-mt-52 lg:-mt-56 shadow-2xl hover:scale-95 transition-all flex flex-col lg:flex-row justify-center lg:justify-around items-center p-4 sm:p-6 lg:p-10">
        
        {/* Text content */}
        <div className="transform rotate-1 flex flex-col text-center lg:text-left mb-4 lg:mb-0">
          <h1 className="font-light text-lg sm:text-xl lg:text-2xl xl:text-3xl mb-3 sm:mb-5 leading-tight">
            Ready to bring your ideas into{" "}
            <span className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-normal">Life</span> ?
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-gray-700 max-w-xs sm:max-w-sm">
            Let's work together to build stunning and interactive webpages...!
          </p>
        </div>
        
        {/* Button */}
        <div className="flex-shrink-0">
          <motion.button
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, delay: 0.1 }}
            className="bg-[#BF4408] text-white px-6 py-3 sm:px-8 sm:py-4 lg:px-10 lg:py-5 rounded-full font-bold transform rotate-1 text-base sm:text-lg lg:text-xl hover:bg-[#A03807] transition-colors duration-300"
          >
            Start a Project
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;