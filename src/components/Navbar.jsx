import React, { useState } from "react";
import { TiMediaPlayOutline } from "react-icons/ti";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="h-16 sm:h-20 flex justify-between items-center px-4 sm:px-8 lg:px-16 shadow-md sticky top-0 bg-white z-50 w-full">
      {/* Logo */}
      <img
        src="https://media.istockphoto.com/id/1465419181/vector/swan-logo-images-illustration.jpg?s=612x612&w=0&k=20&c=WfsuF8ZHxxbA5YSHkB0kQGO-6NLfhVLioe8D08h0HVc="
        alt="Logo"
        className="h-10 w-10 sm:h-12 sm:w-12 object-contain"
      />

      {/* Hamburger button for mobile */}
      <button
        className="md:hidden text-3xl text-gray-700 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? <IoClose /> : <GiHamburgerMenu />}
      </button>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-6 lg:gap-10">
        <div className="flex gap-6 lg:gap-10">
          <a href="#about" className="hover:text-[#BF4408] transition-colors">About</a>
          <a href="#skills" className="hover:text-[#BF4408] transition-colors">Skills</a>
          <a href="#testimonials" className="hover:text-[#BF4408] transition-colors">Testimonials</a>
          <a href="#contact" className="hover:text-[#BF4408] transition-colors">Contact</a>
          <a href="#" className="hover:text-[#BF4408] transition-colors">
            <TiMediaPlayOutline className="text-xl" />
          </a>
        </div>

        <div className="flex gap-3 items-center">
          <a
            href="#"
            className="bg-[#BF4408] text-white px-4 py-2 rounded-full font-bold hover:bg-[#A03807] transition-colors"
          >
            Resume
          </a>
          <a
            href="#contact"
            className="border border-[#BF4408] text-[#BF4408] px-4 py-2 rounded-full font-bold hover:bg-[#BF4408] hover:text-white transition-colors"
          >
            Hire Me
          </a>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-16 left-0 right-0 bg-white shadow-lg py-4 px-6 transition-all duration-300 ease-in-out transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col gap-4">
          <a 
            href="#about" 
            className="py-2 hover:text-[#BF4408] transition-colors"
            onClick={() => setIsOpen(false)}
          >
            About
          </a>
          <a 
            href="#skills" 
            className="py-2 hover:text-[#BF4408] transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Skills
          </a>
          <a 
            href="#testimonials" 
            className="py-2 hover:text-[#BF4408] transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Testimonials
          </a>
          <a 
            href="#contact" 
            className="py-2 hover:text-[#BF4408] transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </a>
          <a 
            href="#" 
            className="py-2 flex items-center hover:text-[#BF4408] transition-colors"
            onClick={() => setIsOpen(false)}
          >
            <TiMediaPlayOutline className="mr-2" /> Demo
          </a>
        </div>

        <div className="flex gap-3 mt-6">
          <a
            href="#"
            className="bg-[#BF4408] text-white px-4 py-2 rounded-full font-bold text-sm hover:bg-[#A03807] transition-colors flex-1 text-center"
            onClick={() => setIsOpen(false)}
          >
            Resume
          </a>
          <a
            href="#contact"
            className="border border-[#BF4408] text-[#BF4408] px-4 py-2 rounded-full font-bold text-sm hover:bg-[#BF4408] hover:text-white transition-colors flex-1 text-center"
            onClick={() => setIsOpen(false)}
          >
            Hire Me
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;