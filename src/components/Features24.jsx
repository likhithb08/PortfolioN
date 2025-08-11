import React from "react";
import { useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from 'react'
import MarbleBustViewer2 from './MarbelBust2'

const sections = [
  {
    id: 1,
    title: "React Js",
    description: "Build dynamic and interactive user interfaces with React.js",
  },
  {
    id: 2,
    title: "Tailwind CSS",
    description: "Create beautiful and responsive designs with Tailwind CSS",
  },
  {
    id: 3,
    title: "Three Js",
    description: "Implement custom animations and 3D effects with Three.js",
  },
];

const Features24 = () => {
  const [activeSection, setActiveSection] = useState(null);
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <>
      <section className="bg-gray-100 p-4 sm:p-8 lg:p-20 min-h-screen lg:min-h-[500px] flex flex-col lg:flex-row items-center justify-center lg:justify-around gap-8 lg:gap-4">
        
        {/* Image Section */}
        {/* <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl flex-shrink-0 ">
          <MarbleBustViewer2></MarbleBustViewer2>
        </div> */}

        {/* Content Section */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: -100 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center w-full max-w-2xl"
        >
          <div className="w-full space-y-4">
            {sections.map((section, index) => (
              <motion.div
                id="skills"
                initial={{ opacity: 0, x: 100 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                key={section.id}
                onClick={() => {
                  setActiveSection(activeSection === section.id ? null : section.id);
                }}
                className={`p-4 sm:p-6 lg:pl-8 cursor-pointer w-full shadow-xl rounded-lg border-l-4 transition-all duration-300 ease-in-out transform hover:scale-[1.02] ${
                  activeSection === section.id
                    ? "border-l-black bg-white scale-[1.02] shadow-2xl"
                    : "border-l-gray-400 bg-gray-50 hover:bg-white hover:border-l-gray-600"
                }`}
              >
                <h2 className="font-medium text-xl sm:text-2xl lg:text-3xl mb-2 sm:mb-3 text-gray-800">
                  {section.title}
                </h2>
                <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed">
                  {section.description}
                </p>
                
                {/* Expand/Collapse indicator */}
                <div className="mt-3 flex justify-end">
                  <div className={`w-2 h-2 bg-gray-400 rounded-full transition-transform duration-300 ${
                    activeSection === section.id ? 'scale-150 bg-black' : ''
                  }`}></div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Features24;