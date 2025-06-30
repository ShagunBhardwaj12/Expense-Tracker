import React from 'react';
import DashboardLayout from '../../components/layouts/DashboardLayout';
import { FiPlus } from 'react-icons/fi';

const Income = () => {
  const income = [
    { id: 1, source: 'Salary', amount: 2500.00, date: '2023-06-01', description: 'Monthly salary' },
    { id: 2, source: 'Freelance', amount: 350.00, date: '2023-06-10', description: 'Web design project' },
    { id: 3, source: 'Investment', amount: 120.50, date: '2023-06-05', description: 'Stock dividends' },
  ];

  return (
    <DashboardLayout activeMenu="income">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">Income</h1>
          <button className="flex items-center bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700">
            <FiPlus className="mr-2" />
            Add Income
          </button>
        </div>

        <div className="bg-white rounded-lg shadow overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Source</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {income.map((item) => (
                <tr key={item.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.source}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.description}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600 font-medium">+${item.amount.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Income;