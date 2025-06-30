import React from 'react';
import DashboardLayout from '../../components/layouts/DashboardLayout';

const Home = () => {
  return (
    <DashboardLayout activeMenu="dashboard">
      <div className="space-y-6">
        <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-gray-500">Total Expenses</h3>
            <p className="text-2xl font-semibold">$1,250</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-gray-500">Monthly Budget</h3>
            <p className="text-2xl font-semibold">$2,000</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-gray-500">Remaining</h3>
            <p className="text-2xl font-semibold">$750</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Recent Transactions</h2>
          <div className="space-y-4">
            <div className="flex justify-between border-b pb-2">
              <div>Groceries</div>
              <div className="text-red-500">-$85.00</div>
            </div>
            <div className="flex justify-between border-b pb-2">
              <div>Salary</div>
              <div className="text-green-500">+$2,500.00</div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Home;