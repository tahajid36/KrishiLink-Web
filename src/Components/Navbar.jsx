import React, { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import Container from "./Container";
import logo from "../assets/logo.png";
import { AuthContext } from "../Layout/AuthProvider";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, LogOut, setLoading } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSignOut = () => {
    LogOut()
      .then(() => {
        setLoading(true);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "You're logged out Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/register");
      })
      .catch((err) => console.log(err.message));
  };

  const authLinks = user ? (
    <div className="flex items-center space-x-2">
      <button
        onClick={handleSignOut}
        className="btn btn-sm rounded-full hover:bg-green-700 hover:text-white border-none btn-active btn-warning"
      >
        Log Out
      </button>
      <div className="dropdown dropdown-end">
        <img
          tabIndex={0}
          className="w-8 h-8 rounded-full cursor-pointer"
          src={user.photoURL || "https://i.pravatar.cc/150"}
          alt="User"
        />
        <ul
          tabIndex={0}
          className="dropdown-content menu p-2 shadow bg-green-700 rounded-box w-40 text-white mt-2"
        >
          <li>
            <Link to="/myprofile">My Profile</Link>
          </li>
          <li>
            <Link to="/updateprofile">Update Profile</Link>
          </li>
        </ul>
      </div>
    </div>
  ) : (
    <div className="flex space-x-2">
      <NavLink to="/login">
        <button className="btn mr-2 btn-sm rounded-full hover:bg-green-700 hover:text-white border-none btn-active btn-warning">
          Login
        </button>
      </NavLink>
      <NavLink to="/register">
        <button className="btn btn-sm rounded-full hover:bg-green-700 hover:text-white border-none btn-active btn-warning">
          Register
        </button>
      </NavLink>
    </div>
  );

  const routeLinks = (
    <>
      <NavLink to="/" className="text-white font-semibold hover:text-green-700">
        HOME
      </NavLink>
      <NavLink to="/allcrops" className="text-white font-semibold hover:text-green-700">
        ALL CROPS
      </NavLink>
      <NavLink to="/mypost" className="text-white font-semibold hover:text-green-700">
        MY POSTS
      </NavLink>
      <NavLink to="/interests" className="text-white font-semibold hover:text-green-700">
        INTERESTS
      </NavLink>
      <NavLink to="/addcrops" className="text-white font-semibold hover:text-green-700">
        ADD CROPS
      </NavLink>
    </>
  );

  return (
    <nav className="bg-[#6B8E23] shadow">
      <Container>
        <div className="flex justify-between items-center py-2">
        
          <div className="flex items-center space-x-2">
            <img className="w-20" src={logo} alt="Logo" />
            <h1 className="text-2xl font-bold text-yellow-800 hidden md:block">KRISHILINK BD</h1>
          </div>

          <div className="hidden md:flex items-center space-x-6 ">{routeLinks}</div>

          <div className="flex items-center space-x-2">
            {authLinks}

            <button
              className="md:hidden ml-2 text-white text-2xl"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              ☰
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-green-700 rounded-b-lg py-2 px-4 space-y-2">
            {routeLinks}
          </div>
        )}
      </Container>
    </nav>
  );
};

export default Navbar;
