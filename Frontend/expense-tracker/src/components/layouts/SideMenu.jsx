import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FiHome, 
  FiPieChart, 
  FiDollarSign,
  FiCreditCard,
  FiTag,
  FiSettings
} from 'react-icons/fi';

const SideMenu = ({ activeMenu }) => {
  const menuItems = [
    { name: 'Dashboard', icon: <FiHome />, path: '/', key: 'dashboard' },
    { name: 'Expenses', icon: <FiDollarSign />, path: '/expenses', key: 'expenses' },
    { name: 'Income', icon: <FiCreditCard />, path: '/income', key: 'income' },
    { name: 'Categories', icon: <FiTag />, path: '/categories', key: 'categories' },
  ];

  return (
    <div className="hidden md:block w-64 fixed h-[calc(100vh-4rem)] bg-white shadow-sm">
      <div className="p-4 space-y-1">
        {menuItems.map((item) => (
          <Link
            key={item.key}
            to={item.path}
            className={`flex items-center p-3 rounded-lg ${
              activeMenu === item.key 
                ? 'bg-purple-100 text-purple-700' 
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            <span className="mr-3">{item.icon}</span>
            {item.name}
          </Link>
        ))}
        <Link
          to="/settings"
          className={`flex items-center p-3 rounded-lg ${
            activeMenu === 'settings' 
              ? 'bg-purple-100 text-purple-700' 
              : 'text-gray-600 hover:bg-gray-100'
          }`}
        >
          <span className="mr-3"><FiSettings /></span>
          Settings
        </Link>
      </div>
    </div>
  );
};

export default SideMenu;