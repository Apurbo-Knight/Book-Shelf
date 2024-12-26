import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import logo from "../assets/kids.gif";
import { Tooltip as ReactTooltip } from "react-tooltip";

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
    <div className="navbar bg-base-100 mb-4">
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
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/All Books">All Books</NavLink>
            </li>
            <li>
              <NavLink to="/Add Books">Add Books</NavLink>
            </li>
            <li>
              <NavLink to="/Borrowed Books">Borrowed Books</NavLink>
            </li>
          </ul>
        </div>
        <a href="/" className="btn btn-ghost text-xl">
          <img src={logo} alt="" />
          <h2>Next Chapter</h2>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/All Books">All Books</NavLink>
          </li>
          <li>
            <NavLink to="/Add Books">Add Books</NavLink>
          </li>
          <li>
            <NavLink to="/Borrowed Books">Borrowed Books</NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div className="flex items-center gap-4">
            <img
              data-tooltip-id="tooltip-0"
              className="rounded-full size-12"
              src={user?.photoURL}
              alt=""
            />
            <ReactTooltip id="tooltip-0" place="left" content={user?.displayName}></ReactTooltip>
            <button onClick={handleLogout} className="btn">
              Logout
            </button>
          </div>
        ) : (
          <>
            <button className="btn">
              <Link to="/register">Register</Link>
            </button>
            <button className="btn ml-4">
              <Link to="/login">Login</Link>
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
