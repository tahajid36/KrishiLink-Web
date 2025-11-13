import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../Layout/AuthProvider';

const Interestpage = () => {
    const {user} = use(AuthContext)
    const [interests, setInterests] = useState([])

    useEffect(()=>{
        if(!user?.email) return

        fetch (`http://localhost:1000/interests?email=${user.email}`)
        .then(res => res.json())
        .then(data => {
            setInterests(data.interests)
            console.log(data.interests)
        })
        .catch(error => {
            console.log(error.message)
        })
    },[user?.email])
    return (
        <div>
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
      {interests.map((i, index) => <tr key={i._id}>
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