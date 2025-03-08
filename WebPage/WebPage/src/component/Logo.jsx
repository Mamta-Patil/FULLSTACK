import React from "react";
import { logodata } from "../data/logo";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";

const Logo = () => {
  return (
    <div className="bg-gradient-to-r from-red-500 via-pink-500 to-orange-300 mt-40 py-16">
      <Swiper
        slidesPerView={3}  // Shows 3 images at a time
        spaceBetween={20}   // Space between images
        loop={true}         // Infinite loop
        autoplay={{
          delay: 3000,       // Auto-slide every 3 seconds
          disableOnInteraction: false,
        }}
        modules={[Autoplay]} // Enables autoplay
      >
        {logodata.map((image, index) => (
          <SwiperSlide key={index} className="flex justify-center">
            <img src={image.img} alt={`Logo ${index}`} className="h-24 w-auto m-auto" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Logo;
