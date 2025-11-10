import React from 'react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Slider = () => {
    
    return (
        <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        
        <SwiperSlide><img className='h-[600px] w-full object-cover' src="https://images.unsplash.com/photo-1498408040764-ab6eb772a145?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1172" alt="" /></SwiperSlide>
        <SwiperSlide> <img className='h-[600px] w-full object-cover' src="https://cdn.pixabay.com/photo/2022/07/04/10/45/garden-radish-7300875_1280.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className='h-[600px] w-full object-cover' src="https://cdn.pixabay.com/photo/2025/07/27/13/52/combine-harvester-9738590_1280.jpg" alt="" /></SwiperSlide>
        
        
      </Swiper>
    </>
    );
};

export default Slider;