'use client';

import React, { useState } from 'react';

const MobileForm = () => {
  const [step, setStep] = useState(1);

  const [step1Data, setStep1Data] = useState({
    name: "",
    phoneNumber: "",
    email: ""
  });
  
  const [step2Data, setStep2Data] = useState({
    propertyType: "",
    budget: "",
    contactTime: "",
    userLocation: ""
  });
 
  return (
    <div className=" flex flex-col md:flex-row items-center w-[90%] max-w-5xl mx-auto ">
        {
            (step === 1 
                ? <FormStep1 step={step} setStep={setStep} step1Data={step1Data} setStep1Data={setStep1Data} /> 
                : <FormStep2 step={step} setStep={setStep} step2Data={step2Data} setStep2Data={setStep2Data} />
            )
        }
    </div>
  );
};


const FormStep1 = ({step, setStep, step1Data, setStep1Data,}) => {

  const [isFocused,setIsFocused] = useState(false)

  const handleFormStep1 = (e) => {
    e.preventDefault(); 
    setStep(2);  
  };

  return (
    <div className="relative bg-transparent overflow-hidden">
      <div className={` top-[20%] right-[10%] flex-col h-max bg-white px-8 py-6 sm:w-[45vw] md:w-[40vw] lg:w-[30vw] z-50`}>

        {/* Progress Bar */}
        <div className="flex items-center h-8 mb-4 text-black">
          <p className="text-sm w-max">Step {step} / 2</p>
          <progress value={step} max={2} className="flex-grow ml-2 h-2 bg-gray-300 rounded-full 
          [&::-webkit-progress-bar]:bg-gray-300 [&::-webkit-progress-bar]:rounded-full 
          [&::-webkit-progress-value]:bg-yellow-500 [&::-webkit-progress-value]:rounded-full 
          [&::-moz-progress-bar]:bg-yellow-500 [&::-moz-progress-bar]:rounded-full"
          ></progress>
        </div>

        <h2 className="text-xl font-semibold text-gray-900 mb-4">Designs for Every Budget</h2>

        <form onSubmit={handleFormStep1} className="space-y-4">
          <input
            type="text"
            required
            onChange={(e) => setStep1Data({ ...step1Data, name: e.target.value })}
            placeholder="Name"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-yellow-400 outline-none"
          />

          <div className={`flex items-center border border-gray-300 rounded-lg ${isFocused ? "ring-1 ring-yellow-400" : ""}`} 
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}>
            <p className='ml-2'>+91</p>
            <input
              type="text"
              required
              onChange={(e) => setStep1Data({ ...step1Data, phoneNumber: e.target.value })}
              placeholder="Phone number"
              className="w-full p-3 outline-none"
            />
          </div>

          <input
            type="email"
            required
            onChange={(e) => setStep1Data({ ...step1Data, email: e.target.value })}
            placeholder="Email"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-yellow-400 outline-none"
          />

          <div className="flex items-center">
            <input type="checkbox" id="whatsapp" className="mr-2" />
            <label htmlFor="whatsapp" className="text-gray-700">Send me updates on WhatsApp</label>
          </div>

          <button className="w-full mt-4 bg-yellow-500 text-black py-3 rounded-full font-semibold hover:bg-yellow-600" type="submit">
            NEXT
          </button>
        </form>
        <p className="mt-3 text-xs text-gray-500 text-center">
          By submitting this form, you agree to the
          <a href="#" className="text-red-500"> privacy policy</a> &  
          <a href="#" className="text-red-500"> terms and conditions</a>.
        </p>
      </div>
    </div>
  );
};


const FormStep2 = ({step, step2Data, setStep2Data,}) => {

  const handleFormStep2 = (e) => {
    e.preventDefault(); 
  };

  return(
  <div className="relative bg-transparent overflow-hidden">
    <div className={` top-[20%] right-[10%] flex-col h-max bg-white px-8 py-6 sm:w-[45vw] md:w-[40vw] lg:w-[30vw] z-50`}>

      {/* Progress Bar */}
      <div className="flex items-center h-8 mb-4 text-black">
        <p className="text-sm w-max">Step {step} / 2</p>
        <progress value={step} max={2} className="flex-grow ml-2 h-2 bg-gray-300 rounded-full 
        [&::-webkit-progress-bar]:bg-gray-300 [&::-webkit-progress-bar]:rounded-full 
        [&::-webkit-progress-value]:bg-yellow-500 [&::-webkit-progress-value]:rounded-full 
        [&::-moz-progress-bar]:bg-yellow-500 [&::-moz-progress-bar]:rounded-full"
        ></progress>
      </div>

      <h2 className="text-xl font-semibold text-gray-900 mb-4">Designs for Every Budget</h2>

      <form onSubmit={handleFormStep2} className="space-y-4">
        <select required className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-yellow-400 outline-none"
          onChange={(e) => setStep2Data({ ...step2Data, propertyType: e.target.value })}>
          <option value="">Select property Type</option>
          <option value="2BHK">2BHK</option>
          <option value="3BHK">3BHK</option>
          <option value="3BHK+">3BHK+</option>
          <option value="Independent Villa">Independent Villa</option>
        </select>

        <select required className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-yellow-400 outline-none"
          onChange={(e) => setStep2Data({ ...step2Data, budget: e.target.value })}>
          <option value="">Select budget Range</option>
          <option value="5-10 lakhs">5-10 lakhs</option>
          <option value="10-20 lakhs">10-20 lakhs</option>
          <option value="20-30 lakhs">20-30 lakhs</option>
          <option value="30-50 lakhs">30-50 lakhs</option>
          <option value="50+ lakhs">50+ lakhs</option>
        </select>

        <select required className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-yellow-400 outline-none"
          onChange={(e) => setStep2Data({ ...step2Data, contactTime: e.target.value })}>
          <option value="">Select contact Time</option>
          <option value="9:00AM-1:00PM">9:00AM-1:00PM</option>
          <option value="1:00PM-5:00PM">1:00PM-5:00PM</option>
          <option value="5:00PM-9:00PM">5:00PM-9:00PM</option>
        </select>

        <input
          type="text"
          required
          placeholder="Enter your Location"
          onChange={e=>setStep2Data({...step2Data,userLocation:e.target.value})}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-yellow-400 outline-none"
        />

        <button className="w-full mt-4 bg-yellow-500 text-black py-3 rounded-full font-semibold hover:bg-yellow-600" type="submit">
          Submit
        </button>
      </form>
    </div>
  </div>
  )
};


export default MobileForm;
