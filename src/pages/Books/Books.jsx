import React from "react";
import Book from "../Book/Book.jsx";

const Books = ({ data }) => {
  const list = Array.isArray(data) ? data : [];
  return (
    <div>
      <h1 className="text-3xl text-center">Availables <span className="font-bold">Books</span></h1>
      {list.length === 0 ? (
        <p className="text-center text-gray-500">No books to display.</p>
      ) : (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((singleBook) => (
            <Book key={singleBook.bookId} singleBook={singleBook} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Books;
