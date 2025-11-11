import React, { use } from 'react';
import { AuthContext } from '../Layout/AuthProvider';

const Login = () => {
    const {SignIn, setUser, setLoading} = use(AuthContext)

    const handleSignIn = (e)=> {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email , password)

        SignIn(email, password)
        .then(result => {
            setLoading(true)
            console.log(result.user)
            setUser(result.user)
            
            
        })
        .catch(error=> {
            console.log(error.message)
        })

    }
    return (
        <div className='min-h-screen flex flex-col justify-center items-center'>
            <form onSubmit={handleSignIn} className="fieldset bg-base-200 border-base-300 shadow-sm rounded-box w-4/11 border p-4">
  <legend className="fieldset-legend text-3xl items-center">Login Here</legend>

  <label className="label">Email</label>
  <input name='email' type="email" className="input w-full" placeholder="Email" />

  <label className="label">Password</label>
  <input name='password' type="password" className="input w-full" placeholder="Password" />
  <p> <a href="">Forgot Password</a></p>

  <button className="btn btn-neutral mt-4">Login</button>
</form>
        </div>
    );
};

export default Login;