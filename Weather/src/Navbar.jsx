import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-gray-800 p-4 w-full">
      <div className="flex items-center justify-between max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-white">WeatherNepal</h1>
        <div className="flex items-center">
          <Link to="/" className="text-white mx-4">Home</Link>
          <Link to="/global" className="text-white mx-4">Global</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
