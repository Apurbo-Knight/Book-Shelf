import React from "react";
import { useLoaderData } from "react-router-dom";
import BookCard from "./bookCard";
import { Helmet } from "react-helmet-async";

const AllBooks = () => {
  const allBooks = useLoaderData();
  // console.log(allBooks);
  return (
    <div>
      <Helmet>
        <title>Next Chapter | All Books</title>
      </Helmet>
      <h2 className="text-center font-bold text-3xl text-blue-500 my-8">
        All Books
      </h2>
      <div className="w-10/12  mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 p-10">
        {allBooks.map((book) => (
          <BookCard key={book._id} book={book}></BookCard>
        ))}
      </div>
    </div>
  );
};

export default AllBooks;
