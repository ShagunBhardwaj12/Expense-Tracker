import React from 'react';
import DashboardLayout from '../../components/layouts/DashboardLayout';
import { FiPlus } from 'react-icons/fi';

const Expense = () => {
  // Sample expense data
  const expenses = [
    { id: 1, category: 'Food', amount: 85.00, date: '2023-06-15', description: 'Groceries' },
    { id: 2, category: 'Transport', amount: 45.50, date: '2023-06-14', description: 'Taxi ride' },
    { id: 3, category: 'Entertainment', amount: 25.00, date: '2023-06-12', description: 'Movie tickets' },
  ];

  return (
    <DashboardLayout activeMenu="expenses">
      <div className="p-6 space-y-6">
        {/* Header with Add button */}
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">Expenses</h1>
          <button className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors">
            <FiPlus />
            Add Expense
          </button>
        </div>

        {/* Expenses Table */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {expenses.map((expense) => (
                  <tr key={expense.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{expense.date}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{expense.category}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{expense.description}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-red-600">-${expense.amount.toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Expense;