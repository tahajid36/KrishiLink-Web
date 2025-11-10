import React from "react";
import Slider from "./Slider";
import HowWorks from "../Components/HowWorks";
import NewsSection from "../Components/NewsSection";
import TotalUsers from "../Components/TotalUsers";
import Brands from "../Components/Brands";

const Home = () => {
  return (
    <div className="mt-9">
      <Slider></Slider>
      <div className="w-6/11 mx-auto">
        <HowWorks></HowWorks>
      </div>
      <div className="w-6/11 mx-auto">
        <NewsSection></NewsSection>
      </div>
      <div className="my-10">
        <h1 className="text-4xl font-bold text-center">Growing Together: Our User Community</h1>
      <TotalUsers></TotalUsers>
      </div>

      <div>
        <h1 className="text-4xl font-bold text-center">Our Partners</h1>
        <Brands></Brands>
      </div>
      
    </div>
  );
};

export default Home;
