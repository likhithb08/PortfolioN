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
    image4:
      "https://media.istockphoto.com/id/1221473823/photo/circle-of-smoke.jpg?s=612x612&w=0&k=20&c=p_35CgCJ5xTLoZBNITLyP0dEqxXHVnRdMa_8RGxS3Jw=",
    image5:
      "https://media.istockphoto.com/id/1221473823/photo/circle-of-smoke.jpg?s=612x612&w=0&k=20&c=p_35CgCJ5xTLoZBNITLyP0dEqxXHVnRdMa_8RGxS3Jw=",
    image6:
      "https://market-resized.envatousercontent.com/previews/files/283941533/preview.jpg?w=590&h=300&cf_fit=crop&crop=top&format=auto&q=85&s=8e8f31263844ec59eb1e79781e211ea185355b529c2317aa9ef8cfa292027d13",
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
        <h1 className="text-4xl font-bold mb-4 mt-10 ">
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
      <motion.div className="hero-section  h-[500px] flex flex-wrap p-5 bg-gray-100 items-center justify-center gap-10 mt-10 overflow-x-scroll scroll-container scroll-smooth">
        {Object.values(images).map((image, index) => {
          return (
            <a href="" key={index}>
              <img
                src={image}
                alt=""
                className="h-[450px] w-[450px] rounded-md object-cover shadow-2xl hover:scale-105 transition-all duration-150"
              />
            </a>
          );
        })}
      </motion.div>
    </>
  );
};

export default HeroSction;
