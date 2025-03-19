import React, { useState } from 'react';
import Image from 'next/image';
import Testimonial_1 from '../assests/Testimonial_1.jpg';
import Testimonial_2 from '../assests/Testimonial_2.jpg';
import Testimonial_3 from '../assests/Testimonial_3.jpg';

import { FaCaretRight } from "react-icons/fa";

const testimonials = [
  {
    name: "Mr. Jose",
    location: "Embassy Habitat",
    quote: "The design team captured our vision flawlessly, creating a functional and stylish home. We loved the minimalistic yet classic look.",
    image: Testimonial_1
  },
  {
    name: "Mrs. Leena",
    location: "Bangalore",
    quote: "Amazing experience with Fifth Wall Designs! They turned my vision into reality, staying on budget and delivering a beautiful, functional space. Highly recommend!",
    image: Testimonial_2
  },
  {
    name: "Sajeesh",
    location: "Bangalore",
    quote: "We had done our new home interior with FWD . They could complete within 2 months and with a perfection. They have clearly understood our requirements and given proper advice and guidance. They good expertise and experience in this field . Very reliable and trustworthy. We are a delighted customer.",
    image: Testimonial_3
  },
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  return (
    <div className="flex flex-col max-w-5xl w-[90%] sm:w-[70vw] md:w-[90vw] mx-auto mt-[10vh] text-center sm:text-left">
      <p className="text-lg font-bold text-[1.7rem]">Happy Customers in Bangalore</p>
      <p className="text-gray-600 text-sm">Here’s what they have to say</p>
      {/* Image & Text Section */}
      <div className='flex flex-col sm:flex-row items-center mt-5 overflow-hidden '>
        {/* Image Section */}
        <div className="w-full sm:w-1/2 h-[60vh]">
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
          <p className="text-lg font-semibold text-[1.7rem] sm:text-[2rem]">{testimonials[currentIndex].name}</p>
          <p className="text-sm text-gray-500 text-[.9rem] sm:text-[1.2rem]">{testimonials[currentIndex].location}</p>
          <p className="mt-2 text-[1rem] sm:text-[1.3rem] sm:text-left ">"{testimonials[currentIndex].quote}"</p>
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