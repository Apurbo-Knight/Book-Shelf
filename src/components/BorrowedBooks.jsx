import React, { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import BorrowedBooksCard from "./BorrowedBooksCard";
import { Helmet } from "react-helmet-async";
import AuthContext from "../context/AuthContext";

const BorrowedBooks = () => {
  const {user}=useContext(AuthContext)
  const loadedBorrowedBooks = useLoaderData();
  // console.log(loadedBorrowedBooks);
  const presonalBorrowedBooks = loadedBorrowedBooks.filter(book=>book.email==user?.email)
  const [borrowedBooks, setBorrowedBooks] = useState(presonalBorrowedBooks);
  console.log(borrowedBooks);
  return (
    <div>
      <Helmet>
        <title>Next Chapter | Borrowed Books</title>
      </Helmet>
      <h2 className="text-center font-bold text-3xl text-blue-500 my-8">
        Borrowed Books
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 p-10">
        {borrowedBooks.map((borrowedBook) => (
          <BorrowedBooksCard
            key={borrowedBook._id}
            borrowedBooks={borrowedBooks}
            setBorrowedBooks={setBorrowedBooks}
            borrowedBook={borrowedBook}
          ></BorrowedBooksCard>
        ))}
      </div>
    </div>
  );
};

export default BorrowedBooks;
