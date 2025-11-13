import React, { useEffect, useState } from "react";
import Slider from "./Slider";
import HowWorks from "../Components/HowWorks";
import NewsSection from "../Components/NewsSection";
import TotalUsers from "../Components/TotalUsers";
import Brands from "../Components/Brands";
import { motion } from "framer-motion";
import { data, Link, useLoaderData } from "react-router";
import CropCard from "../Components/CropCard";

const Home = () => {
  const [cropdata, setCropData] = useState([])
  useEffect(()=>{
    fetch('https://krishilink-server-six.vercel.app/latestcrop')
    .then(res=>res.json())
    .then(data => {
      setCropData(data)
    })
  },[])
   




  
  return (
    <div className="mt-9">
      <Slider></Slider>


      <div

      className="grid grid-cols-1 md:grid-cols-3 gap-7 mt-22">

        {
          cropdata?.map(crop =>  <CropCard crop={crop}></CropCard>)
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
       className="w-9/10 md:w-6/11 mx-auto">
        <HowWorks></HowWorks>
      </motion.div>


      <motion.div 
      initial={{opacity:0, x: -100}}
      whileInView={{opacity:1, x:0}}
      viewport={{once: true, amount: 0.5}}
      transition={{duration: 1, ease: "easeOut"}} 
      className="w-9/10 md:w-6/11 mx-auto">
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
      className="w-9/10 md:w-6/11 mx-auto">
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
