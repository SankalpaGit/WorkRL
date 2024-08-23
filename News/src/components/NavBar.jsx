import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="bg-gray-800 fixed w-full top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-bold">
          NewsApp
        </Link>
        <div className="space-x-4">
          <Link to="/" className="text-white hover:text-gray-300">
            Home
          </Link>
          {/* Add other navigation links here */}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
