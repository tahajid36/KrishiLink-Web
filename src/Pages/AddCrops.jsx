import React, { use } from "react";
import { AuthContext } from "../Layout/AuthProvider";
import Swal from "sweetalert2";

const AddCrops = () => {
  const { user } = use(AuthContext);
  console.log(user);
  const handleaddCrops = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const type = e.target.type.value;
    const price = e.target.price.value;
    const unit = e.target.unit.value;
    const quantity = e.target.quantity.value;
    const description = e.target.description.value;
    const location = e.target.location.value;
    const image = e.target.image.value;

    console.log(
      name,
      type,
      price,
      unit,
      quantity,
      description,
      location,
      image
    );

    const forminfo = {
      name: name,
      type: type,
      pricePerUnit: price,
      unit: unit,
      quantity: quantity,
      description: description,
      location: location,
      image: image,
      interests: [],
      owner: {
        ownerEmail: user.email,
        ownerName: user.displayName,
      },
    };
    fetch('http://localhost:1000/crops', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(forminfo)
    })
    .then(res=> res.json())
    .then(data => {
        console.log(data)
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "You're crop posted Successfully",
            showConfirmButton: false,
            timer: 1500
          });
    })
    .catch(err=> {
        console.log(err.message)
    })
  };
  return (
    <div className="mt-30 flex justify-center">
        <div className="w-4/10">
        <img className="rounded-2xl"  src="https://cdn.pixabay.com/photo/2020/02/17/15/05/market-4856748_1280.jpg" alt="" />

        </div>
      <div className="w-5/10">
      <form
        onSubmit={handleaddCrops}
        className="fieldset mx-auto rounded-box w-7/11 border p-4"
      >
        <legend className="fieldset-legend text-2xl">
          Add Crop Details Here
        </legend>

        <label className="label">Name</label>
        <input
          name="name"
          type="text"
          className="input w-full"
          placeholder="Crop Name"
          required
        />

        <label className="label">Select Your Crop Type</label>
        <select required defaultValue="Vegetable" className="select  w-full" name="type">
          {/* <option disabled={true}>Crop Type</option> */}
          <option>Vegetable</option>
          <option>Fruit</option>
          <option>Grain</option>
        </select>

        <label className="label">Price Per Unit</label>
        <input
          type="text"
          name="price"
          className="input w-full"
          placeholder="enter price per unit"
          required
        />

        <label className="label">Unit</label>
        <input
          type="text"
          name="unit"
          className="input w-full"
          placeholder="enter unit (kg/ton/pound)"
          required
        />

        <label className="label">Estimated Quantity</label>
        <input
          type="text"
          name="quantity"
          className="input w-full"
          placeholder="Expected harvesting quantity"
          required
        />

        <label className="label">Description</label>
        <textarea
          name="description"
          className="textarea w-full"
          placeholder="tell us about ur crop"
          required
        ></textarea>

        <label className="label">Location</label>
        <input
          type="text"
          name="location"
          className="input w-full"
          placeholder="where the crop grown"
          required
        />

        <label className="label">Image URL</label>
        <input
          type="text"
          name="image"
          className="input w-full"
          placeholder="image url here"
          required
        />

        <button className="btn btn-neutral mt-4">Submit Post</button>
      </form>
      </div>
    </div>
  );
};

export default AddCrops;
