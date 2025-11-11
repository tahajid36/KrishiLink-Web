import React, { use } from "react";
import { NavLink } from "react-router";
import Container from "./Container";
import logo from "../assets/logo.png";
import { AuthContext } from "../Layout/AuthProvider";

const Navbar = () => {
  const { user, LogOut , setLoading} = use(AuthContext);

  const handleSignOut = () => {
    LogOut()
      .then(() => {
        setLoading(true)
        console.log("sign out successfully");
        //sign out successfully
      })
      .catch((err) => console.log(err.message));
  };
  const links = (
    <>
      <NavLink to={"/login"}>
        <button className="btn mr-2 btn-sm rounded-full hover:bg-green-700 hover:text-white border-none btn-active btn-warning">
          Login
        </button>
      </NavLink>
      <NavLink to={"/register"}>
        <button className="btn btn-sm rounded-full hover:bg-green-700 hover:text-white border-none btn-active btn-warning">
          Register
        </button>
      </NavLink>
    </>
  );
  const routelinks = (
    <>
      <NavLink to={"/"}>
        <a className="text-2xl font-semibold text-gray-600">HOME</a>
      </NavLink>
      <NavLink>
        <a className="text-2xl font-semibold text-gray-600">ALL CROPS</a>
      </NavLink>
      <NavLink>
        <a className="text-2xl font-semibold text-gray-600">MY POSTS</a>
      </NavLink>
      <NavLink>
        <a className="text-2xl font-semibold text-gray-600">INTERESTS</a>
      </NavLink>
      <NavLink>
        <a className="text-2xl font-semibold text-gray-600">ADD CROPS</a>
      </NavLink>
    </>
  );
  return (
    <div className="">
      <div className=" bg-[#6B8E23]">
        <Container>
          <div className="flex justify-end space-x-2 py-2">
            {user ? (
              <button
                onClick={handleSignOut}
                className="btn btn-sm rounded-full hover:bg-green-700 hover:text-white border-none btn-active btn-warning"
              >
                Log Out
              </button>
            ) : (<div>{links} </div>)}
            <img
              className="w-8 rounded-full"
              src="https://imgs.search.brave.com/_nEZY0ggsXymJkCMwgQEbBMRC10cVAbo2UUA60UCgEc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAxLzQ2LzkxLzEy/LzM2MF9GXzE0Njkx/MTIyN19qNVdqZXBi/QkFjM3VpOHdOVVho/c0dZc1BwYXBhdTFO/VC5qcGc"
              alt="logo"
            />
          </div>
        </Container>
      </div>
      <div className="bg-white shadow-sm">
        <Container>
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <img className="w-25" src={logo} alt="" />
              <h1 className="text-4xl font-bold text-yellow-800 nav-font">
                KRISHILINK BD
              </h1>
            </div>
            {/* route div here all links  */}
            <div className="space-x-4 ">{routelinks}</div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
