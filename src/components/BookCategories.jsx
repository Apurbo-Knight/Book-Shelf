import React from "react";
import { NavLink } from "react-router-dom";
import bio from "../assets/bio.png";
import horr from "../assets/horr.png";
import kids from "../assets/kids.gif";
import sci from "../assets/sci.png";

const BookCategories = () => {
  return (
    <div className="w-10/12 mx-auto ">
      <div>
        <h2 className="font-bold text-blue-500 text-3xl text-center py-10 mb-3">
          Book Categories
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 pb-10">
        <NavLink to="/category/Thriller">
          <div className="card bg-blue-100 hover:bg-blue-200 duration-200 border border-blue-500  shadow-xl">
            <div className="card-body">
              <h2 className="card-title ">
                Category 1 <img className="size-10" src={bio} alt="" />
              </h2>
              <h2 className="card-title ">Thriller</h2>
              <p className="">Explore Books</p>
            </div>
          </div>
        </NavLink>
        <NavLink to="/category/Novel">
          <div className="card bg-cyan-100 hover:bg-cyan-200 duration-200 border border-cyan-500 shadow-xl">
            <div className="card-body">
              <h2 className="card-title ">
                Category 2 <img className="size-10" src={horr} alt="" />
              </h2>
              <h2 className="card-title ">Novel</h2>
              <p className="">Explore Books</p>
            </div>
          </div>
        </NavLink>
        <NavLink to="/category/Sci-Fi">
          <div className="card bg-green-100 hover:bg-green-200 duration-200 border border-green-500 shadow-xl">
            <div className="card-body">
              <h2 className="card-title ">
                Category 3 <img className="size-10" src={sci} alt="" />
              </h2>
              <h2 className="card-title ">Science Fiction</h2>
              <p className="">Explore Books</p>
            </div>
          </div>
        </NavLink>
        <NavLink to="/category/History">
          <div className="card bg-yellow-100 hover:bg-yellow-200 duration-200 border border-yellow-400 shadow-xl">
            <div className="card-body">
              <h2 className="card-title ">
                Category 4 <img className="size-10" src={kids} alt="" />
              </h2>
              <h2 className="card-title ">History</h2>
              <p className="">Explore Books</p>
            </div>
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default BookCategories;
