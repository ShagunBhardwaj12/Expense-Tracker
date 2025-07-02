import React from 'react';
import { FiEdit2, FiTrash2, FiTag } from 'react-icons/fi';

const ExpenseTable = ({ expenses, onEdit, onDelete }) => {
  const getCategoryColor = (category) => {
    const colors = {
      Food: 'bg-blue-100 text-blue-800',
      Transport: 'bg-green-100 text-green-800',
      Entertainment: 'bg-purple-100 text-purple-800',
      Utilities: 'bg-yellow-100 text-yellow-800',
      Other: 'bg-gray-100 text-gray-800'
    };
    return colors[category] || colors['Other'];
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {expenses.map((expense) => (
              <tr key={expense.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{expense.date}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`${getCategoryColor(expense.category)} text-xs px-2 py-1 rounded-full`}>
                    {expense.category}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{expense.description}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-red-600">-${expense.amount.toFixed(2)}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <div className="flex space-x-2">
                    <button 
                      onClick={() => onEdit(expense.id)}
                      className="text-blue-600 hover:text-blue-800"
                    >
                      <FiEdit2 />
                    </button>
                    <button 
                      onClick={() => onDelete(expense.id)}
                      className="text-red-600 hover:text-red-800"
                    >
                      <FiTrash2 />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ExpenseTable;