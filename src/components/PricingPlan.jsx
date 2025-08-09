import { div } from "framer-motion/client";
import React from "react";
import { TiTick } from "react-icons/ti";

const PricingPlan = () => {
  const PricingPlan = [
    {
      id: 1,
      title: "Basic Plan",
      price: "75 INR / Hour",
      diffPrice: "or 5000 INR / Project",
      details: ["1 Project", "Basic Support", "limited features"],
    },
    {
      id: 1,
      title: "Standard Plan",
      price: "500 INR / Hour",
      diffPrice: "or 10,000 INR / Project",
      details: [
        "1 Project",
        "Medium  Support",
        "Extra Features + Limited AI Support",
        "1 Month Free Maintenance",
      ],
    },
    {
      id: 1,
      title: "Premium Plan",
      price: "2000 INR / Hour",
      diffPrice: "or 15,000 INR / Project",
      details: [
        "1 Project",
        "Premium Support",
        "Standard Features + Full AI Support",
        "3 Months Free Maintenance",
      ],
    },
  ];
  return (
    <div className="flex flex-col justify-center items-center p-5 gap-5  bg-gray-100">
      <span className="group relative inline-block text-lg group p-2">
        <span className="relative z-10">
          Choose a perfect plan for your PROJECT
        </span>
        <span className="absolute -bottom-0 -left-0 rounded   h-[2px] w-0 bg-[#BF4408] transition-all duration-500 group-hover:w-full"></span>
      </span>
      <p className="group relative inline-block text-lg group p-3">
        <span className="relative z-10 font-bold text-2xl ">PRICING PLANS</span>
        <span className="absolute -bottom-0 -left-0 rounded   h-[3px] w-0 bg-[#BF4408] transition-all duration-500 group-hover:w-full"></span>
        <span className="absolute -bottom-0 -right-0 rounded   w-[3px] h-0 bg-[#BF4408] transition-all duration-500 delay-300 group-hover:h-full"></span>
        <span className="absolute -top-0 -right-0 rounded   w-0 h-[3px] bg-[#BF4408] transition-all duration-500 delay-600  group-hover:w-full"></span>
        <span className="absolute -top-0 -left-0 rounded   w-[3px] h-0 bg-[#BF4408] transition-all duration-500 delay-[900ms] group-hover:h-full"></span>
      </p>

      <div className="flex justify-center w-[300px] p-5  ">
        <span className="border h-[70px] border-l rounded-l-4xl p-5 bg-[#BF4408] text-white m-0 flex justify-center items-center ">
          Hourly Based
        </span>
        <span className="border h-[70px] border-l rounded-r-4xl p-5 m-0 border-r border-[#BF4408] flex justify-center items-center">
          Project Based
        </span>
      </div>

      <div className="flex flex-row justify-around items-center  gap-10  pb-10 ">
        {PricingPlan.map((plan, i) => {
          return (
            <div
              key={i}
              className="flex flex-col border justify-around p-10 w-[300px] h-[400px] rounded-2xl  bg-gray-100  items-center hover:scale-105 hover:bg-[#f0e0d8] hover:opacity-101"
              
            >
              <p>{plan.title}</p>
              <h1 className="text-2xl font-bold ">{plan.price}</h1>
              <p>{plan.diffPrice}</p>

              {plan.details.map((detail, index) => {
                return (
                  <div 
                  key={index}
                  className="flex flex-row gap-5 justify-between" >
                    {/* <TiTick className="" /> */}
                    <span className="">{detail}</span>
                  </div>
                );
              })}

              <button className="bg-[#BF4408] text-white px-4 py-1 rounded-full bold p-10 h-[40px] w-[80%]">
                Get Started
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PricingPlan;
