import React from "react";
import { useState   } from "react";
import { motion , useInView } from "framer-motion";
import { useRef } from 'react'
const sections = [
  {
    id: 1,
    title: "Modern Web Design",
    description: "Explore the latest trends in web design and user experience",
  },
  {
    id: 2,
    title: "Responsive Layouts",
    description: "Learn how to create layouts that adapt to any screen size",
  },
  {
    id: 3,
    title: "Interactive Effects",
    description: "Implement engaging animations and transitions for better user interaction",
  },
];

const Features25 = () => {
      const [activeSection, setActiveSection] = useState(null);
  const ref = useRef(null)
const isInView = useInView(ref, {once : true})
  return (
    <div>
          <>
      <section className="bg-gray-100 p-20 h-500px flex flex-row-reverse items-center justify-around ">
        <div className="">
          <img
            src="https://market-resized.envatousercontent.com/previews/files/283941533/preview.jpg?w=590&h=300&cf_fit=crop&crop=top&format=auto&q=85&s=8e8f31263844ec59eb1e79781e211ea185355b529c2317aa9ef8cfa292027d13"
            alt="images"
            className="shadow-2xl "
          />
        </div>
        <motion.div
        ref={ref}
          initial={{ opacity: 0, x: -100 }}
          animate={isInView ? { opacity : 1 , x : 0} : {}}
          tranisiton={{ duration: 0.5 }}
          className="flex flex-col items-centerjustify-center p-5"
        >
          {sections.map((section) => (
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              tranisiton={{ duration:  2 , delay : section.id * 0.5 }}
              key={section.id}
              onClick={() => {
                setActiveSection(section.id);
              }}
              className={`p-4 pl-20 gap-5 mb-4  cursor-pointer sm:w-[550px] shadow-2xl ${
                activeSection === section.id
                  ? "border-l-3 border-l-black bg-gray-100 hover: scale-105 transition-all duration-1 ease-in-out"
                  : "border-gray-500 bg-white"
              }`}
            >
              <h2 className="font-[500] sm:text-3xl mb-5">{section.title}</h2>
              <p className="text-sm w-[100%] ">{section.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </>
    </div>
  )
}

export default Features25
