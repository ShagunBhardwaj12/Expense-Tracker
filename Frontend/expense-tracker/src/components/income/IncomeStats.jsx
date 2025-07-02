import React from 'react';
import { FiDollarSign, FiTrendingUp, FiCalendar } from 'react-icons/fi';

const IncomeStats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <div className="flex justify-between">
          <div>
            <p className="text-sm text-gray-500">Total Income</p>
            <p className="text-2xl font-semibold">$2,970.50</p>
          </div>
          <div className="p-3 rounded-full bg-green-100 text-green-600">
            <FiDollarSign size={20} />
          </div>
        </div>
        <p className="text-xs text-green-500 mt-2 flex items-center">
          <FiTrendingUp className="mr-1" /> 15% from last month
        </p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <div className="flex justify-between">
          <div>
            <p className="text-sm text-gray-500">Average Monthly</p>
            <p className="text-2xl font-semibold">$2,850.00</p>
          </div>
          <div className="p-3 rounded-full bg-blue-100 text-blue-600">
            <FiCalendar size={20} />
          </div>
        </div>
        <p className="text-xs text-blue-500 mt-2 flex items-center">
          Consistent for 3 months
        </p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <div className="flex justify-between">
          <div>
            <p className="text-sm text-gray-500">Income Sources</p>
            <p className="text-2xl font-semibold">3 Active</p>
          </div>
          <div className="p-3 rounded-full bg-purple-100 text-purple-600">
            <FiTrendingUp size={20} />
          </div>
        </div>
        <p className="text-xs text-purple-500 mt-2">
          Salary, Freelance, Investments
        </p>
      </div>
    </div>
  );
};

export default IncomeStats;