import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const CallToAction = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  return (
    <div className="flex flex-col items-center justify-center p-4 sm:p-8 lg:p-20 m-2 sm:m-5">
      {/* Background decorative card - smaller on mobile */}
      <div className="bg-[#f6a076] w-full max-w-xs sm:max-w-2xl lg:max-w-4xl h-40 sm:h-56 lg:h-60 rounded-xl sm:rounded-2xl transform rotate-1 shadow-lg sm:shadow-2xl hover:scale-105 transition-all"></div>
      
      {/* Main content card - adjusted spacing for mobile */}
      <div className="bg-[#f0e0d8] w-full max-w-xs sm:max-w-2xl lg:max-w-4xl h-auto min-h-[180px] sm:h-56 lg:h-60 rounded-xl sm:rounded-2xl transform -rotate-1 relative -mt-36 sm:-mt-52 lg:-mt-56 shadow-lg sm:shadow-2xl hover:scale-95 transition-all flex flex-col lg:flex-row justify-center lg:justify-around items-center p-4 sm:p-6 lg:p-10 gap-4 sm:gap-0">
        
        {/* Text content - adjusted text sizes and spacing */}
        <div className="transform rotate-1 flex flex-col text-center lg:text-left mb-2 lg:mb-0">
          <h1 className="font-light text-base sm:text-xl lg:text-2xl xl:text-3xl mb-2 sm:mb-5 leading-tight">
            Ready to bring your ideas into{" "}
            <span className="text-lg sm:text-2xl lg:text-3xl xl:text-4xl font-normal">Life</span> ?
          </h1>
          <p className="text-xs sm:text-base lg:text-lg text-gray-700 max-w-[250px] sm:max-w-sm">
            Let's work together to build stunning and interactive webpages...!
          </p>
        </div>
        
        {/* Button - adjusted sizing */}
        <div className="flex-shrink-0">
          <motion.button
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 2, delay: 0.1 }}
            className="bg-[#BF4408] text-white px-4 py-2 sm:px-8 sm:py-4 lg:px-10 lg:py-5 rounded-full font-bold transform rotate-1 text-sm sm:text-lg lg:text-xl hover:bg-[#A03807] transition-colors duration-300"
          >
            Start a Project
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;