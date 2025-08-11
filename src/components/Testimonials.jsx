import React, { useState } from "react";
import { CiCirclePlus } from "react-icons/ci";
import { Link } from "react-router-dom";

const Testimonials = ({testimonials = []}) => {
  

  return (
    <div className="p-4 sm:p-10 bg-gray-100 gap-3 sm:gap-5 flex flex-col justify-center items-center">
      <h1 className="font-bold text-2xl sm:text-3xl">Testimonials</h1>
      <p className="text-sm sm:text-base text-center">
        See what my clients have to say about me..
      </p>

      {/* Button to navigate to form */}
      <Link to="/addtestimonial">
        <button className="relative group bottom-20 left-180 gap-10 py-2 flex items-center hover:text-[#BF4408] transition-colors">
          <p>Leave a Review</p>
          <span className="absolute -bottom-0 -left-0 rounded h-[2px] w-0 bg-[#BF4408] transition-all duration-500 group-hover:w-full"></span>
          <CiCirclePlus size={35} />
        </button>
      </Link>

      {/* Testimonial cards */}
      <div className="flex flex-row gap-5 sm:gap-10 justify-center items-center flex-wrap m-4 sm:m-10">
        <div className="flex flex-row gap-5 sm:gap-10 justify-center items-center flex-wrap m-4 sm:m-10">
  {testimonials.length === 0 ? (
    <p className="text-gray-500">No testimonials yet. Be the first to leave a review!</p>
  ) : (
      {testimonials.map((testimonial, index) => (
          <div
            id="testimonials"
            key={index}
            className="md:h-[250px] md:w-[550px] bg-[#f6a076] rounded-2xl h-[100px] w-[300px] p-10 shadow-2xl transform hover:scale-105 hover:rotate-1 transition-all"
          >
            <div className="relative top-0 -mt-10 -left-10 h-[100px] w-[300px] md:h-[250px] md:w-[550px] rounded-2xl bg-white p-10 transform shadow-2xl hover:-rotate-3 transition-all flex flex-col gap-5">
              <div className="md:flex gap-5 p-2 items-center">
                <img
                  src={testimonial.img}
                  alt=""
                  className="h-[40px] w-[40px] md:h-[70px] md:w-[70px] rounded-full"
                />
                <div className="md:flex md:flex-col">
                  <h2 className="font-bold md:text-2xl">{testimonial.name}</h2>
                  <div className="md:flex md:flex-row">
                    <p>{testimonial.designation},</p>
                    <span className="inline-block">{testimonial.company}</span>
                  </div>
                </div>
              </div>
              <div>{testimonial.testimonial}</div>
            </div>
          </div>
        ))}

  )}
</div>


      </div>
    </div>
  );
};

export default Testimonials;
