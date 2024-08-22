"use client";
import { useState } from "react";
import { AiOutlineCheck } from "react-icons/ai";

const Pricing = () => {
  const [hoveredPlan, setHoveredPlan] = useState("Pro");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 mt-12 md:mt-24">
      <article className="text-center">
        <h2 className="text-2xl md:text-4xl font-semibold leading-8 md:leading-[54px]">
          <span className="text-[#F88C3D]">Subscribe</span> with us now
        </h2>
        <p className="text-[#808080] mt-2 mx-auto w-full md:w-[60%]">
          By subscribing now, you will be able to access the material easily and
          cheaply, making you more efficient and benefiting from it.
        </p>
      </article>

      <div className="pricing-wrap flex flex-wrap justify-center mt-7 md:mt-24">
        {/* Base Plan */}
        <div
          className={`cursor-pointer price-hover-effect group transition-all shadow-lg rounded-xl mx-4 mb-4 p-6 w-80 ${
            hoveredPlan === "Base"
              ? "bg-[#245D51] text-white"
              : "text-[#808080] hover:bg-[#245D51] hover:text-white"
          }`}
          onMouseEnter={() => setHoveredPlan("Base")}
          onMouseLeave={() => setHoveredPlan("Pro")}
        >
          <h2 className="text-2xl font-bold">
            $50 <span className="text-sm font-normal">/ month</span>
          </h2>
          <h3 className="text-lg font-semibold mt-2">Base</h3>
          <p className="text-sm mt-4">
            Lorem ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <ul className="mt-6 space-y-2 text-sm">
            {/* Plan Features */}
            {[
              "Access all videos",
              "Get Certificate",
              "Chat support",
              "Update Notification",
              "Download material",
            ].map((feature) => (
              <li
                key={feature}
                className="flex items-center font-normal leading-6 text-sm"
              >
                <AiOutlineCheck className="mr-2 text-[#245D51] w-4 h-4 p-[3px] rounded-full bg-gray-200" />
                {feature}
              </li>
            ))}
          </ul>
          <button className="mt-6 w-full bg-red-100 text-red-300 font-semibold py-2 rounded-full group-hover:bg-[#CB8461] group-hover:text-white transition-all">
            Choose plan
          </button>
        </div>

        {/* Pro Plan */}
        <div
          className={`price-hover-effect shadow-lg rounded-xl mx-4 mb-4 p-6 w-80 relative ${
            hoveredPlan === "Pro"
              ? "bg-[#245D51] text-white"
              : "text-[#808080] hover:bg-[#245D51] hover:text-white"
          }`}
          onMouseEnter={() => setHoveredPlan("Pro")}
          onMouseLeave={() => setHoveredPlan("Pro")}
        >
          <div className="w-full flex justify-end items-center">
            <button className="text-white bg-[#CB8461] py-2 px-5 rounded-full font-normal text-xs">
              MOST POPULAR
            </button>
          </div>
          <h2 className="text-2xl font-bold">
            $100 <span className="text-sm font-normal">/ 6 month</span>
          </h2>
          <h3 className="text-lg font-semibold mt-2">Pro</h3>
          <p className="text-sm mt-4">
            Lorem ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <ul className="mt-6 space-y-2 text-sm">
            {/* Plan Features */}
            {[
              "Access all videos",
              "Get Certificate",
              "Chat support",
              "Update Notification",
              "Download material",
            ].map((feature) => (
              <li
                key={feature}
                className="flex items-center font-normal leading-6 text-sm"
              >
                <AiOutlineCheck className="mr-2 text-[#245D51] w-4 h-4 p-[3px] rounded-full bg-gray-200" />
                {feature}
              </li>
            ))}
          </ul>
          <button className="mt-6 w-full bg-[#CB8461] text-white font-semibold py-2 rounded-full">
            Choose plan
          </button>
        </div>

        {/* Enterprise Plan */}
        <div
          className={`cursor-pointer price-hover-effect group transition-all shadow-lg rounded-xl mx-4 mb-4 p-6 w-80 ${
            hoveredPlan === "Enterprise"
              ? "bg-[#245D51] text-white"
              : "text-[#808080] hover:bg-[#245D51] hover:text-white"
          }`}
          onMouseEnter={() => setHoveredPlan("Enterprise")}
          onMouseLeave={() => setHoveredPlan("Pro")}
        >
          <h2 className="text-2xl font-bold">
            $200 <span className="text-sm font-normal">/12 month</span>
          </h2>
          <h3 className="text-lg font-semibold mt-2">Enterprise</h3>
          <p className="text-sm mt-4">
            Lorem ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <ul className="mt-6 space-y-2 text-sm">
            {/* Plan Features */}
            {[
              "Access all videos",
              "Get Certificate",
              "Chat support",
              "Update Notification",
              "Download material",
            ].map((feature) => (
              <li
                key={feature}
                className="flex items-center font-normal leading-6 text-sm"
              >
                <AiOutlineCheck className="mr-2 text-[#245D51] w-4 h-4 p-[3px] rounded-full bg-gray-200" />
                {feature}
              </li>
            ))}
          </ul>
          <button className="mt-6 w-full bg-red-100 text-red-300 font-semibold py-2 rounded-full group-hover:bg-[#CB8461] group-hover:text-white transition-all">
            Choose plan
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
