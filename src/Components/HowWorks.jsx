import React from "react";
import { FaArrowAltCircleDown } from "react-icons/fa";


const HowWorks = () => {
  return (
    <div>
      <h1 className="text-5xl my-7 text-center font-semibold">How our website works</h1>
      <div className="bg-[#6B8E23] p-3 rounded-2xl h-[500px]">
        <div className="flex w-full flex-col">
          <div className="card  rounded-box grid h-20 place-items-center">
            <h1 className="text-2xl font-semibold">Create Your Crop Post</h1>
            <p>Share What You Grow or Sell</p>
          </div>
          <div className="divider "> <span> <FaArrowAltCircleDown /></span> 
          </div>
          <div className="card  rounded-box grid h-20 place-items-center">
            <h1 className="text-2xl font-semibold">Browse & Discover </h1>
            <p>Find Crops or Partners</p>
          </div>
          <div className="divider "> <span> <FaArrowAltCircleDown /></span> 
          </div>
          <div className="card  rounded-box grid h-20 place-items-center">
            <h1 className="text-2xl font-semibold">Show Interest & Collaborate </h1>
            <p>Connect Directly — No Middleman</p>
          </div>
          <div className="divider "> <span> <FaArrowAltCircleDown /></span> 
          </div>
          <div className="card  rounded-box grid h-20 place-items-center">
            <h1 className="text-2xl font-semibold">Build a Network</h1>
            <p>Grow Your Agro Network</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowWorks;
