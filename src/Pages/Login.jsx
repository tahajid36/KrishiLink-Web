import React, { use } from "react";
import { AuthContext } from "../Layout/AuthProvider";
import Swal from "sweetalert2";
import { FcGoogle } from "react-icons/fc";
import { Link, Navigate, useNavigate } from "react-router";
import { motion } from "framer-motion";

const Login = () => {
  const { SignIn, setUser, setLoading, GoogleLogin } = use(AuthContext);
  const navigate = useNavigate()

  const handleGoogle = () => {
    GoogleLogin()
      .then((res) => {
        setLoading(true);
        console.log(res.user);
        setUser(res.user);
        navigate('/')
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "User Logged in successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        // const message = error.message
        console.log(error.message)
        
      });
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    
    if(!passwordRegex.test(password)){
        Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Password must contain 1 upper and lower case characters",
            showConfirmButton: false,
            timer: 1500,
          });

          return


    }

    SignIn(email, password)
      .then((result) => {
        setLoading(true);
        console.log(result.user);
        setUser(result.user);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Logged in successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        <Navigate to="/"></Navigate>;
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
        Login to Your Account,
      </h1>

      <form
        onSubmit={handleSignIn}
        className="fieldset bg-base-200 border-base-300 shadow-sm rounded-box w-4/11 border p-4"
      >
        <legend className="fieldset-legend text-3xl items-center">
          Login Here
        </legend>

        <label className="label">Email</label>
        <input
          name="email"
          type="email"
          className="input w-full"
          placeholder="Email"
        />

        <label className="label">Password</label>
        <input
          name="password"
          type="password"
          className="input w-full"
          placeholder="Password"
        />
        <p>
          {" "}
          <a href="">Forgot Password</a>
        </p>
        <p>Don't have an account ! <span className="text-red-600"><Link to='/register'>Register</Link></span></p>

        <button
          onClick={handleGoogle}
          className="btn bg-warning hover:bg-white text-black border-[#e5e5e5]"
        >
          <FcGoogle />
          Login with Google
        </button>
        <button className="btn btn-neutral mt-1">Login</button>
      </form>
    </motion.div>
  );
};

export default Login;
