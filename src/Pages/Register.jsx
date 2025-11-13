import React, { use } from "react";
import { AuthContext } from "../Layout/AuthProvider";
import Swal from "sweetalert2";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router";
import { motion } from "framer-motion";

const Register = () => {
  const { SignUp, setUser, setLoading, GoogleLogin } = use(AuthContext);

  const handleGoogleLogin = () => {
    GoogleLogin()
      .then((res) => {
        setLoading(true);
        console.log(res.user);
        setUser(res.user);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "User registered successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const password = e.target.password.value;

    console.log(email, password, photo, name);

    SignUp(email, password)
      .then((result) => {
        setLoading(true);
        console.log(result.user);
        setUser(result.user);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "User registered successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        console.log(error.message);
        const message = error.message
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: message,
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };

  return (
    <motion.div 
    initial={{opacity:0, x: -100}}
    whileInView={{opacity:1, x:0}}
    viewport={{once: true, amount: 0.5}}
    transition={{duration: 1, ease: "easeOut"}} 
    className="min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold text-center mb-22">
        Create Account to Join our Community
      </h1>
      <div  className="fieldset bg-base-200 border-base-300 shadow-sm rounded-box w-4/11 border p-4">
      <form
        onSubmit={handleSignUp}
       
      >
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
        <p>
          Already have an account !{" "}
          <span className="text-red-600">
            <Link to="/login">Log In</Link>
          </span>
        </p>
       
        <button className="btn btn-neutral mt-4 w-full">Register</button>
      </form>
      <div className="divider">OR</div>

      <button
          onClick={handleGoogleLogin}
          className="btn bg-warning hover:bg-white text-black border-[#e5e5e5]"
        >
          <FcGoogle />
          Register with Google
        </button>
      </div>
      
     
    </motion.div>
  );
};

export default Register;
