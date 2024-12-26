import React from "react";
import { NavLink } from "react-router-dom";
import bio from "../assets/bio.png"
import horr from "../assets/horr.png"
import kids from "../assets/kids.gif"
import sci from "../assets/sci.png"

const BookCategories = () => {
  return (
    <div className="w-10/12 mx-auto mt-8">
        <div>
            <h2 className="font-semibold text-3xl text-center">Book Categories</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-8">
      <NavLink to="/category/Thriller">
        <div className="card bg-blue-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title ">
            Category 1 <img className="size-10" src={bio} alt="" />
            </h2>
            <h2 className="card-title ">
            Thriller 
            </h2>
            <p className="">Explore Books</p>
          </div>
        </div>
      </NavLink>
      <NavLink to="/category/Novel">
        <div className="card bg-cyan-100  shadow-xl">
          <div className="card-body">
            <h2 className="card-title ">
            Category 2 <img className="size-10" src={horr} alt="" />
            </h2>
            <h2 className="card-title ">
            Novel
            </h2>
            <p className="">Explore Books</p>
          </div>
        </div>
      </NavLink>
      <NavLink to="/category/Sci-Fi">
        <div className="card shadow-xl">
          <div className="card-body">
            <h2 className="card-title ">
            Category 3 <img className="size-10" src={sci} alt="" />
            </h2>
            <h2 className="card-title ">
            Science Fiction
            </h2>
            <p className="">Explore Books</p>
          </div>
        </div>
      </NavLink>
      <NavLink to="/category/History">
        <div className="card  shadow-xl">
          <div className="card-body">
            <h2 className="card-title ">
            Category 4 <img className="size-10" src={kids} alt="" />
            </h2>
            <h2 className="card-title ">
            History
            </h2>
            <p className="">Explore Books</p>
          </div>
        </div>
      </NavLink>
     </div>
    </div>
    
  );
};

export default BookCategories;
