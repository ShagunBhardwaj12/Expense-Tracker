import React, { useState } from 'react';
import DashboardLayout from '../../components/layouts/DashboardLayout';
import { FiPlus, FiSearch } from 'react-icons/fi';
import ExpenseStats from '../../components/expense/ExpenseStats';
import ExpenseTable from '../../components/expense/ExpenseTable';
import AddExpenseModal from '../../components/expense/AddExpenseModal';

const Expense = () => {
  const [expenses, setExpenses] = useState([
    { id: 1, category: 'Food', amount: 85.00, date: '2023-06-15', description: 'Groceries' },
    { id: 2, category: 'Transport', amount: 45.50, date: '2023-06-14', description: 'Taxi ride' },
    { id: 3, category: 'Entertainment', amount: 25.00, date: '2023-06-12', description: 'Movie tickets' },
    { id: 4, category: 'Utilities', amount: 120.00, date: '2023-06-05', description: 'Electric bill' },
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddExpense = (newExpense) => {
    setExpenses(prev => [...prev, newExpense]);
  };

  const handleEdit = (id) => {
    // Edit expense logic here
    console.log('Edit expense with id:', id);
  };

  const handleDelete = (id) => {
    setExpenses(expenses.filter(item => item.id !== id));
  };

  const filteredExpenses = expenses.filter(expense =>
    expense.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    expense.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Calculate stats
  const totalExpense = expenses.reduce((sum, item) => sum + item.amount, 0);
  const avgExpense = expenses.length > 0 ? totalExpense / expenses.length : 0;
  const categoryCount = new Set(expenses.map(e => e.category)).size;

  return (
    <DashboardLayout activeMenu="expenses">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Expenses</h1>
            <p className="text-sm text-gray-500">Track your spending</p>
          </div>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="flex items-center bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors"
          >
            <FiPlus className="mr-2" />
            Add Expense
          </button>
        </div>

        <ExpenseStats 
          totalExpense={totalExpense}
          avgExpense={avgExpense}
          categoryCount={categoryCount}
        />

        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center mb-4">
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiSearch className="text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search expenses..."
                className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          <ExpenseTable 
            expenses={filteredExpenses} 
            onEdit={handleEdit} 
            onDelete={handleDelete} 
          />
        </div>

        <AddExpenseModal 
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onAddExpense={handleAddExpense}
        />
      </div>
    </DashboardLayout>
  );
};

export default Expense;