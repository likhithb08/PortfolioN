import React from "react";
import { delay, motion } from "framer-motion";

const HeroSction = () => {
  const images = {
    image1:
      "https://cdn.dribbble.com/userupload/30936747/file/still-82695b29fc736544ffea15d4634b0cb5.png",
    image2:
      "https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2022/06/Portfolio-website-of-the-product-designer-and-front-end-developer-Adham-Dannaway-1024x869.png",
    image3:
      "https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2022/04/web-developer-portfolio.png",
  };
  return (
    <>
      <motion.div
      id="about"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="hero-section h-auto flex items-center justify-center white flex-col "
      >
        <h1 className="sm:text-4xl font-bold mb-4 mt-10 ">
          Full Stack Developer Crafting Scalable Web & AI Solutions
        </h1>
        <p className="text-lg mb-6">
          Hi, I’m Likhith — a MERN stack & Java full-stack developer, building
          intelligent digital products with clean code and powerful design.
        </p>

        <div className="flex gap-3 items-center ">
          <motion.a
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            href="#"
            className="bg-[#BF4408] text-white px-4 py-1 rounded-full bold hover:border border-[#BF4408] hover:bg-white hover:text-[#BF4408] "
          >
            <b>Vew Projects</b>
          </motion.a>
          <motion.a
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, delay: 1 }}
            href="#"
            className="border border-[#BF4408] text-[#BF4408] px-4 py-1 rounded-full hover:bg-[#BF4408] hover:text-white "
          >
            <b>Contact Me</b>
          </motion.a>
        </div>
      </motion.div>
      <motion.div className="hero-section  h-[300px] sm:h-[500px] flex flex-wrap p-5 bg-gray-100 items-center justify-center gap-10 mt-10 overflow-x-scroll scroll-container scroll-smooth">
        {Object.values(images).map((image, index) => {
          return (
            <a href="" key={index}>
              <img
                src={image}
                alt=""
                className="sm:h-[450px] sm:w-[450px] rounded-md object-cover shadow-2xl hover:scale-105 transition-all duration-150"
              />
            </a>
          );
        })}
      </motion.div>
    </>
  );
};

export default HeroSction;
