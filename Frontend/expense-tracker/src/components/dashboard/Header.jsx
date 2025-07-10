import { FiSearch, FiBell, FiCalendar } from 'react-icons/fi';

const Header = () => {
  return (
    <div className="flex justify-between items-center mb-8">
      <div>
        <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
        <p className="text-sm text-gray-500">Welcome back! Here's your financial overview</p>
      </div>
      <div className="flex items-center space-x-4">
        <div className="relative">
          <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search transactions..."
            className="pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm w-64"
          />
        </div>
        <button className="p-2 rounded-lg bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 relative">
          <FiBell />
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>
        <div className="flex items-center space-x-2">
          <div className="w-9 h-9 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center text-white font-medium">
            JD
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;