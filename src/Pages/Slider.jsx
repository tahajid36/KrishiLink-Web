import React from "react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Slider = () => {
  const slides = [
    {
      title: "Fresh from the Fields",
      desc: "Buy and sell quality produce directly from trusted sources.",
      img: "https://cdn.pixabay.com/photo/2022/07/04/10/45/garden-radish-7300875_1280.jpg",
    },
    {
      title: "Connecting Farmers & Traders",
      desc: "A digital platform for growth and collaboration in agriculture.",
      img: "https://cdn.pixabay.com/photo/2025/07/27/13/52/combine-harvester-9738590_1280.jpg",
    },
    {
      title: "Fresh from the Fields",
      desc: "Buy and sell quality produce directly from trusted sources.",
      img: "https://cdn.pixabay.com/photo/2017/03/15/19/41/claas-2147239_1280.jpg",
    },
    {
      title: "Growing Together",
      desc: "Join a community where agriculture meets technology.",
      img: "https://images.unsplash.com/photo-1498408040764-ab6eb772a145?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1172",
    }
  ];

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {
            slides.map(slide=> ( <SwiperSlide><div className="h-[600px] w-full bg-cover bg-center  object-cover "
            style={{backgroundImage: `url(${slide.img})`}}>
                <div className="flex flex-col justify-center items-center ">
                <h1 className="text-5xl text-orange-600 mt-[200px] font-semibold">{slide.title}</h1>
                <p className="text-3xl text-white">{slide.desc}</p>

                </div>
                
            </div> </SwiperSlide>
                
            ))
        }

        
      </Swiper>
    </>
  );
};

export default Slider;
