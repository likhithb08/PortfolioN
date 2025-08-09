import React from "react";
import { TiMediaPlayOutline } from "react-icons/ti";

const Navbar = () => {
  return (
    <>
      <nav className="sm:h-25 white black flex justify-between items-center sm:px-5 shadow position-sticky top-0 gap-10 position-sticky ">
        <img src="https://media.istockphoto.com/id/1465419181/vector/swan-logo-images-illustration.jpg?s=612x612&w=0&k=20&c=WfsuF8ZHxxbA5YSHkB0kQGO-6NLfhVLioe8D08h0HVc=" alt="Logo" className="h-15 w-15" />

        <div className=" flex items-left w-full justify-between items-center gap-10">
          <div className="flex gap-5 ">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#testimonials" >Testimonials</a>
            <div className="flex justify-between items-center gap-5">
              <a href="#contact">Contact</a>
              <a href="#">
                <TiMediaPlayOutline />
              </a>
            </div>
          </div>
          <div className="flex gap-3 items-center ">
            <a
              href="#"
              className="bg-[#BF4408] text-white sm:px-4 sm:py-1 rounded-full bold "
            >
              <b>Resume</b>
            </a>
            <a
              href="#contact"
              className="border border-[#BF4408] text-[#BF4408] sm:px-4 sm:py-1 rounded-full "
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
