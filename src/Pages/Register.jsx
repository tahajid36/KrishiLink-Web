import React, { use } from "react";
import { AuthContext } from "../Layout/AuthProvider";

const Register = () => {

  const { SignUp, setUser, setLoading} = use(AuthContext)

  const handleSignUp = (e)=> {
    e.preventDefault()
    const email = e.target.email.value;
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const password = e.target.password.value;

    console.log(email, password, photo, name)

    SignUp(email, password)
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
    <div className="min-h-screen flex flex-col justify-center items-center">
      <form onSubmit={handleSignUp} className="fieldset bg-base-200 border-base-300 shadow-sm rounded-box w-4/11 border p-4">
        <legend className="fieldset-legend text-3xl items-center">
          Register Now
        </legend>

        <label className="label">Name</label>
        <input
          name="name"
          type="text"
          className="input w-full"
          placeholder="Your Name"
        />

        <label className="label">Email</label>
        <input
          name="email"
          type="email"
          className="input w-full"
          placeholder="Email"
        />

        <label className="label">Photo URL</label>
        <input
          name="photo"
          type="text"
          className="input w-full"
          placeholder="Paste your photo url"
        />

        <label className="label">Password</label>
        <input
          name="password"
          type="password"
          className="input w-full"
          placeholder="Password"
        />

        <button className="btn btn-neutral mt-4">Register</button>
      </form>
    </div>
  );
};

export default Register;
