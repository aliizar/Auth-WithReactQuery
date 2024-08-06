import React from 'react'
import Students from "../Assests/Students.webp";
import Teachers from "../Assests/Teachers.jpg";
import Parents from "../Assests/Parent.jpg";
import { Link } from 'react-router-dom'
const Features = () => {
 
  return (
    <>
      <section className="container mx-auto px-6 md:px-12 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-100">Features</h2>
          <p className="text-gray-200 mt-4">
            Explore the powerful features that make our system the best choice
            for your school.
          </p>
        </div>
        <div className="flex flex-wrap justify-center">
          <div className="w-full md:w-1/3 p-4">
          <Link to='/student'>
            <div
              className="bg-white p-6 rounded-lg shadow-lg text-center feature-card"
              style={{
                backgroundImage: `url(${Students})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <h3 className="text-2xl font-bold text-white mb-4">
                Student Management
              </h3>
              <p className="text-gray-200">
                Easily manage student records, attendance, grades, and more.
              </p>
            </div>
            </Link>
          </div>
          <div className="w-full md:w-1/3 p-4">
          <Link to='/teacher'>
          
          
            <div
              className="bg-white p-6 rounded-lg shadow-lg text-center feature-card"
              style={{
                backgroundImage: `url(${Teachers})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <h3 className="text-2xl font-bold text-white mb-4">
                Teacher Management
              </h3>
              <p className="text-gray-200">
                Track teacher performance, schedules, and professional
                development.
              </p>
            </div>
          
          
          </Link>
          </div>
          <div className="w-full md:w-1/3 p-4">
          <Link to='/parent'>
          
            <div
              className="bg-white p-6 rounded-lg shadow-lg text-center feature-card"
              style={{
                backgroundImage: `url(${Parents})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <h3 className="text-2xl font-bold text-white mb-4">
                Parent Portal
              </h3>
              <p className="text-gray-200">
                Keep parents informed and engaged with real-time updates.
              </p>
            </div>
          
          
          </Link>
          </div>
        </div>
      </section>

    </>
  )
}

export default Features
