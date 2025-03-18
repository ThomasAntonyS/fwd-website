import React from 'react'
import { FaAngleRight } from "react-icons/fa";

const Estimate = ({setFormOpen}) => {

    const estimates = [
        { title: 'Full Home', description: 'Get an approximate costing for your full interiors' },
        { title: 'Kitchen', description: 'Get an approximate costing for your kitchen interiors' },
        { title: 'Wardrobe', description: 'Get an approximate costing for your wardrobe' },
    ];

  return (
    <section className="text-center mt-12 bg-white max-w-5xl mx-auto p-6">
    <h2 className="text-2xl font-bold text-black">Get an estimate for your Bangalore home</h2>
    <p className="text-black">Calculate the approximate cost of doing up your interiors</p>

    {/* Responsive Estimate Cards Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:my-6">
      {estimates.map((estimate, index) => (
        <div key={index} className="flex flex-col items-center">
          <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-xs">
            <h3 className="text-lg font-semibold">{estimate.title}</h3>
            <p className="text-gray-500 text-sm mt-2">{estimate.description}</p>
            <button className="mt-4 mx-auto bg-yellow-400 text-black rounded-full px-4 py-2
              flex items-center gap-2 justify-center w-full sm:w-auto cursor-pointer"
              onClick={()=>setFormOpen(true)}>
              Calculate <FaAngleRight size={16} />
            </button>
          </div>
        </div>
      ))}
    </div>
  </section>
  )
}

export default Estimate