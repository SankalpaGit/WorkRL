'use client'

import { FaEdit, FaTrash } from 'react-icons/fa';
import { IoMdAddCircle } from "react-icons/io";


const page = () => {
  return (
    <div className="bg-white p-6 rounded shadow-md">
      <div className='flex justify-between items-center'>
        <h2 className="text-2xl font-bold mb-4">Borrowed Book</h2>
        <button className='bg-blue-700 text-white p-2 gap-x-2 rounded-md flex items-center text-center'><IoMdAddCircle />
        Issue Book</button>
      </div>
        <table className="min-w-full bg-white border-collapse mt-2">
          <thead>
            <tr className="bg-gray-700">
              <th className="py-2 px-4 border border-gray-300 text-center text-gray-200">ID</th>
              <th className="py-2 px-4 border border-gray-300 text-center text-gray-200">Book Title</th>
              <th className="py-2 px-4 border border-gray-300 text-center text-gray-200">ISBN</th>
              <th className="py-2 px-4 border border-gray-300 text-center text-gray-200">Borrowed by</th>
              <th className="py-2 px-4 border border-gray-300 text-center text-gray-200">Date of Borrowed</th>
              <th className="py-2 px-4 border border-gray-300 text-center text-gray-200">Quantity</th>
              <th className="py-2 px-4 border border-gray-300 text-center text-gray-200">Status</th>
              <th className="py-2 px-4 border border-gray-300 text-center text-gray-200">Action</th>
            </tr>
          </thead>
          <tbody className="bg-red-50">
            <tr>
              <td className="py-2 px-4 border border-gray-300 text-center">1</td>
              <td className="py-2 px-4 border border-gray-300 text-center">Spiderman Across the verse</td>
              <td className="py-2 px-4 border border-gray-300 text-center">594164965426</td>
              <td className="py-2 px-4 border border-gray-300 text-center">Sankalpa Shrestha</td>
              <td className="py-2 px-4 border border-gray-300 text-center">2023/03/12</td>
              <td className="py-2 px-4 border border-gray-300 text-center">1</td>
              <td className="py-2 px-4 border border-gray-300 text-center">Not Return</td>
              <td className="py-2 px-4 border border-gray-300 text-center">
                <div className="flex justify-center space-x-2">
                  <FaEdit className="text-blue-500 cursor-pointer" />
                  <FaTrash className="text-red-500 cursor-pointer" />
                </div>
              </td>
            </tr>
          </tbody>
        </table>

      </div>
  )
}

export default page
