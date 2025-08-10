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
      id: 2,
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
      id: 3,
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
    <div className="flex flex-col justify-center items-center p-5 gap-5 bg-gray-100">
      {/* Section Titles */}
      <span className="group relative inline-block text-lg p-2 text-center">
        <span className="relative z-10">
          Choose a perfect plan for your PROJECT
        </span>
        <span className="absolute -bottom-0 -left-0 rounded h-[2px] w-0 bg-[#BF4408] transition-all duration-500 group-hover:w-full"></span>
      </span>

      <p className="group relative inline-block text-lg p-3 text-center">
        <span className="relative z-10 font-bold text-2xl">PRICING PLANS</span>
        <span className="absolute -bottom-0 -left-0 rounded h-[3px] w-0 bg-[#BF4408] transition-all duration-500 group-hover:w-full"></span>
        <span className="absolute -bottom-0 -right-0 rounded w-[3px] h-0 bg-[#BF4408] transition-all duration-500 delay-300 group-hover:h-full"></span>
        <span className="absolute -top-0 -right-0 rounded w-0 h-[3px] bg-[#BF4408] transition-all duration-500 delay-600 group-hover:w-full"></span>
        <span className="absolute -top-0 -left-0 rounded w-[3px] h-0 bg-[#BF4408] transition-all duration-500 delay-[900ms] group-hover:h-full"></span>
      </p>

      {/* Toggle Buttons */}
      <div className="flex justify-center md:w-[300px] p-5 sm:overflow-y-scroll scroll-container">
        <span className="border h-[70px] border-l rounded-l-4xl p-5 bg-[#BF4408] text-white m-0 flex justify-center items-center">
          Hourly Based
        </span>
        <span className="border h-[70px] border-l rounded-r-4xl p-5 m-0 border-r border-[#BF4408] flex justify-center items-center">
          Project Based
        </span>
      </div>

      {/* Pricing Cards */}
      <div className="flex flex-col sm:flex-row flex-wrap overflow-hidden overflow-y-scroll  scroll-container h-[450px] justify-center items-center gap-10 pb-10 w-full">
        {PricingPlan.map((plan, i) => {
          return (
            <div
              key={i}
              className="flex flex-col border justify-around p-6 w-full sm:w-[300px] h-auto sm:h-[400px] rounded-2xl bg-gray-100 items-center hover:scale-105 hover:bg-[#f0e0d8] transition-all duration-300"
            >
              <p className="text-lg font-semibold">{plan.title}</p>
              <h1 className="text-2xl font-bold">{plan.price}</h1>
              <p className="text-sm text-gray-700">{plan.diffPrice}</p>

              <div className="flex flex-col gap-2 mt-3">
                {plan.details.map((detail, index) => (
                  <div key={index} className="flex flex-row gap-2 items-center">
                    {/* <TiTick /> */}
                    <span>{detail}</span>
                  </div>
                ))}
              </div>

              <button className="bg-[#BF4408] text-white px-4 py-1 rounded-full bold mt-5 h-[40px] w-[80%]">
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
