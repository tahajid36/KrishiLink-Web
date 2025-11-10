import React from "react";
import Slider from "./Slider";
import HowWorks from "../Components/HowWorks";
import NewsSection from "../Components/NewsSection";

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
    </div>
  );
};

export default Home;
