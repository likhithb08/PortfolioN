import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  const images = {
    image1:
      "https://cdn.dribbble.com/userupload/30936747/file/still-82695b29fc736544ffea15d4634b0cb5.png",
    image2:
      "https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2022/06/Portfolio-website-of-the-product-designer-and-front-end-developer-Adham-Dannaway-1024x869.png",
    image3:
      "https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2022/04/web-developer-portfolio.png",
        image4:
      "https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2022/06/Portfolio-website-of-the-product-designer-and-front-end-developer-Adham-Dannaway-1024x869.png",
  };
  
  return (
    <>
      <motion.div
        id="about"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="hero-section h-auto flex items-center justify-center white flex-col px-4 sm:px-0 py-8 sm:py-0"
      >
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 mt-5 sm:mt-10 text-center px-2">
          Full Stack Developer Crafting Scalable Web & AI Solutions
        </h1>
        <p className="text-base sm:text-lg mb-4 sm:mb-6 text-center max-w-md sm:max-w-lg md:max-w-xl">
          Hi, I'm Likhith — a MERN stack & Java full-stack developer, building
          intelligent digital products with clean code and powerful design.
        </p>

        <div className="flex gap-2 sm:gap-3 justify-center items-center flex-wrap ">
          <motion.a
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            href="#"
            className="bg-[#BF4408] text-white px-3 sm:px-4 py-1 rounded-full bold hover:border border-[#BF4408] hover:bg-white hover:text-[#BF4408] text-sm sm:text-base"
          >
            <b>View Projects</b>
          </motion.a>
          <motion.a
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, delay: 1 }}
            href="#"
            className="border border-[#BF4408] text-[#BF4408] px-3 sm:px-4 py-1 rounded-full hover:bg-[#BF4408] hover:text-white text-sm sm:text-base"
          >
            <b>Contact Me</b>
          </motion.a>
        </div>
      </motion.div>
      
      <motion.div className="hero-section h-[250px] sm:h-[350px] md:h-[500px] flex p-4 sm:p-5 bg-gray-100 items-center gap-5 sm:gap-10 mt-8 sm:mt-10 overflow-x-auto scroll-container scroll-smooth">
        {Object.values(images).map((image, index) => {
          return (
            <a href="" key={index} className="flex-shrink-0">
              <img
                src={image}
                alt=""
                className="h-[200px] w-[300px] sm:h-[350px] sm:w-[350px] md:h-[450px] md:w-[450px] rounded-md object-cover shadow-lg sm:shadow-2xl hover:scale-105 transition-all duration-150"
              />
            </a>
          );
        })}
      </motion.div>
    </>
  );
};

export default HeroSection;