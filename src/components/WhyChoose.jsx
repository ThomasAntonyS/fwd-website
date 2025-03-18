import React from "react";

const WhyChoose = () => {
  return (
    <div className="bg-stone-800 text-white text-center px-8 py-16 my-4">
      <h2 className="text-2xl font-bold">
        Why Choose Fifth Wall Designs <span className="inline-block"></span>
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-6">
        <div>
          <p className="text-2xl font-semibold my-2">500+</p>
          <p>Projects Completed</p>
        </div>
        <div>
          <p className="text-2xl font-semibold my-2">20+</p>
          <p>Years Expertise</p>
        </div>
        <div>
          <p className="text-2xl font-semibold my-2">96%</p>
          <p>Customer Satisfaction</p>
        </div>
        <div>
          <p className="text-2xl font-semibold my-2">500+</p>
          <p>Projects Across India</p>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
