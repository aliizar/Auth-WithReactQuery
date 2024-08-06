import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Assests/School2.jpg";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch } from "react-redux";
import { CategoryActions } from "../Actions/User";

const Navbar = () => {
  const { isAuthenticated, logout, loginWithRedirect } = useAuth0();
  const dispatch = useDispatch();

  const HandleType = (e) => {
    dispatch(CategoryActions.toggleCategory(e.target.value));
  };
  return (
    <nav className="bg-gray-800 p-4 flex justify-between items-center shadow-md border-b-2 border-white">
      <div className="flex items-center">
        <img src={Logo} alt="School Icon" className="h-10 mr-3" />
        <h1 className="text-2xl font-bold text-gray-100">
          School Management System
        </h1>
      </div>
      <ul className="flex space-x-8">
        <li>
          <Link
            to="/Auth0"
            className="text-white hover:text-gray-300 transition duration-300"
            activeclassname="border-b-2 border-white"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/student"
            className="text-white hover:text-gray-300 transition duration-300"
            activeclassname="border-b-2 border-white"
          >
            Student Portal
          </Link>
        </li>
        <li>
          <Link
            to="/teacher"
            className="text-white hover:text-gray-300 transition duration-300"
            activeclassname="border-b-2 border-white"
          >
            Teachers Portal
          </Link>
        </li>
        <li>
          <Link
            to="/parent"
            className="text-white hover:text-gray-300 transition duration-300"
            activeclassname="border-b-2 border-white"
          >
            Parents Review
          </Link>
        </li>
        <li>
        {isAuthenticated  && ( <select
              onChange={(e) => HandleType(e)}
              className="px-6 py-2    bg-transparent border-2 border-white text-white rounded transition duration-300"
            >
              <option className="bg-gray-800 text-white" value="">
                Select User
              </option>
              <option className="bg-gray-800 text-white" value="student">
                Student
              </option>
              <option className="bg-gray-800 text-white" value="teacher">
                Teacher
              </option>
            </select>)}
        </li>
      </ul>

      {isAuthenticated ? (
        <button
          onClick={() =>
            logout({ logoutParams: { returnTo: window.location.origin } })
          }
          className="px-6 py-2 bg-transparent border-2 border-white text-white hover:blur-[1px] hover:text-red-500 hover:border-red-500 rounded transition duration-300"
        >
          Logout
        </button>
      ) : (
        <button
          onClick={() => {
            loginWithRedirect();
          }}
          className="px-6 py-2 bg-transparent border-2 border-white text-white hover:blur-[1px] hover:text-red-500 hover:border-red-500 rounded transition duration-300"
        >
          Login
        </button>
      )}
    </nav>
  );
};

export default Navbar;
