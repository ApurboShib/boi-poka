import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/Header/Navbar.jsx";
import Footer from "../../components/Footer/Footer.jsx";

const Root = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
