import React from "react";
import BackImg from "../Assests/School2.jpg";
import "../CSS-Files/LandingPage.css";
import { useAuth0 } from "@auth0/auth0-react";
import Features from "../Components-Auth0/Features";
import LandingNav from "../Components-Auth0/LandingNav";
import { Link } from "react-router-dom";
const LandingPage = () => {
  const { loginWithRedirect,   isAuthenticated } = useAuth0();
  return (
    <div className="bg-slate-900 min-h-screen flex flex-col">
      <LandingNav />
     
      <header
        className="bg-cover bg-center text-white mt-11 py-20"
        style={{
          backgroundImage: `url(${BackImg})`,
        }}
      >
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Welcome to Our School Management System
          </h1>
          <p className="text-xl mb-8">
            Streamline your school's operations with our comprehensive
            management solution.
          </p>
          <div className="space-x-4">
            <Link to="/get-start">
              <button className="px-6 py-2 bg-transparent border-2 border-white text-white  hover:blur-[1px] rounded transition duration-300">
                Get Started
              </button>
            </Link>
            <button className="px-6 py-2 bg-transparent border-2 border-white text-white  hover:blur-[1px] rounded transition duration-300">
              Learn More
            </button>
          </div>
        </div>
      </header>
      <Features />

      <section className="bg-slate-800 py-12 border-y-2 border-white">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h2 className="text-4xl font-bold text-white mb-6 font-sans">
            Benefits
          </h2>
          <div className="flex flex-wrap justify-center">
            <div className="w-full md:w-1/3 p-4">
              <div className=" p-6 rounded-lg border-2 hover:blur-[1px] border-white shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-white">
                  Efficiency
                </h3>
                <p className="text-white">
                  Automate administrative tasks to save time and reduce errors.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/3 p-4 ">
              <div className=" p-6 border-2 border-white hover:blur-[1px] rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-white">
                  Collaboration
                </h3>
                <p className="text-white">
                  Enhance communication between teachers, students, and parents.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/3 p-4 ">
              <div className=" p-6 border-2 border-white hover:blur-[1px] rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-white">
                  Analytics
                </h3>
                <p className="text-white">
                  Gain insights into student performance and make data-driven
                  decisions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container mx-auto px-6 md:px-12 py-12 border-b-2 border-white">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-100">Testimonials</h2>
          <p className="text-gray-200 mt-4">
            Hear what our users have to say about our system.
          </p>
        </div>
        <div className="flex flex-wrap justify-center">
          <div className="w-full md:w-1/3 p-4">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <p className="text-gray-800">
                "This system has transformed the way we manage our school. It's
                user-friendly and incredibly efficient."
              </p>
              <p className="mt-4 text-gray-600">- Principal John Doe</p>
            </div>
          </div>
          <div className="w-full md:w-1/3 p-4">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <p className="text-gray-800">
                "As a teacher, I appreciate how easy it is to track student
                progress and communicate with parents."
              </p>
              <p className="mt-4 text-gray-600">- Ms. Jane Smith</p>
            </div>
          </div>
          <div className="w-full md:w-1/3 p-4">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <p className="text-gray-800">
                "The parent portal keeps me informed about my child's
                performance and school events."
              </p>
              <p className="mt-4 text-gray-600">- Mrs. Mary Johnson</p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-800 py-12">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-gray-300 mb-8">
            Join thousands of schools using our management system to improve
            their operations and outcomes.
          </p>
          <button
            disabled={isAuthenticated}
            onClick={() => loginWithRedirect()}
            className="px-6 py-2 bg-transparent border-2 border-white text-white  hover:blur-[1px] rounded transition duration-300"
          >
            Sign up Now
          </button>
        </div>
      </section>


      <footer className="bg-slate-900 border-y-2  border-white text-white py-6">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <p className="text-sm">
            &copy; 2024 School Management System. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
