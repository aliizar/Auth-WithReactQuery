import React from 'react'
import { Outlet } from 'react-router-dom'

import Logo from '../Assests/School2.jpg';

const QueeryData = () => {
  return (
    <div>
      <nav className="bg-gray-800 p-4 shadow-inner shadow-white">
        <div className="container mx-auto flex justify-center items-center">
          <img src={Logo} alt="Logo" className="h-12 w-auto mr-3 rounded-full shadow-2xl shadow-white" />
          <span className="text-white text-3xl font-bold">React Query Project</span>
        </div>
      </nav>
      <Outlet/>
    </div>
  )
}

export default QueeryData
