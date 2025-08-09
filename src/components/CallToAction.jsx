import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const CallToAction = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div className="flex flex-col items-center justify-center p-20 m-5">
      <div className="bg-[#f6a076] sm:w-[75%] sm:h-[15em] rounded-2xl transform rotate-1 shadow-2xl hover:scale-105 transition-all"></div>
      <div className="bg-[#f0e0d8] sm:w-[75%] sm:h-[15em] rounded-2xl transform -rotate-1 relative top-[0%] -mt-60 shadow-2xl hover:scale-95 transition-all flex flex-row justify-around  items-center">
        <div className="transform rotate-361  flex flex-col p-10 ">
          <h1 className="font-300 sm:text-2xl mb-5">
            Ready to bring your ideas into{" "}
            <span className="sm:text-3xl">Life</span> ?
          </h1>
          <p>
            Lets work together to build stunning and interaactive Webpages...!
          </p>
        </div>
        <div>
          <motion.button
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, delay: 0.1 }}
            className="bg-[#BF4408] text-white sm:px-4 sm:py-1 rounded-full bold transform rotate-361 sm:text-xl sm:p-5"
          >
            Start a Project
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
