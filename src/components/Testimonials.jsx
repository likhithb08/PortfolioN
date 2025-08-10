import { div } from "framer-motion/m";
import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
      name: "John Doe",
      company: "Company ",
      designation: "CEO",
      testimonial:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
      name: "John Doe",
      company: "Company ",
      designation: "CEO",
      testimonial:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 3,
      img: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
      name: "John Doe",
      company: "Company ",
      designation: "CEO",
      testimonial:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 4,
      img: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
      name: "John Doe",
      company: "Company ",
      designation: "CEO",
      testimonial:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];
  return (
    <div className="p-4 sm:p-10 bg-gray-100 gap-3 sm:gap-5 flex flex-col justify-center items-center">
      <h1 className="font-bold text-2xl sm:text-3xl">Testimonials</h1>
      <p className="text-sm sm:text-base text-center">See what my clients have to say about me..</p>
      <div className="flex flex-row gap-5 sm:gap-10 justify-center items-center flex-wrap m-4 sm:m-10">
        {testimonials.map((testimonial, index) => {
          return (
            <div
              id="testimonials"
              key={index}
              className="h-auto sm:h-[250px] w-full sm:w-[550px] bg-[#f6a076] rounded-2xl p-4 sm:p-10 shadow-xl sm:shadow-2xl transform hover:scale-105 hover:rotate-1 transition-all"
            >
              <div className="relative top-0 -mt-8 sm:-mt-10 -left-4 sm:-left-10 h-auto sm:h-[250px] w-full sm:w-[550px] rounded-2xl bg-white p-4 sm:p-10 transform shadow-xl sm:shadow-2xl hover:-rotate-3 transition-all flex flex-col gap-3 sm:gap-5">
                <div className="flex gap-3 sm:gap-5 p-2 items-center">
                  <img
                    src={testimonial.img}
                    alt=""
                    className="h-12 w-12 sm:h-[70px] sm:w-[70px] rounded-full"
                  />
                  <div className="flex flex-col">
                    <h2 className="font-bold text-xl sm:text-2xl">{testimonial.name}</h2>
                    <div className="flex flex-row flex-wrap">
                      <p className="text-sm sm:text-base">{testimonial.designation} , </p>
                      <span className="text-sm sm:text-base">{testimonial.company}</span>
                    </div>
                  </div>
                </div>
                <div className="text-sm sm:text-base">{testimonial.testimonial}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Testimonials;