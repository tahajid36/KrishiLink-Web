import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../Layout/AuthProvider';
import Swal from 'sweetalert2';
import { image } from 'framer-motion/client';

const MyPosts = () => {
    const {user} = use(AuthContext)
    // console.log(user)
    const [post , setPost] = useState([])
    const [modal, setModal] = useState(false)
    const [currentpost, setCurrentpost] = useState(null)
    useEffect(()=>{
        if(!user?.email) return;
        fetch(`http://localhost:1000/mypost?email=${user?.email}`)
        .then(res => res.json())
        .then(data=> {
            // console.log(data.result)
            setPost(data.result)
            
        })

    }, [user?.email, post])
   
    const handleDelete =(id) =>{
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
          fetch(`http://localhost:1000/crops/${id}`, {
            method: 'DELETE'
        })
        .then(res=> res.json())
        .then(data => {
            console.log(data)
            const remainingPost = post.filter(p => p.id !== id)
            setPost(remainingPost)
            
        })
        .catch(error => {
            console.log(error.message)
        })
          Swal.fire({
            title: "Deleted!",
            text: "Your Post has been deleted.",
            icon: "success"
          });
        }
      });



    }

    const handleUpdate = (e) => {
      e.preventDefault()
      
      const name = e.target.name.value;
      const type = e.target.type.value;
      const price = e.target.price.value;
      const unit = e.target.unit.value;
      const quantity = e.target.quantity.value;
      const description = e.target.description.value;
      const location = e.target.location.value;
      const image = e.target.image.value;
      const updatedData = {
        name,
        type,
        price,
        unit,
        quantity,
        description,
        location,
        image
    }
   

      fetch(`http://localhost:1000/crops/${currentpost._id}`, {
        method: "PUT",
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(updatedData)
      })
      .then(res=> res.json())
      .then(data => {
        console.log(data)
      })

    }
    // console.log(post)
    return (
        <div>
            <h1 className='text-4xl font-bold text-center my-5'>All Crop Posts</h1>
            <div>
            <div className="w-9/11 mx-auto overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>SL No</th>
        <th>Crop Name</th>
        <th>Owner</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        post.map((post, index)=>  <tr>
            <th>{index + 1}</th>
            <td>{post.name}</td>
            <td> {post.owner.ownerName}</td>
            <td><button onClick={()=>{setModal(true); setCurrentpost(post); }} className='btn btn-outline btn-success btn-xs'>EDIT</button> 
             <button onClick={()=>handleDelete(post._id)} className='btn btn-outline btn-error btn-xs ms-2'>Delete</button></td>
          </tr>)
      }
     
    </tbody>
  </table>
  
{/* <button className="btn" onClick={()=>document.getElementById('my_modal_5').showModal()}>open modal</button> */}
 {
    modal && (<dialog id="my_modal_5" open={modal} className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          
          <div className="modal-action">
          <form
       onSubmit={handleUpdate}
        className="fieldset mx-auto rounded-box w-full border p-4"
      >
        <legend className="fieldset-legend text-2xl">
          Update Crop Details Here
        </legend>

        <label className="label">Name</label>
        <input
        defaultValue={currentpost.name}
          name="name"
          type="text"
          className="input w-full"
          placeholder="Crop Name"
          required
        />

        <label className="label">Select Your Crop Type</label>
        <select required defaultValue={currentpost?.type} className="select  w-full" name="type">
          {/* <option disabled={true}>Crop Type</option> */}
          <option>Vegetable</option>
          <option>Fruit</option>
          <option>Grain</option>
        </select>

        <label className="label">Price Per Unit</label>
        <input
        defaultValue={currentpost.pricePerUnit}
          type="text"
          name="price"
          className="input w-full"
          placeholder="enter price per unit"
          required
        />

        <label className="label">Unit</label>
        <input
        defaultValue={currentpost.unit}
          type="text"
          name="unit"
          className="input w-full"
          placeholder="enter unit (kg/ton/pound)"
          required
        />

        <label className="label">Estimated Quantity</label>
        <input
        defaultValue={currentpost.quantity}
          type="text"
          name="quantity"
          className="input w-full"
          placeholder="Expected harvesting quantity"
          required
        />

        <label className="label">Description</label>
        <textarea
        defaultValue={currentpost.description}
          name="description"
          className="textarea w-full"
          placeholder="tell us about ur crop"
          required
        ></textarea>

        <label className="label">Location</label>
        <input
        defaultValue={currentpost.location}
          type="text"
          name="location"
          className="input w-full"
          placeholder="where the crop grown"
          required
        />

        <label className="label">Image URL</label>
        <input
        defaultValue={currentpost.image}
          type="text"
          name="image"
          className="input w-full"
          placeholder="image url here"
          required
        />

        <button type='submit' className="btn btn-neutral mt-4">Submit Post</button>
        <button onClick={()=> setModal(false)} className="btn">Close</button>
      </form>

          </div>
        </div>
      </dialog>)
 }
</div>
            </div>
        </div>
    );
};

export default MyPosts;


// fetch(url, {})
