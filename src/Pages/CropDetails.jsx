import { interpolate } from "framer-motion";
import React, { use, useRef, useState } from "react";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../Layout/AuthProvider";
import Loading from "../Components/Loading";

const CropDetails = () => {
  const {user } = use(AuthContext)
  const [loading, setLoading] = useState(false)
  const cropData = useLoaderData();
  const [ crop, setCrop] = useState(cropData)
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
      const alreadySent = crop.interests.some(
        interest => interest.userEmail === user.email
      )
      if(alreadySent) {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "You've already sent interest in this crop",
          showConfirmButton: false,
          timer: 1500
        });
        return;
      }
      

      const InterestInfo ={
        cropId: crop._id,
        userEmail: user.email,
        userName: user.displayName,
        quantity: Number(quantityReference.current.value) ,
        total: totalReference.current.value,
        message: e.target.message.value,
        status: 'Pending'
        
      }

      console.log(InterestInfo.quantity)
      setLoading(true)
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


          fetch(`https://krishilink-server-six.vercel.app/crops/interest/${_id}`, {
            method: "POST",
            headers: {
              "content-type": "application/json"
            },
            body: JSON.stringify(InterestInfo)
          })
          .then(res=> res.json())
          .then(data => {
            console.log(data)
            setCrop(prev => ({
              ...prev,
              interests: [...prev.interests, InterestInfo] 
            }));
            setLoading(false)
          })

          Swal.fire({
            title: "Added!",
            text: "Your Interest has been Sent.",
            icon: "success"
          });
        }
      });


    }

    const handleUpdate =async (interestId, newStatus) => {
    
      const res = await fetch(`https://krishilink-server-six.vercel.app/crops/${_id}/interest/${interestId}`,{
        method: 'PUT',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify({status: newStatus})

      })
      const data = await res.json();
      if(data.modifiedCount > 0){
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: `Interest ${newStatus}`,
          showConfirmButton: false,
          timer: 1500
        });

        setCrop(c=>({
          ...c, interests: c.interests.map( i =>
             i._id === interestId ? {...i, status: newStatus} : i )
        }))
      }
      // const updatedInterests = crop.interests.map(i=> 
      //   i._id === interestId ? {...i, status: newStatus}: i
      // )
      // crop.interests = updatedInterests

    }
    if(loading){
      return <Loading></Loading>
    }
    
  return (
    <div>
 <div  className="grid grid-cols-1 md:grid-cols-2 mt-20 gap-10 md:gap-20">
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

    <div className="w-9/10 md:w-7/11 mx-auto mt-20">
    <h1 className="text-4xl font-semibold text-center">Send Interest for this Crop</h1>
    <form  onSubmit={handleInterest}>
                <label className="label">Quantity</label>
                <input ref={quantityReference} onChange={handleQuantity} name='quantity' type="text" className="input w-full" placeholder="Enter quantity" />
                
                <label className="label">Total Price:</label>
                <input ref={totalReference}  name='total' type="text" className="input w-full" placeholder="total" />

                <label className="label">Message</label>
                <input  name='message' type="text" className="input w-full" placeholder="Enter your message" />

                <button type='submit' className="btn btn-warning w-full mt-7">Send Interest</button>

                </form>
      
    </div>
    {(user.email === owner.ownerEmail ?    <div className="mt-20">
      <h1 className="text-4xl font-semibold my-5 text-center">All Interest Requests for this Crop</h1>
      <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
    <table className="table">
      {/* head */}
      <thead>
        <tr>
          <th>Sl No.</th>
          <th>Buyer Name</th>
          <th>Quantity</th>
          <th>Message</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody> 
        {/* row 1 */}
        {crop.interests.map(interest => <tr key={interest._id}>
          <th>1</th>
          <td>{interest.userName}</td>
          <td>{interest.quantity}</td>
          <td>{interest.message}</td>
          <td>{interest.status}</td>
          <td> <button 
          onClick={()=> handleUpdate(interest._id, "accepted")}
          disabled={interest.status !== "Pending"}
          className="btn-success btn-outline btn-xs btn mr-2">Accept</button>   
           <button
           onClick={()=> handleUpdate(interest._id, "rejected")}
           disabled={interest.status !== "Pending"}
            className="btn-error btn-outline btn-xs btn">Reject</button></td>
        </tr>)}
        
      </tbody>
    </table>
  </div>
      </div> : '') 

     
    }

    

    

    </div>
  );
};

export default CropDetails;
