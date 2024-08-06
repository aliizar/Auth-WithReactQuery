import React, {  } from "react";
import SchoolIcon from "../Assests/Schol.jpg";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch } from "react-redux";
const LandingNav = () => {
  const { loginWithRedirect, isAuthenticated, logout } = useAuth0();
  return (
    <>
      <nav className="bg-gray-800 shadow-lg py-4 border-b-2 border-white">
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
          <div className="flex items-center">
            <img src={SchoolIcon} alt="School Icon" className="h-10 mr-2" />
            <h1 className="text-2xl font-bold text-gray-100">
              School Management System
            </h1>
          </div>
          <div className="flex items-center space-x-12">
           
           
              {!isAuthenticated && <button
                onClick={() => {
                  loginWithRedirect();
                  console.log("Any thing");
                }}
                className="px-6 py-2 bg-transparent border-2 border-white text-white hover:blur-[1px] hover:text-red-500 hover:border-red-500 rounded transition duration-300"
              >
                Login
              </button>}
            
            {isAuthenticated && (
              <button
                onClick={() =>
                  logout({ logoutParams: { returnTo: window.location.origin } })
                }
                className="px-6 py-2 bg-transparent border-2 border-white text-white hover:blur-[1px] hover:text-red-500 hover:border-red-500 rounded transition duration-300"
              >
                Log out
              </button>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default LandingNav;
