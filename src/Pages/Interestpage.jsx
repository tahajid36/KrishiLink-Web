import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../Layout/AuthProvider';

const Interestpage = () => {
    const {user} = use(AuthContext)
    const [interests, setInterests] = useState([])
    const [sort, setSort] = useState('')

    useEffect(()=>{
        if(!user?.email) return

        fetch (`https://krishilink-server-six.vercel.app/interests?email=${user.email}`)
        .then(res => res.json())
        .then(data => {
            
            setInterests(data.interests)
            console.log(data.interests)
        })
        .catch(error => {
            console.log(error.message)
        })
    },[user?.email])
    const sortInt = [...interests].sort((a,b)=>{
        if(sort === "Low to High") return Number(a.quantity) - Number(b.quantity)
        if(sort === "High to Low") return Number(b.quantity) - Number(a.quantity)
            return 0
    })
    return (
        <div className='w-10/12 mx-auto space-y-5'>
            <h1 className='text-4xl font-semibold mt-8 text-center'>All Interest</h1>
            <div className="flex justify-end mb-5">
        <select
        value={sort}
        onChange={(e)=> setSort(e.target.value)}
          defaultValue="Server location"
          className="select select-neutral max-w-30"
        >
          <option value={''}>Sort by Quantity</option>
          <option value={'High to Low'}>High to Low</option>
          <option value={'Low to High'}>Low to High</option>
          
        </select>
      </div>
            <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>SL No.</th>
        <th>Crop Name</th>
        <th>Owner</th>
        <th>Quantity</th>
        <th>Message</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {sortInt.map((i, index) => <tr key={i._id}>
        <th>{index +1}</th>
        <td>{i.cropName}</td>
        <td>{i.cropOwner?.ownerEmail}</td>
        <td>{i.quantity}</td>
        <td>{i.message}</td>
        <td>{i.status}</td>
      </tr>)}
    </tbody>
  </table>
</div>
        </div>
    );
};

export default Interestpage;