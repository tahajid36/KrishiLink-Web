import React from "react";
import { useLoaderData } from "react-router";
import CropCard from "../Components/CropCard";
import { motion } from "framer-motion";

const AllCrops = () => {
  const cropData = useLoaderData();
  console.log(cropData);
  return (
    <div className="mt-22 space-y-20">
      <h1 className="text-4xl font-bold text-center">
        Get Fresh Vegetables & Utensils
      </h1>
      

      <div
        // initial={{opacity:0, x: -100}}
        // whileInView={{opacity:1, x:0}}
        // viewport={{once: true, amount: 0.5}}
        // transition={{duration: 1, ease: "easeOut"}}
        className="grid grid-cols-3 gap-7"
      >
        {cropData.map((crop) => (
          <CropCard crop={crop}></CropCard>
        ))}
      </div>
    </div>
  );
};

export default AllCrops;
