import { div } from "framer-motion/client";
import React from "react";

const DPOP = () => {

    const cards = [
        {
            id : 1,
            title : 'Discover',
            description : 'Explore my portfolio to see the projects I have worked on, showcasing my skills in web development and design.',
        },
                {
            id : 2,
            title : 'Connect',
            description : 'Let’s connect! I’m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.',
        }
        ,{
            id : 3,
            title : 'Create',
            description : 'Together we can create innovative solutions that not only meet your needs but also exceed your expectaions',
        }
        ,{
            id : 4,
            title : 'Launch',
            description : 'Ready to take your project to the next level? Let’s launch something amazing together that will make a lasting impact.',
        }

    ]

  return (
    <div className="flex justify-center items-center m-5">
      <div className="flex flex-row justify-between items-center w-[80%] ">
        <div className="w-[50%] flex gap-15 flex-col p-10">
          <h1 className="text-3xl w-full">
            Discover the Power of our PRODUCTS
          </h1>
          <p>
            We help businesses grow faster by combining powerful web development
            with smart AI automations. Get a modern, mobile-friendly website
            that builds trust and converts visitors into customers. No templates
            — just fast, beautiful, and fully customized sites that reflect your
            brand. Supercharge your workflow with AI automations using n8n and
            Make. From lead generation and follow-ups to report generation and
            task reminders, we automate time-consuming tasks so you can focus on
            what matters most. Whether you're a freelancer, startup, or small
            business — our solutions save time, cut manual work, and scale your
            impact without extra effort. Let tech work for you....!
          </p>

          <button className="bg-[#BF4408] text-white px-4 py-1 rounded-full bold p-10 h-[40px] w-[80%]">
            Get Started
          </button>
        </div>
        <div className="overflow-y-scroll  scroll-smooth scroll-container">
          {cards.map((card , i)=>{
            return (
                <div key={card.id}
                className={`flex flex-row justify-between p-10 m-5   sm:w-[450px] sm:h-[200px] rounded-2xl transition-all duration-1000  transform ${i%2==0 ? '-roatate-2 hover:scale-105 rotate-2 border' : 'roatate-2 hover:scale-105 -rotate-2 bg-[#F5D1B0]'}`}
                >
                    <div className="flex flex-col gap-5">
                        <h1 className="text-2xl font-bold">{card.title}</h1>
                        <p>{card.description}</p>
                    </div>
                    <h1 className="text-2xl font-bold">
                        {card.id}
                    </h1>
                </div>
            )
          })}
        </div>
      </div>
    </div>
  );
};

export default DPOP;
