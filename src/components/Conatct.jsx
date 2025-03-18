import React from 'react';
import { BsWhatsapp } from 'react-icons/bs';
import { IoMdCall } from 'react-icons/io';

const Contact = () => {
  return (
    <div className="text-center w-full mt-10 bg-stone-800 p-6 sm:p-10 md:mt-32 mx-auto">
      <h2 className="text-2xl font-bold text-white">Connect with us</h2>
      <p className="text-white">
        Reach out via WhatsApp or phone call for the best interior experience.
      </p>

      {/* Button Container */}
      <div className="mt-4 flex flex-col sm:flex-row justify-center gap-4">
        <a href="tel:+919444147318" className="flex items-center gap-2 bg-yellow-400 text-white px-4 py-2 rounded-full w-full sm:w-auto justify-center">
          <IoMdCall size={20} /> Call Now
        </a>
        <a href="https://wa.me/+919444147318" className="flex items-center gap-2 bg-yellow-400 text-white px-4 py-2 rounded-full w-full sm:w-auto justify-center">
          <BsWhatsapp size={20} /> Whatsapp
        </a>
      </div>
    </div>
  );
};

export default Contact;
