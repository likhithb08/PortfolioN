import React, { useState } from "react";
import { TiMediaPlayOutline } from "react-icons/ti";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="sm:h-25 white black flex justify-between items-center sm:px-5 shadow sticky top-0 gap-10 bg-white z-50">
        {/* Logo */}
        <img
          src="https://media.istockphoto.com/id/1465419181/vector/swan-logo-images-illustration.jpg?s=612x612&w=0&k=20&c=WfsuF8ZHxxbA5YSHkB0kQGO-6NLfhVLioe8D08h0HVc="
          alt="Logo"
          className="h-15 w-15"
        />

        {/* Hamburger button for small screens */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <IoClose /> : <GiHamburgerMenu />}
        </button>

        {/* Menu */}
        <div
          className={`flex-col md:flex md:flex-row md:items-center w-full md:w-auto gap-10 absolute md:static top-16 left-0 bg-white shadow-md md:shadow-none p-5 md:p-0 transition-all duration-300 ease-in-out ${
            isOpen ? "flex" : "hidden"
          }`}
        >
          <div className="flex flex-col md:flex-row gap-5">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#testimonials">Testimonials</a>
            <div className="flex gap-5">
              <a href="#contact">Contact</a>
              <a href="#">
                <TiMediaPlayOutline />
              </a>
            </div>
          </div>

          <div className="flex gap-3 items-center mt-5 md:mt-0">
            <a
              href="#"
              className="bg-[#BF4408] text-white sm:px-4 sm:py-1 rounded-full bold"
            >
              <b>Resume</b>
            </a>
            <a
              href="#contact"
              className="border border-[#BF4408] text-[#BF4408] sm:px-4 sm:py-1 rounded-full"
            >
              <b>Hire Me</b>
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
