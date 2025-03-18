import React, { useState } from 'react';
import Image from 'next/image';
import Testimonial_1 from '../assests/Testimonial_1.png';
import Testimonial_2 from '../assests/Testimonial_2.jpg';
import { FaCaretRight } from "react-icons/fa";

const testimonials = [
  {
    name: "Zarah",
    location: "Bangalore",
    quote: "Very professional with the work, they provide excellent service.",
    image: Testimonial_1
  },
  {
    name: "Rajendran SS",
    location: "Bangalore",
    quote: "All kinds of interior solution.",
    image: Testimonial_2
  },
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  return (
    <div className="flex flex-col max-w-5xl w-[90%] sm:w-[70vw] mx-auto mt-[10vh] text-center sm:text-left">
      <p className="text-lg font-bold text-[1.7rem]">Happy Customers in Bangalore</p>
      <p className="text-gray-600 text-sm">Here’s what they have to say</p>
      {/* Image & Text Section */}
      <div className='flex flex-col sm:flex-row items-center mt-5 overflow-hidden '>
        {/* Image Section */}
        <div className="w-full sm:w-1/2 h-[40vh]">
          <Image 
            src={testimonials[currentIndex].image} 
            alt="Testimonial" 
            width={500} 
            height={500} 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text Section */}
        <div className="w-full sm:w-1/2 p-6 flex flex-col items-center sm:items-start">
          <p className="text-lg font-semibold text-[1.7rem]">{testimonials[currentIndex].name}</p>
          <p className="text-sm text-gray-500 text-[1.2rem]">{testimonials[currentIndex].location}</p>
          <p className="mt-2 text-[1.3rem] text-center sm:text-left">"{testimonials[currentIndex].quote}"</p>
          <div className="flex justify-center sm:justify-start mt-4">
            <button onClick={handleNextTestimonial} className='flex items-center py-1 px-4 border-b transition hover:text-blue-500'>
              Next <FaCaretRight className='ml-2' />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;