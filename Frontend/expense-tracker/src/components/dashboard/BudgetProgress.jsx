const BudgetProgress = () => {
  const budgets = [
    { category: 'Housing', spent: 1200, limit: 1500, color: 'bg-indigo-500' },
    { category: 'Groceries', spent: 450, limit: 600, color: 'bg-emerald-500' },
    { category: 'Transport', spent: 180, limit: 250, color: 'bg-amber-500' },
    { category: 'Entertainment', spent: 150, limit: 200, color: 'bg-pink-500' },
  ];

  return (
    <div className="bg-white p-6 rounded-xl shadow-xs border border-gray-100">
      <h2 className="text-lg font-semibold mb-6">Budget Progress</h2>
      <div className="space-y-4">
        {budgets.map((budget, index) => {
          const percentage = Math.min(Math.round((budget.spent / budget.limit) * 100), 100);
          
          return (
            <div key={index} className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="font-medium">{budget.category}</span>
                <span>${budget.spent} of ${budget.limit}</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2">
                <div
                  className={`${budget.color} h-2 rounded-full`}
                  style={{ width: `${percentage}%` }}
                ></div>
              </div>
              <div className="text-xs text-gray-500 text-right">
                {percentage}% spent
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BudgetProgress;