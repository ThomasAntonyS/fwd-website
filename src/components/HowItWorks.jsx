"use client";
import React from "react";
import Image from "next/image";
import Work_1 from "../assests/Work_1.jpg";
import Work_2 from "../assests/Work_2.jpg";
import Work_3 from "../assests/Work_3.jpg";
import Work_4 from "../assests/Work_4.webp";
import Work_5 from "../assests/Work_5.png";

const steps = [
  { id: 1, text: "Meet a designer", icon: Work_1 },
  { id: 2, text: "(10% payment) Book & Lock price", icon: Work_2 },
  { id: 3, text: "(50% payment) Execution begins", icon: Work_3 },
  { id: 4, text: "(100% payment) Final installations", icon: Work_4 },
  { id: 5, text: "Move in and enjoy!", icon: Work_5 },
];

const HowItWorks = ({setFormOpen}) => {

  return (
    <div className="flex flex-col items-center my-10 w-[90%] max-w-5xl mx-auto md:my-20 px-4">
      <h2 className="text-xl lg:text-2xl font-bold text-black mb-6">How it works</h2>

      <div className="relative w-full">
        {/* Line behind the icons */}
        <div className="absolute hidden sm:flex top-[20%] left-0 w-full h-[2px] bg-gray-300"></div>

        {/* Steps Grid for Mobile & Flex for Large Screens */}
        <div className="grid grid-cols-2 sm:flex sm:justify-between w-full gap-6 sm:gap-0">
          {steps.map((step) => (
            <div key={step.id} className="flex flex-col items-center text-center w-full sm:w-auto">
              <div className="w-16 h-16 bg-white border-2 border-gray-300 rounded-full flex items-center justify-center shadow-md relative">
                <Image src={step.icon} width={40} height={40} alt={step.text} />
              </div>
              <p className="text-sm lg:text-base text-gray-700 mt-2 w-[8rem]">{step.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Button */}
      <button
        className="mt-6 bg-yellow-400 text-black px-5 py-3 rounded-full font-semibold hover:bg-yellow-600 transition" onClick={() => setFormOpen(true)}>
        BOOK A CONSULTATION
      </button>
    </div>
  );
};

export default HowItWorks;
