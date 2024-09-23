'use client'
import Link from 'next/link';
import { useState } from 'react';
import { FaHome, FaBook, FaInbox, FaGift, FaUsers, FaChartBar, FaCog, FaSignOutAlt } from 'react-icons/fa';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className={`flex ${isOpen ? 'w-64' : 'w-20'} h-screen bg-gray-800 text-white transition-width duration-300`}>
      <div className="flex flex-col w-full justify-between">
        <div>
          {/* Toggle Button */}
          <div className="flex items-center p-4">
            <button onClick={() => setIsOpen(!isOpen)} className='text-2xl'>
              {isOpen ? '☰' : '☰'}
            </button>
          </div>

          {/* Sidebar Items */}
          <nav className="flex flex-col space-y-4 p-4">
            <Link href="/">
              <div className="flex items-center space-x-4 text-xl">
                <FaHome />
                {isOpen && <span>Dashboard</span>}
              </div>
            </Link>
            <Link href="/books">
              <div className="flex items-center space-x-4 text-xl">
                <FaBook />
                {isOpen && <span>Books</span>}
              </div>
            </Link>
            <Link href="/borrow">
              <div className="flex items-center space-x-4 text-xl">
                <FaInbox />
                {isOpen && <span>Borrow</span>}
              </div>
            </Link>
            <Link href="/donation">
              <div className="flex items-center space-x-4 text-xl">
                <FaGift />
                {isOpen && <span>Donation</span>}
              </div>
            </Link>
            <Link href="/users">
              <div className="flex items-center space-x-4 text-xl">
                <FaUsers />
                {isOpen && <span>Users</span>}
              </div>
            </Link>
            <Link href="/reports">            
              <div className="flex items-center space-x-4 text-xl">
                <FaChartBar />
                {isOpen && <span>Reports</span>}
              </div>
            </Link>
          </nav>
        </div>

        {/* Settings and Logout */}
        <nav className="flex flex-col space-y-4 p-4">
          <div className="flex items-center space-x-4 text-xl">
            <FaCog />
            {isOpen && <span>Settings</span>}
          </div>
          <div className="flex items-center space-x-4 text-xl">
            <FaSignOutAlt />
            {isOpen && <span>Logout</span>}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
