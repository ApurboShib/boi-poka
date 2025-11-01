import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { Add_to_store_DB } from "../../utilities/AddtoDB";


const BookDetails = () => {
  const { bookId } = useParams();
  //   console.log("The book id is : ", bookId);
  const data = useLoaderData();
  // console.log(data);
  const id = parseInt(bookId);
  const list = Array.isArray(data) ? data : [];
  const singleBook = list.find((book) => Number(book.bookId) === id);
    // console.log("Single book details: ", singleBook);
    
    const handleMarkRead = (id) => {
        // store the book id. but where??
        // -----> normally amra database eh rakhbo, but jeheto amader server nai amra local storage eh data ta rakhbo.
        // ekhon data kivabe rakhno (string, int)..?
        // --->> array or list wise rakhbo.
        // but store korrar aghe amadeke dekha lagbe je alrady aita store acher naki?? thakle show a alert.
        // if data not exit then push the collection or array

        Add_to_store_DB(id)
    }

    return (
      <div className="max-w-4xl mx-auto p-6">
        {!singleBook ? (
          <div className="text-center text-gray-500">
            <h1 className="text-2xl font-semibold">Book Not Found</h1>
            <p className="mt-2">We couldn't find a book with id {id}.</p>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 items-start">
            <div className="bg-gray-100 p-4 rounded">
              <img
                src={singleBook.image}
                alt={singleBook.bookName}
                className="w-full object-contain max-h-96"
              />
            </div>
            <div>
              <h1 className="text-3xl font-bold">{singleBook.bookName}</h1>
              <p className="mt-2 text-gray-600">
                {" "}
                <span className="font-medium">by:</span> {singleBook.author}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {singleBook.category && (
                  <span className="badge badge-outline">
                    {singleBook.category}
                  </span>
                )}
              </div>
              <div className="mb-5 py-5 ">
                {" "}
                {Array.isArray(singleBook.tags) &&
                  singleBook.tags.map((t) => (
                    <span key={t} className="badge badge-outline">
                      {t}
                    </span>
                  ))}
              </div>
              <div className="mt-4 text-sm text-gray-700 space-y-1">
                {singleBook.yearOfPublishing && (
                  <p>
                    <span className="font-medium ">Published:</span>{" "}
                    {singleBook.yearOfPublishing}
                  </p>
                )}
                {singleBook.totalPages && (
                  <p>
                    <span className="font-medium">Pages:</span>{" "}
                    {singleBook.totalPages}
                  </p>
                )}
                {singleBook.publisher && (
                  <p>
                    <span className="font-medium">Publisher:</span>{" "}
                    {singleBook.publisher}
                  </p>
                )}
                {singleBook.rating && (
                  <p>
                    <span className="font-medium">Rating:</span>{" "}
                    {singleBook.rating}
                  </p>
                )}
              </div>
              {singleBook.review && (
                <div className="mt-6">
                  <h2 className="text-xl font-semibold mb-2">Review</h2>
                  <p className="leading-relaxed text-gray-800">
                    {singleBook.review}
                  </p>
                </div>
              )}
              <div className="mt-6 flex items-center gap-3">
                <button
                  onClick={() => handleMarkRead(singleBook.bookId)}
                  className="btn btn-info"
                >
                  Mark to read
                </button>
                <button className="btn btn-success">Add to wishlist</button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
};

export default BookDetails;
