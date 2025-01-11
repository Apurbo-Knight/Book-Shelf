import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Modal from "./Modal";
import { Helmet } from "react-helmet-async";


const Details = () => {
  const book = useLoaderData();

  const [currentQuantity, setCurrentQuantity] = useState(book.quantity);

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
  } = book;

  const handleBorrow = async () => {
    if (currentQuantity <= 0) {
      alert("No copies left to borrow.");
      return;
    }

    // try {
    //   const response = await fetch(`/books/${_id}/decrementQuantity`, {
    //     method: "PATCH",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   });

    //   if (response.ok) {
    //     // Update the local quantity state
    //     setCurrentQuantity((prev) => prev - 1);
    //     alert("Book borrowed successfully!");
    //   } else {
    //     const result = await response.json();
    //     alert(result.error || "Failed to borrow the book.");
    //   }
    // }
    //  catch (error) {
    //   console.error("Error borrowing book:", error);
    //   alert("An error occurred. Please try again.");
    // }
  };

  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <Helmet>
        <title> Details of {name} | Next Chapter </title>
      </Helmet>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md space-y-3 font-semibold">
          <h1 className="mb-5 text-5xl font-bold">Title: {name}</h1>
          <p>Author Name: {authorName}</p>
          <p>Category: {category}</p>
          <p>Quantity: {quantity}</p>
          <p>Rating: {rating}</p>
          <p>Book Content: {bookContent}</p>
          <p>Short Description: {shortDescription}</p>
          <button
            onClick={() => {document.getElementById("my_modal_5").showModal(); handleBorrow()}}
            disabled={currentQuantity <= 0}
            className="btn bg-blue-500"
          >
            Borrow
          </button>
        </div>
      </div>
      <Modal book={book}></Modal>
    </div>
  );
};

export default Details;
