"use client";

import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

//images
import Image from "next/image";
import image1 from "../images/milkfall.jpg";
import image2 from "../images/image2.jpg";
import image3 from "../images/milk-products-wooden-table.jpg";
import image4 from "../images/gee.jpg";
import image5 from "../images/vince-gx-cVYnRsSpRw8-unsplash.jpg";

//links
import Link from "next/link";

const SliderTop = () => {
  return (
    <div className="w-full mx-auto mb-10  rounded-sm bg-sliderBg">
      <Swiper
        pagination={{ clickable: true }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        modules={[Navigation, Pagination]}
        effect="fade"
        autoplay={{
          delay: 1,
          disableOnInteraction: false,
          reverseDirection: true,
          stopOnLastSlide: false,
        }}
        className="w-11/12 ease-linear"
        navigation
        speed={2000}
        centeredSlides={true}
        slideToClickedSlide={true}
        loop={true}
        slidesPerView={1}
      >
        <SwiperSlide>
          <div className="text-center flex-col lg:flex-row flex items-center justify-center m-auto">
            <Image
              src={image1}
              className="object-cover sm:h-[800px] h-[400px]"
            />

            <div className="sm:flex lg:flex-col items-center justify-center hidden">
              <p className="text-lg sm:text-3xl leading-10 tracking-wide ml-8 font-bold">
                DOĞU ANADOLU <br></br> YAYLALARINDAN GELEN<br></br> %100 DOĞAL
                <br></br>KAHVALTILIK GIDALAR
              </p>
              <button className="relative overflow-hidden rounded-full h-12 mt-10 ml-10 group hover:animate-pulse hover:shadow-lg hover:scale-105 transition duration-500 before:absolute before:inset-0 before:rounded-lg before:bg-gradient-to-br before:from-teal-800 before:via-purple-400 before:to-teal-400">
                <span className="relative text-white font-bold px-8 py-8">
                  <Link href="/products"> Hemen Keşfet</Link>
                </span>
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="text-center flex-col lg:flex-row flex items-center justify-center m-auto">
            <Image
              src={image5}
              className="object-cover sm:w-[900px] sm:h-[800px] h-[400px]"
            />

            <div className="sm:flex lg:flex-col items-center justify-center hidden">
              <p className="text-lg sm:text-3xl leading-10 tracking-wide ml-8 font-bold">
                DOĞU ANADOLU <br></br> YAYLALARINDAN GELEN<br></br> %100 DOĞAL
                <br></br>KAHVALTILIK GIDALAR
              </p>
              <Link href="/products">
                <button className="relative overflow-hidden rounded-full h-12 mt-10 ml-10 group hover:animate-pulse hover:shadow-lg hover:scale-105 transition duration-500 before:absolute before:inset-0 before:rounded-lg before:bg-gradient-to-br before:from-teal-800 before:via-purple-400 before:to-teal-400">
                  <span className="relative text-white font-bold px-8 py-8">
                    Hemen Keşfet
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="text-center flex-col lg:flex-row flex items-center justify-center m-auto">
            <Image
              src={image4}
              className="object-cover  sm:h-[800px] h-[400px]"
            />

            <div className="sm:flex lg:flex-col items-center justify-center hidden">
              <p className="text-lg sm:text-3xl leading-10 tracking-wide ml-8 font-bold">
                DOĞU ANADOLU <br></br> YAYLALARINDAN GELEN<br></br> %100 DOĞAL
                <br></br>KAHVALTILIK GIDALAR
              </p>
              <Link href="/products">
                <button className="relative overflow-hidden rounded-full h-12 mt-10 ml-10 group hover:animate-pulse hover:shadow-lg hover:scale-105 transition duration-500 before:absolute before:inset-0 before:rounded-lg before:bg-gradient-to-br before:from-teal-800 before:via-purple-400 before:to-teal-400">
                  <span className="relative text-white font-bold px-8 py-8">
                    Hemen Keşfet
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SliderTop;
