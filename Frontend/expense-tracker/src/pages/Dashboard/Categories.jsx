import React, { useState } from 'react';
import DashboardLayout from '../../components/layouts/DashboardLayout';
import { FiPlus, FiSearch } from 'react-icons/fi';
import CategoryStats from '../../components/categories/CategoryStats';
import CategoryList from '../../components/categories/CategoryList';
import AddCategoryModal from '../../components/categories/AddCategoryModal';

const Categories = () => {
  const [categories, setCategories] = useState([
    { id: 1, name: 'Food', budget: 500, spent: 420, icon: 'FiShoppingBag' },
    { id: 2, name: 'Transport', budget: 300, spent: 180, icon: 'FiTruck' },
    { id: 3, name: 'Entertainment', budget: 200, spent: 120, icon: 'FiFilm' },
    { id: 4, name: 'Utilities', budget: 400, spent: 380, icon: 'FiHome' },
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddCategory = (newCategory) => {
    setCategories(prev => [...prev, newCategory]);
  };

  const handleEdit = (id) => {
    // Edit category logic here
    console.log('Edit category with id:', id);
  };

  const handleDelete = (id) => {
    setCategories(categories.filter(item => item.id !== id));
  };

  const filteredCategories = categories.filter(category =>
    category.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Calculate stats
  const totalCategories = categories.length;
  const totalBudget = categories.reduce((sum, item) => sum + item.budget, 0);
  const avgBudget = categories.length > 0 ? totalBudget / categories.length : 0;

  return (
    <DashboardLayout activeMenu="categories">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Categories</h1>
            <p className="text-sm text-gray-500">Manage your expense categories</p>
          </div>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="flex items-center bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors"
          >
            <FiPlus className="mr-2" />
            Add Category
          </button>
        </div>

        <CategoryStats 
          totalCategories={totalCategories}
          totalBudget={totalBudget}
          avgBudget={avgBudget}
        />

        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center mb-4">
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiSearch className="text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search categories..."
                className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          <CategoryList 
            categories={filteredCategories} 
            onEdit={handleEdit} 
            onDelete={handleDelete} 
          />
        </div>

        <AddCategoryModal 
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onAddCategory={handleAddCategory}
        />
      </div>
    </DashboardLayout>
  );
};

export default Categories;