'use client'
import React, { useState } from 'react';

export default function Home() {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => setShowPopup(!showPopup);

  return (
    <div className="font-sans antialiased">
      {/* Navbar */}
      <nav className="bg-gray-900 text-white py-4 px-6 shadow-lg fixed top-0 inset-x-0 z-10">
        <div className="container mx-auto flex items-center justify-between">
          <h1 className="text-3xl font-bold">Car Shop</h1>
          <ul className="flex space-x-6">
            <li><a href="#home" className="hover:text-gray-400">Home</a></li>
            <li><a href="#models" className="hover:text-gray-400">Models</a></li>
            <li><a href="#contact" className="hover:text-gray-400">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative h-screen bg-cover bg-center text-white flex flex-col items-center justify-center"
        style={{ backgroundImage: 'url("https://img.freepik.com/premium-photo/modern-automobile-classic-technology-wheel-traffic_665346-119.jpg")' }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative z-10 text-center px-6">
          <h2 className="text-5xl font-extrabold mb-6">Find Your Dream Car</h2>
          <p className="text-lg mb-8">Explore our exclusive collection of premium cars and book a test drive.</p>
          <button
            className="border border-white text-white py-3 px-6 rounded-lg shadow-lg hover:bg-white hover:text-black"
            onClick={togglePopup}
          >
            Book a Test Drive
          </button>
        </div>

        {/* Popup Form */}
        {showPopup && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
              <h3 className="text-xl font-semibold mb-4 text-gray-700">Book a Test Drive</h3>
              <form className="text-gray-600">
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-lg p-3"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full border border-gray-300 rounded-lg p-3"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-2">Phone</label>
                  <input
                    type="tel"
                    className="w-full border border-gray-300 rounded-lg p-3"
                    required
                  />
                </div>
                <div className="flex justify-end gap-2">
                  <button
                    type="submit"
                    className="border borde-white  text-gray-800 py-2 px-4 rounded-lg hover:font-semibold"
                  >
                    Submit
                  </button>
                  <button
                    type="button"
                    className="bg-gray-600 hover:bg-gray-700 text-white py-2 px-4 rounded-lg"
                    onClick={togglePopup}
                  >
                    Close
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </section>

      {/* Models Section */}
      <section id="models" className="py-16 px-6 bg-gray-50">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-600">Our Models</h2>
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {[
            {
              image: 'https://img.freepik.com/free-photo/3d-car-with-minimal-background_23-2150797010.jpg?t=st=1724571420~exp=1724575020~hmac=7c9fa656cb347f5026f997f25508c536a0e662b502b1cb329d1e4749446396fb&w=740',
              title: 'Mahindra Erangs',
              description: 'An elegant and powerful vehicle perfect for your needs.',
            },
            {
              image: 'https://img.freepik.com/free-photo/white-sport-car-with-black-autotuning-driving-with-high-speed-road_114579-4072.jpg?t=st=1724571503~exp=1724575103~hmac=7d862e2cb29311a856dd8e0cfc3d20cc35d49acc7c5c082be1d45bc34e072ec4&w=1060',
              title: 'Porsche Sports',
              description: 'Experience the thrill with our top-of-the-line sports car.',
            },
            {
              image: 'https://img.freepik.com/free-photo/sports-car-driving-asphalt-road-night-generative-ai_188544-8052.jpg?t=st=1724571584~exp=1724575184~hmac=fb5aee4f1597281c03653ad5b92279aa72ba74f15f3249fce707e832adfe4c27&w=1060',
              title: 'Lamborghini 891w',
              description: 'A masterpiece of speed and luxury combined.',
            },
            {
              image: 'https://img.freepik.com/free-photo/yellow-car-gas-station_23-2150697544.jpg?t=st=1724571640~exp=1724575240~hmac=25a3feb3190994904cc8b9415a9b0bf7e24376bb4bb9fab9cd424c32bde234b0&w=1060',
              title: 'Toyota Gas',
              description: 'Reliable and efficient, designed for everyday adventures.',
            }
          ].map((car, index) => (
            <div key={index} className="bg-white border border-gray-300 rounded-lg shadow-md w-full">
              <img
                src={car.image}
                alt={car.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h3 className="text-2xl font-semibold mb-2 ">{car.title}</h3>
                <p className="text-gray-600 mb-4">{car.description}</p>
                <button className="bg-gray-700 hover:bg-gray-800 text-white py-2 px-4 rounded-lg">
                  More Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Contact Us</h2>
        <div className="container mx-auto max-w-lg">
          <form className="bg-white p-8 rounded-lg shadow-md">
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg p-3"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                className="w-full border border-gray-300 rounded-lg p-3"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea
                rows="4"
                className="w-full border border-gray-300 rounded-lg p-3"
                required
              ></textarea>
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-gray-600 hover:bg-gray-700 text-white py-2 px-6 rounded-lg"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6 px-4 text-center">
        <p>&copy; 2024 Car Shop. All rights reserved.</p>
      </footer>
    </div>
  );
}
