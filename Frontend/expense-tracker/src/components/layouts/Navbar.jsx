import React from 'react';
import { Link } from 'react-router-dom';
import { FiHome, FiPieChart, FiDollarSign, FiSun } from 'react-icons/fi';

const Navbar = ({ activeMenu }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-sm z-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <FiDollarSign className="h-6 w-6 text-purple-600" />
              <span className="ml-2 text-xl font-bold text-gray-800">
                ExpenseTrack
              </span>
            </Link>
          </div>

          <div className="flex items-center">
            <button className="p-2 rounded-full text-gray-700 hover:bg-gray-100">
              <FiSun className="h-5 w-5" />
            </button>

            <div className="ml-4 flex items-center">
              <div className="h-8 w-8 rounded-full bg-purple-600 flex items-center justify-center text-white font-medium">
                U
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;