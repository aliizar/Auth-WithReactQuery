import React from "react";
import Navbar from "../Components-Auth0/Navbar";
import Students from "../Assests/Students.webp";
import { useSelector } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import { ArrowLeftIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
const StudentPortal = () => {
  const { user, isAuthenticated } = useAuth0();
  const Category = useSelector((store) => store.Category.type);

  return (
    <>
      <Navbar />
      <div
        className="relative min-h-screen flex flex-col text-white"
        style={{
          backgroundImage: `url(${Students})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>

        <div className="relative container mx-auto px-6 md:px-12 py-12">
          <Link to="/get-start">
          <div className="relative  bottom-8 right-16">
            <button className="flex space-x-4 px-10 rounded-xl py-2 bg-red-700 border-2 border-white text-white hover:blur-[1px]   transition duration-300">
              <div>
              <ArrowLeftIcon style={{
                marginTop : '2px'
              }}/>
              <ArrowLeftIcon style={{
                marginTop : '7px'
              }}/>

              </div>
              <p className="mt-[1px]">Back</p> 
            </button>
          </div></Link>
          <div className="bg-gray-800 bg-opacity-80 p-8 rounded-lg shadow-lg mb-12 text-center">
            <h2 className="text-4xl font-bold mb-4">
              Welcome to the Student Portal
            </h2>
            <p className="text-xl mb-4">
              Here you can manage your academic records, view your grades, and
              more.
            </p>
            {Category !== "Select user" && isAuthenticated && (
              <p className="text-lg italic">
                Welcome, <span className="font-semibold">{user.name}</span>! You
                are authenticated as a{" "}
                <span className="font-semibold">{Category}</span>.
              </p>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Academic Records",
                description:
                  "View and manage your academic records, including transcripts and course history.",
              },
              {
                title: "Grades",
                description: "Check your grades for current and past courses.",
              },
              {
                title: "Class Schedule",
                description:
                  "View your current class schedule and upcoming classes.",
              },
              {
                title: "Assignments",
                description:
                  "Keep track of your assignments, due dates, and submission status.",
              },
              {
                title: "Messages",
                description:
                  "Communicate with your teachers and classmates through the messaging system.",
              },
              {
                title: "Resources",
                description:
                  "Access learning resources, course materials, and other educational tools.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gray-900 bg-opacity-75 p-6 rounded-lg shadow-lg"
              >
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <footer className="relative bg-gray-900 bg-opacity-75 text-white py-6 mt-auto">
          <div className="container mx-auto px-6 md:px-12 text-center">
            <p className="text-sm">
              &copy; 2024 School Management System. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default StudentPortal;
