import React, { use } from 'react';
import { AuthContext } from '../Layout/AuthProvider';

const UpdateProfile = () => {
    const {user, setUser,updateuser} = use(AuthContext)


    const handleUpdate = (e) =>{
        e.preventDefault()
        const name = e.target.name.value
        const email= e.target.email.value 
        const image = e.target.image.value;
        console.log(name, email, image)
        updateuser({displayName: name, photoURL: image})
        .then(()=>{
            setUser({...user, displayName: name, photoURL: image})
        })
        .catch(error=>{
            console.log(error.message)
        })

    }
    return (
        
            <div className='mt-30'>
            <h1 className='text-4xl font-bold text-center m-8'>Update Your Profile Data</h1>

            <div className='bg-base-100 w-9/10 md:w-4/10 mx-auto text-center p-6 space-y-4 rounded-2xl'>
                <img src={user.photoURL} className='rounded-full w-30 h-30 mx-auto mb-5' alt="" />
                <form onSubmit={handleUpdate}>
                <label className="label">Name</label>
                <input name='name' type="text" className="input w-full" placeholder="Enter your name" />

                <label className="label">Email</label>
                <input name='email' type="email" className="input w-full" placeholder="Email" />

                <label className="label">Image URL</label>
                <input type="text" name='image' className="input w-full" placeholder="Paste image url here" />

                <button type='submit' className="btn btn-warning w-full mt-7">Save Changes</button>

                </form>
            </div>

            
        </div>
       
    );
};

export default UpdateProfile;