import React from "react";
import Budget1 from "../assests/Budget1.jpg";
import Budget2 from "../assests/Budget2.jpg";
import Budget3 from "../assests/Budget3.jpg";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react"; // Import Lucide Icons

const HomeBudget = () => {
  const homes = [
    { id: 1, price: "3.5L*", bhk: "2BHK", img: Budget1 },
    { id: 2, price: "4.5L*", bhk: "3BHK", img: Budget2 },
    { id: 3, price: "4.9L*", bhk: "4BHK", img: Budget3 },
  ];

  
  function handleClick(e){
    e.preventDefault()
    setFormOpen(true)
    window.scrollTo(0,0)
  }

  return (

    <div className="p-6 md:my-16">
      <div className="flex flex-col md:flex-row justify-between sm:w-[80vw] lg:w-[85vw] xl:w-[66vw] mx-auto text-center md:text-left">
        <div>
          <h3 className="text-xl font-bold">Homes for every budget</h3>
          <p className="text-gray-600">
            Our interior designers work with you keeping in mind your
            requirements and budget
          </p>
        </div>
      </div>

      {/* Swiper Slider */}
      <div className="mt-6 w-full sm:w-[80vw] lg:w-[85vw] xl:w-[65vw] mx-auto relative">
        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          navigation={{ nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }}
        >
          {homes.map((home) => (
            <SwiperSlide key={home.id}>
              <div className="relative rounded-lg overflow-hidden h-[50vh]">
                <Image
                  src={home.img}
                  alt={home.bhk}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
                <div className="absolute top-2 left-2 bg-slate-700 bg-opacity-50 text-white px-2 py-1 text-sm rounded-full">
                  Starting at {home.price}
                </div>
                <div className="absolute bottom-0 p-4 w-full bg-opacity-50">
                  <p className="text-lg font-semibold text-white">{home.bhk}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons */}
        <button className="swiper-button-prev absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white text-white p-2 rounded-full">
          <ChevronLeft size={24} />
        </button>
        <button className="swiper-button-next absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white text-white p-4 rounded-full">
          <ChevronRight size={5} className=" text-[1rem]" />
        </button>
      </div>
    </div>
  );
};

export default HomeBudget;
