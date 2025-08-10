import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { MdOutlineHorizontalRule } from "react-icons/md";
import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <footer className="bg-gray-100 flex flex-col lg:flex-row justify-center items-center p-5 gap-5 lg:gap-10">
      {/* Left Section */}
      <div className="bg-gray-100 flex flex-col justify-center items-center p-2 lg:p-5 gap-5 lg:gap-10 w-full lg:w-auto">
        <div className="flex flex-col justify-center items-center p-2 lg:p-5 gap-5 lg:gap-10">
          {/* Name with animated border */}
          <h1 className="text-xl lg:text-2xl font-bold relative group p-3 lg:p-5">
            <span>Likhith B</span>
            <span className="absolute -bottom-0 -left-0 rounded h-[2px] lg:h-[3px] w-0 bg-black transition-all duration-500 group-hover:w-full"></span>
            <span className="absolute -bottom-0 -right-0 rounded w-[2px] lg:w-[3px] h-0 bg-black transition-all duration-500 delay-300 group-hover:h-full"></span>
            <span className="absolute -top-0 -right-0 rounded w-0 h-[2px] lg:h-[3px] bg-black transition-all duration-500 delay-600 group-hover:w-full"></span>
            <span className="absolute -top-0 -left-0 rounded w-[2px] lg:w-[3px] h-0 bg-black transition-all duration-500 delay-[900ms] group-hover:h-full"></span>
          </h1>

          {/* Profile Image */}
          <div className="relative group">
            <img
              src="https://media.istockphoto.com/id/1465419181/vector/swan-logo-images-illustration.jpg?s=612x612&w=0&k=20&c=WfsuF8ZHxxbA5YSHkB0kQGO-6NLfhVLioe8D08h0HVc="
              alt=""
              className="h-32 w-32 lg:h-45 lg:w-45 rounded-full border-4 border-transparent group-hover:border-[#BF4408] transition-all duration-500 hover:scale-110"
            />
            <span className="absolute inset-0 rounded-full border-4 border-[#BF4408] scale-0 group-hover:scale-115 transition-transform duration-500"></span>
          </div>
        </div>

        {/* Animated Horizontal Line */}
        <div className="w-full flex justify-center group">
          <div className="relative w-0 group-hover:w-4/5 transition-all duration-500 border-t-2 border-[#BF4408]"></div>
        </div>
      </div>

      {/* Right Section - Contact Form */}
      <div id="contact" className="w-full lg:w-auto">
        <section id="contact" className="py-10 lg:py-20 text-center w-full">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full"
          >
            <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold mb-4 lg:mb-6 text-[#BF4408]">
              Let's Work Together
            </h2>
            <p className="text-black mb-6 lg:mb-12 max-w-2xl mx-auto text-base lg:text-lg px-4">
              Have a project in mind or want to discuss potential opportunities?
              I'd love to hear from you.
            </p>
            <div className="flex justify-center gap-4 lg:gap-6 mb-6 lg:mb-12">
              <motion.a
                href="https://www.linkedin.com/in/likhith-b-1a7364242"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="bg-[#f6a076] hover:bg-[#F5D1B0] w-10 h-10 lg:w-14 lg:h-14 rounded-full flex items-center justify-center"
              >
                <FaLinkedin size={18} className="lg:w-6 lg:h-6" />
              </motion.a>
              <motion.a
                href="https://github.com/likhithb08"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="bg-[#f6a076] hover:bg-[#F5D1B0] w-10 h-10 lg:w-14 lg:h-14 rounded-full flex items-center justify-center"
              >
                <FaGithub size={18} className="lg:w-6 lg:h-6" />
              </motion.a>
              <motion.a
                href="https://www.instagram.com/layop1._/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="bg-[#f6a076] hover:bg-[#F5D1B0] w-10 h-10 lg:w-14 lg:h-14 rounded-full flex items-center justify-center"
              >
                <FaSquareInstagram size={18} className="lg:w-6 lg:h-6" />
              </motion.a>
            </div>
            <div className="max-w-md mx-auto p-4 lg:p-8 rounded-xl border border-gray-700">
              <form action="https://formspree.io/f/xyzjjpjy" method="POST">
                <div className="mb-3 lg:mb-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    name="name"
                    className="w-full border border-black rounded-lg px-3 lg:px-4 py-2 lg:py-3 text-black focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>
                <div className="mb-3 lg:mb-4">
                  <input
                    type="email"
                    placeholder="Your Email"
                    name="email"
                    className="w-full border border-black rounded-lg px-3 lg:px-4 py-2 lg:py-3 text-black focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>
                <div className="mb-3 lg:mb-4">
                  <textarea
                    placeholder="Your Message"
                    rows="4"
                    name="message"
                    className="w-full border border-black rounded-lg px-3 lg:px-4 py-2 lg:py-3 text-black focus:outline-none focus:ring-2 focus:ring-red-500"
                  ></textarea>
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-red-600 hover:bg-red-700 text-black font-medium py-2 lg:py-3 px-4 lg:px-6 rounded-lg transition-all"
                >
                  Send Message
                </motion.button>
              </form>
            </div>
          </motion.div>
        </section>
      </div>
    </footer>
  );
};

export default Footer;