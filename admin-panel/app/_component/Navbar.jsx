'use client'

import { CgProfile } from "react-icons/cg";
import { IoNotifications } from "react-icons/io5";

const Navbar = () => {
  
  return (
    <nav className="flex justify-between items-center p-4 bg-gray-800 text-white">
      {/* Hamburger Menu */}
      <div className="flex items-center space-x-4">
        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search..."
          className="p-2 bg-gray-700 text-white rounded-md focus:outline-none"
        />
      </div>

      {/* Notification and Profile Icons */}
      <div className="flex items-center space-x-10  ">
        <button className="focus:outline-none text-2xl"><IoNotifications /></button>
        <button className="focus:outline-none text-2xl"><CgProfile /></button>
      </div>
    </nav>
  );
};

export default Navbar;