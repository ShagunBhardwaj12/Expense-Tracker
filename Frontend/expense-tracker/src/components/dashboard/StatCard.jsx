import { FiTrendingUp, FiTrendingDown } from 'react-icons/fi';

const StatCard = ({ title, value, change, icon, isPositive }) => {
  const Icon = icon;
  const trendColor = isPositive ? 'text-green-500' : 'text-red-500';
  const bgColor = isPositive ? 'bg-green-50' : 'bg-red-50';

  return (
    <div className="bg-white p-5 rounded-xl shadow-xs border border-gray-100 flex-1 min-w-[200px]">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm text-gray-500 mb-1">{title}</p>
          <p className="text-2xl font-semibold">{value}</p>
        </div>
        <div className={`p-2 rounded-lg ${bgColor} ${trendColor}`}>
          <Icon size={20} />
        </div>
      </div>
      <p className={`text-xs ${trendColor} mt-3 flex items-center`}>
        {isPositive ? <FiTrendingUp className="mr-1" /> : <FiTrendingDown className="mr-1" />}
        {change}
      </p>
    </div>
  );
};

export default StatCard;