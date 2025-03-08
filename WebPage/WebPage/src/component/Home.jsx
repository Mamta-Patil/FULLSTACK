import React from "react";
import { FaRegFolderOpen } from "react-icons/fa";
import { homepagedata } from "../data/homedata";
import { Carousel } from "@material-tailwind/react";
import { carouselData } from "../data/carousel";
import Button from "../CVA/Button"
const Home = () => {

  return (
    <div className="relative">
      <div>
        {/* Carousel Section */}
        <Carousel
          className="h-[700px] relative"
          autoplay={true}
          autoplayDelay={3000}
          loop={true}
          navigation={false}
          pagination={false}
        >
          {carouselData.map((image) => (
            <img
              key={image.id}
              src={image.src}
              alt={image.alt}
              className="h-full w-full object-cover"
            />
          ))}
        </Carousel>

        {/* Services Section */}
        <div className="absolute -bottom-24 bg-slate-100 mx-20 bg-white">
          <div className="flex justify-between mx-10 px-3 pt-10 pb-10">
            {homepagedata.map((data, index) => (
              <div key={index} className="bg-blue-gray-100 flex px-4 py-5 mx-4">
                <div className="bg-white rounded-full p-3 h-16">
                  <FaRegFolderOpen className="text-5xl" />
                </div>
                <div className="ps-2">
                  <p className="font-ibaraBold text-title">{data.title}</p>
                  <p className="font-jostRegular text-description text-info">
                    {data.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Hero Section */}
        <div className="absolute top-40 text-white ms-5">
          <p className="lg:text-3xl font-ibara">Discover The Truth</p>
          <p className="lg:text-7xl font-ibaraBold pt-4">
            Private <br /> Investigation <br /> Services
          </p>
          <p className="lg:text-xl font-semibold me-96 pe-96 pt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem iure
            ipsa commodi eum quis ex, non
          </p>
          {/* <button className="px-5 py-3 bg-gradient-to-r from-red-500 via-red-500 to-orange-500 hover:bg-gradient-to-r hover:from-orange-600 hover:via-red-500 hover:to-red-500 h-12 mt-6 text-white text-lg flex transition-duration: 0ms; mt-3">
            Discover More
          </button> */}
          <Button variant="primary" size="lg" >Discover More</Button>
        </div>

      </div>
    </div>
  );
};

export default Home;
