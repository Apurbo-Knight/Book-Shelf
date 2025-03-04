import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link, NavLink } from "react-router-dom";

const BookCard = ({ book }) => {
  const {
    _id,
    image,
    name,
    quantity,
    authorName,
    category,
    shortDescription,
    rating,
    bookContent,
    email,
  } = book;
  return (
    <div className=" card bg-base-100 shadow-xl">
      <figure>
        <img className="h-96" src={image} alt="img"/>
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p><span className="font-semibold"></span> {authorName}</p>
        <p><span className="font-semibold"></span> {category}</p>
        <p className="flex items-center gap-1">
          
          
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
          <Link to={`/updateBooks/${_id}`}>
            <button className="btn bg-blue-500 text-white">Update</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
