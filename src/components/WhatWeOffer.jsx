import React, { useState } from "react";

const WhatWeOffer = () => {
  const [openAccordion, setOpenAccordion] = useState(null);

  function handleClick(e) {
    e.preventDefault();
    setFormOpen(true);
    window.scrollTo(0, 0);
  }

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  return (
    <div className="p-6 md:my-16">
      {/* Heading */}
      <div className="flex flex-wrap justify-between items-center mx-auto w-[90%] max-w-5xl">
        <h3 className="text-xl font-bold">What we offer</h3>
      </div>

      {/* Accordion for small screens */}
      <div className="sm:hidden w-[90%] mx-auto max-w-5xl mt-6">
        {[
          {
            title: "Our Services",
            content: [
              "Modular kitchens",
              "Modular wardrobes",
              "Lighting",
              "Flooring",
              "Electrical work",
              "Civil work",
              "False ceiling",
              "Wall design & painting",
            ],
          },
          {
            title: "Price Benefits",
            content: ["No hidden costs - Transparent pricing"],
          },
          {
            title: "Warranty",
            content: [
              "Flat 10-year warranty on modular products",
              "Up to 1-year service warranty on civil services",
            ],
          },
        ].map((section, index) => (
          <div key={index} className="">
            <button
              className="w-full text-left py-3 border-b my-2 bg-white font-semibold flex justify-between items-center transition delay-1000"
              onClick={() => toggleAccordion(index)}
            >
              {section.title}
              <span>{openAccordion === index ? "−" : "+"}</span>
            </button>
            {openAccordion === index && (
              <ul className="list-disc pl-8 text-gray-700 py-2 bg-white">
                {section.content.map((item, i) => (
                  <li key={i} className="my-2">
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>

      {/* Cards for larger screens */}
      <div className="hidden sm:grid mx-auto w-[90%] max-w-5xl grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
        <div className="p-4 rounded-lg bg-white shadow">
          <p className="font-semibold">Our Services</p>
          <ul className="list-disc pl-4 text-gray-700 mt-2">
            <li className="my-4">Modular kitchens</li>
            <li className="my-4">Modular wardrobes</li>
            <li className="my-4">Lighting</li>
            <li className="my-4">Flooring</li>
            <li className="my-4">Electrical work</li>
            <li className="my-4">Civil work</li>
            <li className="my-4">False ceiling</li>
            <li className="my-4">Wall design & painting</li>
          </ul>
        </div>

        <div className="p-4 rounded-lg bg-white shadow">
          <p className="font-semibold">Price Benefits</p>
          <ul className="list-disc pl-4 text-gray-700 mt-2">
            <li className="my-4">No hidden costs - Transparent pricing</li>
          </ul>
        </div>

        <div className="p-4 rounded-lg bg-white shadow">
          <p className="font-semibold">Warranty</p>
          <ul className="list-disc pl-4 text-gray-700 mt-2">
            <li className="my-4">Flat 10-year warranty on modular products</li>
            <li className="my-4">Up to 1-year service warranty on civil services</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WhatWeOffer;
