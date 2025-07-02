import React from 'react';
import DashboardLayout from '../../components/layouts/DashboardLayout';
import { FiTrendingUp, FiDollarSign, FiPieChart, FiCalendar, FiClock } from 'react-icons/fi';

const Home = () => {
  // Sample data
  const transactions = [
    { id: 1, name: 'Groceries', amount: -85.00, date: '2023-06-15', category: 'Food' },
    { id: 2, name: 'Salary', amount: 2500.00, date: '2023-06-01', category: 'Income' },
    { id: 3, name: 'Electric Bill', amount: -120.00, date: '2023-06-05', category: 'Utilities' },
    { id: 4, name: 'Freelance Work', amount: 350.00, date: '2023-06-10', category: 'Income' },
  ];

  return (
    <DashboardLayout activeMenu="dashboard">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">Dashboard Overview</h1>
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <FiCalendar className="text-gray-400" />
            <span>June 2023</span>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex justify-between">
              <div>
                <p className="text-sm text-gray-500">Total Balance</p>
                <p className="text-2xl font-semibold">$3,245.50</p>
              </div>
              <div className="p-3 rounded-full bg-purple-100 text-purple-600">
                <FiDollarSign size={20} />
              </div>
            </div>
            <p className="text-xs text-green-500 mt-2 flex items-center">
              <FiTrendingUp className="mr-1" /> 12% from last month
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex justify-between">
              <div>
                <p className="text-sm text-gray-500">Monthly Expenses</p>
                <p className="text-2xl font-semibold">$1,250.00</p>
              </div>
              <div className="p-3 rounded-full bg-red-100 text-red-600">
                <FiDollarSign size={20} />
              </div>
            </div>
            <p className="text-xs text-red-500 mt-2 flex items-center">
              <FiTrendingUp className="mr-1" /> 8% from last month
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex justify-between">
              <div>
                <p className="text-sm text-gray-500">Monthly Income</p>
                <p className="text-2xl font-semibold">$2,850.00</p>
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
                <p className="text-sm text-gray-500">Savings Rate</p>
                <p className="text-2xl font-semibold">32%</p>
              </div>
              <div className="p-3 rounded-full bg-blue-100 text-blue-600">
                <FiPieChart size={20} />
              </div>
            </div>
            <p className="text-xs text-blue-500 mt-2 flex items-center">
              <FiTrendingUp className="mr-1" /> 5% improvement
            </p>
          </div>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Recent Transactions */}
          <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-semibold">Recent Transactions</h2>
              <button className="text-sm text-purple-600 hover:text-purple-800">
                View All
              </button>
            </div>
            <div className="space-y-4">
              {transactions.map((transaction) => (
                <div key={transaction.id} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors">
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 rounded-full ${
                      transaction.amount > 0 ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
                    }`}>
                      <FiDollarSign size={16} />
                    </div>
                    <div>
                      <p className="font-medium">{transaction.name}</p>
                      <p className="text-xs text-gray-500 flex items-center">
                        <FiClock className="mr-1" size={12} />
                        {transaction.date} • {transaction.category}
                      </p>
                    </div>
                  </div>
                  <p className={`font-medium ${
                    transaction.amount > 0 ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {transaction.amount > 0 ? '+' : ''}{transaction.amount.toFixed(2)}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Expense Breakdown */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-lg font-semibold mb-6">Expense Breakdown</h2>
            <div className="space-y-4">
              {[
                { category: 'Food', amount: 420, percentage: 35, color: 'bg-blue-500' },
                { category: 'Housing', amount: 380, percentage: 32, color: 'bg-purple-500' },
                { category: 'Transport', amount: 180, percentage: 15, color: 'bg-green-500' },
                { category: 'Entertainment', amount: 120, percentage: 10, color: 'bg-yellow-500' },
                { category: 'Other', amount: 100, percentage: 8, color: 'bg-red-500' },
              ].map((item, index) => (
                <div key={index} className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">{item.category}</span>
                    <span>${item.amount}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className={`${item.color} h-2 rounded-full`} 
                      style={{ width: `${item.percentage}%` }}
                    ></div>
                  </div>
                  <div className="text-xs text-gray-500 text-right">
                    {item.percentage}% of expenses
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Home;