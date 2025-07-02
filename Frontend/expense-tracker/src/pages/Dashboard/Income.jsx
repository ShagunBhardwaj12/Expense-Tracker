import React, { useState } from 'react';
import DashboardLayout from '../../components/layouts/DashboardLayout';
import { FiPlus, FiSearch } from 'react-icons/fi';
import IncomeStats from '../../components/income/IncomeStats';
import IncomeTable from '../../components/income/IncomeTable';
import AddIncomeModal from '../../components/income/AddIncomeModal';

const Income = () => {
  const [income, setIncome] = useState([
    { id: 1, source: 'Salary', amount: 2500.00, date: '2023-06-01', description: 'Monthly salary' },
    { id: 2, source: 'Freelance', amount: 350.00, date: '2023-06-10', description: 'Web design project' },
    { id: 3, source: 'Investment', amount: 120.50, date: '2023-06-05', description: 'Stock dividends' },
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddIncome = (newIncome) => {
    setIncome(prev => [...prev, newIncome]);
  };

  const handleEdit = (id) => {
    // Edit income logic here
    console.log('Edit income with id:', id);
  };

  const handleDelete = (id) => {
    setIncome(income.filter(item => item.id !== id));
  };

  const filteredIncome = income.filter(item =>
    item.source.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Calculate total income for stats
  const totalIncome = income.reduce((sum, item) => sum + item.amount, 0);
  const avgIncome = (totalIncome / Math.max(1, income.length)).toFixed(2);

  return (
    <DashboardLayout activeMenu="income">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Income</h1>
            <p className="text-sm text-gray-500">Manage your income sources</p>
          </div>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="flex items-center bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors"
          >
            <FiPlus className="mr-2" />
            Add Income
          </button>
        </div>

        <IncomeStats 
          totalIncome={totalIncome}
          avgIncome={avgIncome}
          sourceCount={income.length}
        />

        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center mb-4">
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiSearch className="text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search income..."
                className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          <IncomeTable 
            income={filteredIncome} 
            onEdit={handleEdit} 
            onDelete={handleDelete} 
          />
        </div>

        <AddIncomeModal 
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onAddIncome={handleAddIncome}
        />
      </div>
    </DashboardLayout>
  );
};

export default Income;