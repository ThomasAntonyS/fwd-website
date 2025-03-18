import React from 'react';
import Image from 'next/image';
import BroucherImg from '../assests/Broucher.jpg';

const Broucher = () => {
  return (
    <div className="bg-gray-100 flex md:my-20 flex-col md:flex-row items-center w-[90%] max-w-5xl mx-auto mt-[10vh]">
      {/* Image Section */}
      <div className="w-full md:w-1/2">
        <Image 
          src={BroucherImg} 
          alt="Home Interior Guide" 
          width={500} 
          height={500} 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Text Section */}
      <div className="w-full md:w-1/2 p-6 text-center md:text-left">
        <h2 className="text-lg font-bold">Download home interior guide</h2>
        <p className="text-gray-600 text-sm mt-2">
          Don’t forget to consider these fundamental design guidelines to know before you start interior designing.
        </p>
        <div className="flex justify-center sm:justify-start mt-8">
          <a 
            href='/FWD_Broucher.pdf' 
            download 
            className="bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-600 transition"
          >
            Download Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Broucher;
