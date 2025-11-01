import React from "react";
import { Link } from "react-router-dom";

const Book = ({ singleBook }) => {
  const {
    bookName,
    author,
    image,
    category,
    tags,
    yearOfPublishing,
    rating,
    bookId,
  } = singleBook || {};

  if (!singleBook) {
    return (
      <div className="card bg-base-100 w-full shadow-sm animate-pulse border">
        <div className="aspect-[3/4] w-full bg-base-200" />
        <div className="card-body">
          <div className="h-6 w-2/3 bg-base-200 rounded" />
          <div className="h-4 w-1/2 bg-base-200 rounded" />
        </div>
      </div>
    );
  }

  return (
    <Link
      to={`/bookDetails/${bookId}`}
      className="group block h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 rounded-xl"
      aria-label={`View details for ${bookName}`}
    >
      <div className="card bg-base-100 w-full h-full border shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden rounded-xl">
        <figure className="aspect-[3/4] overflow-hidden bg-base-200">
          <img
            src={image}
            alt={bookName || "Book cover"}
            className="h-full w-full object-cover transition-transform duration-200 group-hover:scale-105"
            loading="lazy"
          />
        </figure>
        <div className="card-body gap-2">
          <h2 className="card-title text-base sm:text-lg leading-snug">
            {bookName}
          </h2>
          <p className="text-sm text-base-content/70">
            {author}
            {yearOfPublishing ? ` • ${yearOfPublishing}` : ""}
          </p>
          <div className="mt-2 flex flex-wrap items-center justify-between gap-2">
            <div className="flex flex-wrap gap-2">
              {category ? (
                <div className="badge badge-outline">{category}</div>
              ) : null}
              {Array.isArray(tags) &&
                tags.slice(0, 2).map((t) => (
                  <div key={t} className="badge badge-outline">
                    {t}
                  </div>
                ))}
            </div>
            {rating ? (
              <div
                className="badge badge-outline gap-1"
                title={`${rating} out of 5`}
                aria-label={`Rating ${rating} out of 5`}
              >
                <span className="flex items-center text-yellow-500">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i}>
                      {i < Math.round(Number(rating)) ? "★" : "☆"}
                    </span>
                  ))}
                </span>
                <span className="ml-1">{rating}</span>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
