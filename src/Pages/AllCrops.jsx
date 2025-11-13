import React, { useState } from "react";
import { data, useLoaderData } from "react-router";
import CropCard from "../Components/CropCard";
import { motion } from "framer-motion";

const AllCrops = () => {
  const cropData = useLoaderData();
  const  [searchData, setSearchData] = useState(cropData)

  const handleSearch = (e) => {
    e.preventDefault()
    const searchtext= e.target.search.value;
    console.log(searchtext)
    fetch(`https://krishilink-server-six.vercel.app/searchcrop?search=${searchtext}`)
    .then(res=>res.json())
    .then(data => {
      console.log(data)
      setSearchData(data)
    })
  }
 
  // console.log(cropData);
  return (
    <div className="mt-22 space-y-20">
      <h1 className="text-4xl font-bold text-center">
        Get Fresh Vegetables & Utensils
      </h1>
      <form
      onSubmit={handleSearch}
      className="flex justify-center items-center" >
      <label className="input">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <circle cx="11" cy="11" r="8"></circle>
      <path d="m21 21-4.3-4.3"></path>
    </g>
  </svg>
  <input name="search"  type="search" required placeholder="Search" />
</label>
<button className="h-9.5 btn-warning btn">Search</button>
      </form>

    
      

      <div
        className="grid grid-cols-1 md:grid-cols-3 gap-7"
      >
        {searchData.length > 0 ? searchData.map((crop) => (
          <CropCard crop={crop}></CropCard>
        )) :  <p className="text-center col-span-3 text-3xl text-red-500">
        No crops found.
      </p>}
      </div>
    </div>
  );
};

export default AllCrops;
