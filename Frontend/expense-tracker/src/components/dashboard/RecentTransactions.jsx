import { FiDollarSign, FiArrowUpRight, FiArrowDownLeft } from 'react-icons/fi';

const RecentTransactions = ({ transactions }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-xs border border-gray-100">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold">Recent Transactions</h2>
        <button className="text-sm text-purple-600 hover:text-purple-800 font-medium">
          View All
        </button>
      </div>
      <div className="space-y-4">
        {transactions.map((transaction) => (
          <div key={transaction.id} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors">
            <div className="flex items-center space-x-3">
              <div className={`p-2 rounded-lg ${
                transaction.amount > 0 ? 'bg-green-50 text-green-500' : 'bg-red-50 text-red-500'
              }`}>
                {transaction.amount > 0 ? <FiArrowUpRight size={18} /> : <FiArrowDownLeft size={18} />}
              </div>
              <div>
                <p className="font-medium">{transaction.name}</p>
                <p className="text-xs text-gray-500">
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
  );
};

export default RecentTransactions;