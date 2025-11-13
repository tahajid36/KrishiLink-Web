import React from "react";
import { Link } from "react-router";

const CropCard = ({ crop }) => {
  const { image, location, name, pricePerUnit, type, _id, created_at } = crop;
  return (
    <div className="mx-2">
      <div className="card element bg-base-100  shadow-sm">
        <figure>
          <img src={image} className="max-h-[325px] object-cover" alt="Shoes" />
        </figure>
        <div className="card-body">
          <div className="flex justify-between ">
            <div>
              <h2 className="card-title text-xl">{name}</h2>
              <p>{location}</p>
            </div>
            <div>
              <p className="font-semibold text-xl  text-green-700">
                {pricePerUnit} tk / {crop.unit}
              </p>
              <p className="text-end">{new Date(created_at).toLocaleDateString()}</p>
            </div>
          </div>

          <div className="card-actions justify-between items-center">
            <div className="badge badge-primary p-3">{type}</div>
            <button className="btn btn-warning">In Stock</button>
          </div>
          <Link to={`/cropdetails/${_id}`}><button className="btn-details w-full bg-[#D2691E] p-2 text-lg font-semibold rounded">
            View Details 
          </button></Link>
        </div>
      </div>
    </div>
  );
};

export default CropCard;
