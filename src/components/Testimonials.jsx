import { div } from "framer-motion/m";
import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      id:1,
      img: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
      name: "John Doe",
      company: "Company ",
      designation: "CEO",
      testimonial:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
        {
          id:2,
      img: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
      name: "John Doe",
      company: "Company ",
      designation: "CEO",
      testimonial:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    }
    ,
        {
          id:3,
      img: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
      name: "John Doe",
      company: "Company ",
      designation: "CEO",
      testimonial:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    }
    ,
        {
          id:4,
      img: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
      name: "John Doe",
      company: "Company ",
      designation: "CEO",
      testimonial:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    }
  ];
  return (
    <div className="p-10 bg-gray-100 gap-5 flex flex-col justify-center items-center">
      <h1 className="font-bold text-3xl">Testimonials</h1>
      <p>See whats my clients have to say about me..</p>
      <div className=" flex flex-row gap-10 justify-center items-center flex-wrap m-10">
        {testimonials.map((testimonial, index) => {
          return (
              <div
              id="testimonials"
                key={index}
                className="h-[250px] w-[550px] bg-[#f6a076] rounded-2xl  p-10 shadow-2xl transform   hover:scale-105 hover:rotate-1 transition-all  "
              >
                <div className=" relative top-0 -mt-10 -left-10 h-[250px] w-[550px]  rounded-2xl bg-white p-10  transform  shadow-2xl  hover:-rotate-3 transition-all flex flex-col gap-5">
                <div className="flex gap-5 p-2 items-center">
                  <img
                    src={testimonial.img}
                    alt=""
                    className="h-[70px] w-[70px] rounded-full"
                  />
                  <div className="flex flex-col ">
                    <h2 className="font-bold text-2xl">{testimonial.name}</h2>
                    <div className="flex flex-row">
                      <p>{testimonial.designation} , </p>
                      <span className="inline-block">
                        {" "}
                        {testimonial.company}
                      </span>
                    </div>
                  </div>
                </div>
                <div>{testimonial.testimonial}</div>
              </div>
              </div>
            
          );
        })}
      </div>

      
    </div>
  );
};

export default Testimonials;
