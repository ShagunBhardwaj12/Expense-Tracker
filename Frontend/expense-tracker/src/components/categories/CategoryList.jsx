import React from 'react';
import { FiEdit2, FiTrash2, FiPieChart } from 'react-icons/fi';

const CategoryList = ({ categories, onEdit, onDelete }) => {
  const getCategoryColor = (category) => {
    const colors = {
      Food: 'bg-blue-100 text-blue-800',
      Transport: 'bg-green-100 text-green-800',
      Entertainment: 'bg-purple-100 text-purple-800',
      Utilities: 'bg-yellow-100 text-yellow-800',
      Other: 'bg-gray-100 text-gray-800'
    };
    return colors[category.name] || colors['Other'];
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Budget</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Spent</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Remaining</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {categories.map((category) => (
              <tr key={category.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className={`p-2 rounded-full mr-3 ${getCategoryColor(category)}`}>
                      <FiPieChart className="text-current" />
                    </div>
                    <span className="font-medium">{category.name}</span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  ${category.budget.toFixed(2)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-red-500">
                  -${category.spent.toFixed(2)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  ${(category.budget - category.spent).toFixed(2)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <div className="flex space-x-2">
                    <button 
                      onClick={() => onEdit(category.id)}
                      className="text-blue-600 hover:text-blue-800"
                    >
                      <FiEdit2 />
                    </button>
                    <button 
                      onClick={() => onDelete(category.id)}
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

export default CategoryList;