import { interpolate } from "framer-motion";
import React, { use, useRef } from "react";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../Layout/AuthProvider";

const CropDetails = () => {
  const {user} = use(AuthContext)
  const crop = useLoaderData();
  console.log(crop)
  const { image, location, name, pricePerUnit, description, owner, quantity, unit, type, _id,  } =
    crop;

   

    const quantityReference = useRef(null)
    const totalReference = useRef(null)


    const handleQuantity = () =>{
      const quantityValue = quantityReference.current.value ;
        if (quantityValue && !isNaN(quantityValue)) {
          const total = Number(quantityValue) * Number(pricePerUnit)
          totalReference.current.value = total.toFixed(2);
          
        }else {
          totalReference.current.value = "";
        }
    
    }

    const handleInterest = (e) => {
      e.preventDefault()
      if(quantity < 1){
        return
      }
      if(user.email === owner.ownerEmail ){
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "Cannot send interest request to own Crop",
          showConfirmButton: false,
          timer: 1500
        });
        return 
      }
      if(owner.ownerEmail === user.email){
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "You cannot send interest",
          showConfirmButton: false,
          timer: 1500
        });
        return
      }

      const InterestInfo ={
        cropId: crop._id,
        userEmail: user.email,
        userName: user.displayName,
        quantity: quantityReference.current.value ,
        total: totalReference.current.value,
        message: e.target.message.value,
        status: 'Pending'
        
      }

      console.log(InterestInfo)

      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, confirm interest!"
      }).then((result) => {
        if (result.isConfirmed) {

          fetch(`http://localhost:1000/crops/interest/${_id}`, {
            method: "POST",
            headers: {
              "content-type": "application/json"
            },
            body: JSON.stringify(InterestInfo)
          })
          .then(res=> res.json())
          .then(data => {
            console.log(data)
          })

          Swal.fire({
            title: "Added!",
            text: "Your Interest has been Sent.",
            icon: "success"
          });
        }
      });


    }
  return (
    <div>
 <div  className="grid grid-cols-2 mt-20 gap-10 md:gap-20">
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

    <div className="w-7/11 mx-auto mt-20">
    <h1 className="text-4xl font-semibold text-center">Send Interest for this Crop</h1>
    <form  onSubmit={handleInterest}>
                <label className="label">Quantity</label>
                <input ref={quantityReference} onChange={handleQuantity} name='quantity' type="text" className="input w-full" placeholder="Enter quantity" />
                
                <label className="label">Total Price:</label>
                <input ref={totalReference}  name='total' type="text" className="input w-full" placeholder="Enter quantity" />

                <label className="label">Message</label>
                <input  name='message' type="text" className="input w-full" placeholder="Enter your message" />

                <button type='submit' className="btn btn-warning w-full mt-7">Send Interest</button>

                </form>
      
    </div>

    </div>
  );
};

export default CropDetails;
