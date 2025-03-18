'use client'
import React from 'react';
import Image from 'next/image';
import Guarantee_1 from '../assests/Guarantee_1.jpg'
import Guarantee_2 from '../assests/Guarantee_2.png'
import Guarantee_3 from '../assests/Guarantee_3.webp'

const guarantees = [
  { id: 1, text: "60-Days Delivery", icon: <Guarantee_1/> },
  { id: 2, text: "10 Years Warranty", icon: <Guarantee_2/> },
  { id: 3, text: "No Hidden Cost", icon: <Guarantee_3/> },
];

const GuaranteeSection = () => {
  return (
    <div className="flex flex-col h-[20vh] mt-6 justify-center align-middle sm:my-7 sm:h-[10vh] sm:w-[60vw] mx-auto my-auto text-center  w-screen">

      {/* Guarantee Items */}
      <div className="flex justify-between w-full ">
        {guarantees.map((item) => (
          <div key={item.id} className="flex flex-col items-center text-center w-1/3  mx-2">
            <div className="w-16 h-16 bg-white border-2 border-gray-300 rounded-full flex items-center justify-center shadow-md">
              <Image alt={item.text} src={item.icon.type} width={40} height={40} className='mix-blend-multiply'/>
            </div>
            <p className="mt-2 text-sm lg:text-base text-black">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GuaranteeSection;
