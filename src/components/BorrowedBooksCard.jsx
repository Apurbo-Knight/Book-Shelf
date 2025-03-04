import React from "react";
import Swal from "sweetalert2";
import ReactStars from "react-rating-stars-component";

const BorrowedBooksCard = ({ borrowedBook }) => {
  // console.log(borrowedBook);
  const { _id, image, title, authorName, category, rating, Bdate, Rdate } =
    borrowedBook;
  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, return it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://assignment-11-server-nu-eight.vercel.app/borrowedBooks/${_id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Returned!",
                text: "Book Returned Successfully.",
                icon: "success",
              });
            }
          });
        // console.log('delete confirm');
      }
    });
  };
  return (
    <div className="card bg-base-100 shadow-xl ">
      <figure>
        <img className="h-96" src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Title: {title}</h2>
        <p>
          <span className="font-semibold">Author Name:</span> {authorName}
        </p>
        <p>
          <span className="font-semibold">Category:</span> {category}
        </p>
        <p className="flex items-center gap-1">
          <ReactStars
            count={5}
            value={rating}
            size={24}
            isHalf={true}
            activeColor="#ffd700"
          />
          <span>({rating}/5)</span>
        </p>
        <p>
          <span className="font-semibold">Borrowed Date:</span> {Bdate}
        </p>
        <p>
          <span className="font-semibold">Return Date:</span> {Rdate}{" "}
        </p>
        <div className="card-actions ">
          <button
            onClick={() => handleDelete(_id)}
            className="btn bg-blue-500 text-white"
          >
            Return
          </button>
        </div>
      </div>
    </div>
  );
};

export default BorrowedBooksCard;
