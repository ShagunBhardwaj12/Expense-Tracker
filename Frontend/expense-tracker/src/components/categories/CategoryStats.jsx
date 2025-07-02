import React from 'react';
import { FiPieChart, FiDollarSign, FiTrendingDown } from 'react-icons/fi';

const CategoryStats = ({ totalCategories, totalBudget, avgBudget }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <div className="flex justify-between">
          <div>
            <p className="text-sm text-gray-500">Total Categories</p>
            <p className="text-2xl font-semibold">{totalCategories}</p>
          </div>
          <div className="p-3 rounded-full bg-purple-100 text-purple-600">
            <FiPieChart size={20} />
          </div>
        </div>
        <p className="text-xs text-purple-500 mt-2">
          Active expense categories
        </p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <div className="flex justify-between">
          <div>
            <p className="text-sm text-gray-500">Total Budget</p>
            <p className="text-2xl font-semibold">${totalBudget.toFixed(2)}</p>
          </div>
          <div className="p-3 rounded-full bg-blue-100 text-blue-600">
            <FiDollarSign size={20} />
          </div>
        </div>
        <p className="text-xs text-blue-500 mt-2 flex items-center">
          Across all categories
        </p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <div className="flex justify-between">
          <div>
            <p className="text-sm text-gray-500">Average Budget</p>
            <p className="text-2xl font-semibold">${avgBudget.toFixed(2)}</p>
          </div>
          <div className="p-3 rounded-full bg-green-100 text-green-600">
            <FiTrendingDown size={20} />
          </div>
        </div>
        <p className="text-xs text-green-500 mt-2">
          Per category
        </p>
      </div>
    </div>
  );
};

export default CategoryStats;