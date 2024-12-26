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
    <div className="card bg-base-100 shadow-xl ">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Title: {name}</h2>
        <p>Author Name: {authorName}</p>
        <p>Category: {category}</p>
        <p className="flex items-center gap-1">
          
          Rating:
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
            <button className="btn ">Update</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
