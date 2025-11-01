import React from "react";
import { createBrowserRouter, redirect } from "react-router-dom";
import Root from "../pages/Root/Root.jsx";
import ErrorPage from "../pages/ErrorPage/ErrorPage.jsx";
import Home from "../pages/Home/Home.jsx";
import booksData from "../../data/booksData.json";
import About from "../pages/About/About.jsx";
import BookDetails from "../pages/BookDetails/BookDetails.jsx";
import ReadList from "../pages/ReadList/ReadList.jsx";
export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,

        loader: async () => booksData,
        Component: Home,
      },
      {
        path: "/Home",
        loader: () => redirect("/"),
      },
      {
        path: "/about",
        Component: About,
      },
      {
        path: "readList",
        loader: async () => booksData,
        Component: ReadList,
      },
      {
        path: "/bookDetails/:bookId",
        loader: async () => booksData,
        Component: BookDetails,
      },
    ],
  },
]);
