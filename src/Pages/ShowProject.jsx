import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Assests/School2.jpg'
const ShowProject = () => {
  return (
    <>
      <nav className="bg-gray-800 p-4 border-b-2 border-white shadow-inner shadow-white">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center mx-auto">
            <img src={Logo} alt="Logo" className="h-12 w-auto mr-3  rounded-full shadow-2xl shadow-white" />
            <span className="text-white text-3xl font-bold">My Projects</span>
          </div>
        </div>
      </nav>

      <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-gray-900 to-gray-700 text-white ">
        <h1 className="text-4xl font-bold mb-8 text-center">
          Welcome To My <span className="text-blue-400 font-serif">Auth0</span> and <span className="border-b-4 border-green-400 font-serif text-green-400">React Tanstack Query</span> Projects
        </h1>

        <h2 className="text-2xl font-semibold mb-4 text-center">
          Click <span className="text-blue-400">Auth0 </span> Or <span className="text-green-400">React Query </span> to see the Relevant Project
        </h2>

        <div className="space-x-4 mt-6">
          <Link to={'/Auth0'}>
            <button className="bg-blue-500 shadow-xl shadow-blue-300 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full transform hover:scale-105 transition-transform duration-300">
              Auth0
            </button>
          </Link>
          <Link to={'/React-queery'}>
            <button className="bg-green-500 shadow-2xl shadow-green-300 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-full transform hover:scale-105 transition-transform duration-300">
              React Query
            </button>
          </Link>
        </div>
      </div>

      <footer className="bg-gray-800 text-white p-4 mt-10">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 My Projects. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}

export default ShowProject
