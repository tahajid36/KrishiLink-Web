import React, { use } from 'react';
import { AuthContext } from '../Layout/AuthProvider';
import { Link } from 'react-router';

const MyProfile = () => {
    const {user} = use(AuthContext)
    // console.log(user)
    return (
        <div className='mt-30'>
            <h1></h1>

            <div className='bg-base-100 w-4/10 mx-auto text-center p-6 space-y-4 rounded-2xl'>
                <img src={user.photoURL} className='rounded-full w-30 h-30 mx-auto mb-5' alt="" />
                <h1 className='text-3xl font-semibold'>Name:{user.displayName}</h1>
                <h1 className='text-3xl font-semibold'>Email: {user.email}</h1>
                <Link to={'/updateprofile'}><button className="btn btn-warning w-full">Update Profile</button></Link>
            </div>

            
        </div>
    );
};

export default MyProfile;