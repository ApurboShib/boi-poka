import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { get_stored_book } from "../../utilities/AddtoDB";
import Book from "../../pages/Book/Book.jsx";

const ReadList = () => {
  const [readList, setReadList] = useState([]);
  const data = useLoaderData();
  console.log(data);

  useEffect(() => {
    const storedBookdata = get_stored_book();
    const convertedStoredBook = storedBookdata.map((id) => parseInt(id));
    // console.log(convertedStoredBook);
    const myReadList = data.filter((book) =>
      convertedStoredBook.includes(book.bookId)
    );
    setReadList(myReadList);
  }, [data]);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
          My Library
        </h1>
        <p className="mt-2 text-base-content/70">
          Track books you've finished and those you want to read next.
        </p>
      </div>

      <Tabs>
        <TabList className="inline-flex gap-2 bg-base-200 p-1 rounded-xl mx-auto mb-6">
          <Tab
            className="px-4 py-2 rounded-lg text-sm font-medium text-base-content/70 cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30"
            selectedClassName="bg-primary text-primary-content shadow"
          >
            Read Books
          </Tab>
          <Tab
            className="px-4 py-2 rounded-lg text-sm font-medium text-base-content/70 cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30"
            selectedClassName="bg-primary text-primary-content shadow"
          >
            Wishlist
          </Tab>
        </TabList>

        <TabPanel>
          <div className="flex items-center justify-between gap-3 mb-4">
            <h2 className="text-lg font-semibold">
              Read Books:{" "}
              <span className="text-primary">{readList.length}</span>
            </h2>
          </div>

          {readList.length === 0 ? (
            <div className="rounded-2xl border border-dashed p-10 text-center bg-base-100">
              <div className="text-4xl mb-3">📚</div>
              <p className="font-medium">Your read list is empty</p>
              <p className="text-base-content/70">
                Start exploring and add books to your list.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {readList.map((b) => (
                <Book key={b.bookId} singleBook={b} />
              ))}
            </div>
          )}
        </TabPanel>

        <TabPanel>
          <div className="rounded-2xl border border-dashed p-10 text-center bg-base-100">
            <div className="text-4xl mb-3">⭐</div>
            <p className="font-medium">Wishlist coming soon</p>
            <p className="text-base-content/70">
              Save books you want to read next.
            </p>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ReadList;
