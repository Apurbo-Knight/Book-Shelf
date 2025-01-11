import React from "react";
import { NavLink } from "react-router-dom";
import ReactStars from "react-rating-stars-component";

const CategoryCard = ({ book }) => {
    const {_id,
        image,
        name,
        quantity,
        authorName,
        category,
        shortDescription,
        rating,
        bookContent,
        email
    }=book
  return (
    <div className="card bg-base-100 shadow-xl ">
      <figure>
        <img className="h-96" src={image} alt="book" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Title: {name}</h2>
        <p><span className="font-semibold">Author Name:</span> {authorName}</p>
        <p><span className="font-semibold">Category:</span> {category}</p>
        <p><span className="font-semibold">Quantity:</span> {quantity}</p>
        <p className="flex items-center gap-1">
                  
                  <span className="font-semibold">Rating:</span>
                  <ReactStars
                    count={5}
                    value={book.rating}
                    size={24}
                    isHalf={true}
                    activeColor="#ffd700"
                  />
                  <span>({book.rating}/5)</span>
                </p>
        <div className="card-actions ">
          <NavLink to={`/details/${_id}`}><button  className="btn  bg-blue-500 text-white">Details</button></NavLink>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
