import React from 'react';
import DashboardLayout from '../../components/layouts/DashboardLayout';
import Header from '../../components/dashboard/Header';
import FinanceOverview from '../../components/dashboard/FinanceOverview';
import SpendingChart from '../../components/dashboard/SpendingChart';
import RecentTransactions from '../../components/dashboard/RecentTransactions';
import ExpensePieChart from '../../components/dashboard/ExpensePieChart';
import BudgetProgress from '../../components/dashboard/BudgetProgress';

const Home = () => {
  const transactions = [
    { id: 1, name: 'Salary Deposit', amount: 4250.00, date: 'Jun 30, 2023', category: 'Income' },
    { id: 2, name: 'Rent Payment', amount: -1200.00, date: 'Jun 28, 2023', category: 'Housing' },
    { id: 3, name: 'Grocery Store', amount: -186.50, date: 'Jun 27, 2023', category: 'Food' },
    { id: 4, name: 'Freelance Project', amount: 850.00, date: 'Jun 25, 2023', category: 'Income' },
    { id: 5, name: 'Dinner Out', amount: -65.75, date: 'Jun 24, 2023', category: 'Food' },
  ];

  return (
    <DashboardLayout activeMenu="dashboard">
      <div className="p-6 bg-gray-50 min-h-screen">
        <Header />
        
        <FinanceOverview />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          <div className="lg:col-span-2">
            <div className="bg-white p-6 rounded-xl shadow-xs border border-gray-100">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">Spending Overview</h2>
                <div className="flex items-center space-x-2 text-sm">
                  <span className="flex items-center">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></span>
                    Income
                  </span>
                  <span className="flex items-center">
                    <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                    Expenses
                  </span>
                </div>
              </div>
              <SpendingChart />
            </div>
          </div>

          <div className="space-y-6">
            <ExpensePieChart />
            <BudgetProgress />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <RecentTransactions transactions={transactions} />
          </div>
          <div className="bg-white p-6 rounded-xl shadow-xs border border-gray-100">
            <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>
            <div className="grid grid-cols-2 gap-4">
              <button className="p-4 rounded-lg border border-gray-200 hover:bg-gray-50 flex flex-col items-center">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-sm font-medium">Add Transaction</span>
              </button>
              <button className="p-4 rounded-lg border border-gray-200 hover:bg-gray-50 flex flex-col items-center">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                  </svg>
                </div>
                <span className="text-sm font-medium">Transfer</span>
              </button>
              <button className="p-4 rounded-lg border border-gray-200 hover:bg-gray-50 flex flex-col items-center">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm0 2h10v7h-2l-1 2H8l-1-2H5V5z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-sm font-medium">Reports</span>
              </button>
              <button className="p-4 rounded-lg border border-gray-200 hover:bg-gray-50 flex flex-col items-center">
                <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center text-amber-600 mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-sm font-medium">Settings</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Home;