import React from "react";
import Slider from "./Slider";
import HowWorks from "../Components/HowWorks";
import NewsSection from "../Components/NewsSection";
import TotalUsers from "../Components/TotalUsers";
import Brands from "../Components/Brands";
import { motion } from "framer-motion";
import { Link, useLoaderData } from "react-router";
import CropCard from "../Components/CropCard";

const Home = () => {
  const cropData = useLoaderData()
  const filteredcrops = cropData.slice(0,6)
  // console.log(filteredcrops)
  return (
    <div className="mt-9">
      <Slider></Slider>


      <div

      className="grid grid-cols-3 gap-7 mt-22">

        {
          filteredcrops.map(crop =>  <CropCard crop={crop}></CropCard>)
        }

      </div>
      <div className="flex justify-center">
      <Link to={'/allcrops'}><button className="btn w-45 mt-10 btn-warning">View All</button></Link>
      </div>


      <motion.div
        initial={{opacity:0, x: -100}}
        whileInView={{opacity:1, x:0}}
        viewport={{once: true, amount: 0.5}}
        transition={{duration: 1, ease: "easeOut"}}
       className="w-6/11 mx-auto">
        <HowWorks></HowWorks>
      </motion.div>


      <motion.div 
      initial={{opacity:0, x: -100}}
      whileInView={{opacity:1, x:0}}
      viewport={{once: true, amount: 0.5}}
      transition={{duration: 1, ease: "easeOut"}} 
      className="w-6/11 mx-auto">
        <NewsSection></NewsSection>
      </motion.div>
      <div className="my-10">
        <h1 className="text-4xl font-bold text-center">Growing Together: Our User Community</h1>
     
      <div>
      <motion.div 
      initial={{opacity:0, x: -100}}
      whileInView={{opacity:1, x:0}}
      viewport={{once: true, amount: 0.5}}
      transition={{duration: 1, ease: "easeOut"}} 
      className="w-6/11 mx-auto">
         <TotalUsers></TotalUsers>
      </motion.div>
      </div>
      </div>

      <div>
        <h1 className="text-4xl font-bold text-center">Our Partners</h1>
        <Brands></Brands>
      </div>
      
      
      
    </div>
  );
};

export default Home;
