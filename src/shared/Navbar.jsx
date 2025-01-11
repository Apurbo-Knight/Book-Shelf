import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import logo from "../assets/kids.gif";


const Navbar = () => {
  const { user, logoutUser } = useContext(AuthContext);
  const handleLogout = () => {
    logoutUser()
      .then(() => {
        console.log("Successfully Login");
      })
      .catch((err) => console.log("Logiun Failed"));
  };
  return (
    <div className="navbar fixed top-0 z-10 backdrop-blur-2xl mb-4 rounded-xl ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/All Books">All Books</Link>
            </li>
            <li>
              <Link to="/Add Books">Add Books</Link>
            </li>
            <li>
              <Link to="/Borrowed Books">Borrowed Books</Link>
            </li>
          </ul>
        </div>
        <a href="/" className="btn btn-ghost text-xl">
          <img src={logo} alt="" />
          <h2 className="font-bold text-blue-400">Next Chapter</h2>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-blue-400">
          <li>
            <Link to="/" className="focus:text-blue-700 font-semibold text-lg">Home</Link>
          </li>
          <li>
            <Link to="/All Books" className="focus:text-blue-700 font-semibold text-lg">All Books</Link>
          </li>
          <li>
            <Link to="/Add Books" className="focus:text-blue-700 font-semibold text-lg">Add Books</Link>
          </li>
          <li>
            <Link to="/Borrowed Books" className="focus:text-blue-700 font-semibold text-lg">Borrowed Books</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div className="flex items-center gap-4">
            <img
              src={user?.photoURl}
              alt=""
            />
            <button onClick={handleLogout} className="btn bg-blue-500 text-white">
              Logout
            </button>
          </div>
        ) : (
          <>
            <button className="btn bg-blue-500 text-white">
              <Link to="/register">Register</Link>
            </button>
            <button className="btn ml-4 bg-blue-500 text-white">
              <Link to="/login">Login</Link>
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
