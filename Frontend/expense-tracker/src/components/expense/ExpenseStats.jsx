import React from 'react';
import { FiDollarSign, FiTrendingDown, FiPieChart } from 'react-icons/fi';

const ExpenseStats = ({ totalExpense, avgExpense, categoryCount }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <div className="flex justify-between">
          <div>
            <p className="text-sm text-gray-500">Total Expenses</p>
            <p className="text-2xl font-semibold">${totalExpense.toFixed(2)}</p>
          </div>
          <div className="p-3 rounded-full bg-red-100 text-red-600">
            <FiDollarSign size={20} />
          </div>
        </div>
        <p className="text-xs text-red-500 mt-2 flex items-center">
          <FiTrendingDown className="mr-1" /> 8% from last month
        </p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <div className="flex justify-between">
          <div>
            <p className="text-sm text-gray-500">Average Daily</p>
            <p className="text-2xl font-semibold">${avgExpense.toFixed(2)}</p>
          </div>
          <div className="p-3 rounded-full bg-yellow-100 text-yellow-600">
            <FiTrendingDown size={20} />
          </div>
        </div>
        <p className="text-xs text-yellow-500 mt-2 flex items-center">
          ${(avgExpense * 30).toFixed(2)} monthly
        </p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <div className="flex justify-between">
          <div>
            <p className="text-sm text-gray-500">Categories Used</p>
            <p className="text-2xl font-semibold">{categoryCount}</p>
          </div>
          <div className="p-3 rounded-full bg-purple-100 text-purple-600">
            <FiPieChart size={20} />
          </div>
        </div>
        <p className="text-xs text-purple-500 mt-2">
          Across all transactions
        </p>
      </div>
    </div>
  );
};

export default ExpenseStats;