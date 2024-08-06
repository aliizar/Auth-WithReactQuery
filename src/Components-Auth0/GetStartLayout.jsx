import React from "react";
import Navbar from "../Components-Auth0/Navbar";
import SchoolImage from "../Assests/Schol.jpg";
import Features from "../Components-Auth0/Features";
import { Outlet } from "react-router-dom";

const GetStartLayout = () => {
  return (
    <>
       <Navbar />
      <div className="bg-gray-900 min-h-screen flex flex-col items-center justify-center text-center">
        <img
          src={SchoolImage}
          alt="School Image"
          className="mt-12 mb-8 rounded-lg shadow-lg"
          style={{ maxWidth: "80%", maxHeight: "30vh", objectFit: "cover" }}
        />
        <h1 className="text-5xl font-bold text-white mb-4">
          Welcome to the School Management System
        </h1>
        <p className="text-xl text-gray-300 mb-12">
          Please select your role to get started:
        </p>
        <div className=" relative bottom-20">
          <Outlet></Outlet>
        </div>
      </div>
      <footer className="bg-gray-800 py-4 text-white text-center">
        <p className="text-sm">
          &copy; 2024 School Management System. All rights reserved.
        </p>
      </footer>
    </>
  )
}

export default GetStartLayout
