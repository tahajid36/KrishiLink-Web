import React from "react";
import { useLoaderData } from "react-router";

const CropDetails = () => {
  const crop = useLoaderData();
  const { image, location, name, pricePerUnit, description, quantity, unit, type, _id } =
    crop;
  return (
    <div className="grid grid-cols-2 mt-20 gap-10 md:gap-20">
      {/* left side div  */}
      <div>
        <img src={crop.image} className="rounded-2xl" alt="" />
      </div>
      {/* right side div  */}
      <div>
        <div className="space-y-2.5 mb-5">
          <h1 className="text-4xl font-bold">{name}</h1>
          <p className="text-lg font-semibold">Category: {type}</p>
          <p className="text-lg font-semibold">
            Available: {quantity} {unit}
          </p>
          <p className="text-lg font-semibold">Price: {pricePerUnit} tk -/{unit}</p>
          <p className="text-lg font-semibold">Grown in: {location}</p>
        </div>
        <hr />
        <div>
            <p><span className="font-semibold underline">Description:</span> {description}</p>
        </div>
      </div>
    </div>
  );
};

export default CropDetails;
