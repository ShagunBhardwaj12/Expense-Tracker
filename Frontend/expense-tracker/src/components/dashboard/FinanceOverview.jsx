import StatCard from './StatCard';
import { FiDollarSign, FiCreditCard, FiPieChart, FiArrowUp } from 'react-icons/fi';

const FinanceOverview = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      <StatCard
        title="Total Balance"
        value="$12,485.00"
        change="+12% from last month"
        icon={FiDollarSign}
        isPositive={true}
      />
      <StatCard
        title="Monthly Income"
        value="$4,250.00"
        change="+8.5% from last month"
        icon={FiArrowUp}
        isPositive={true}
      />
      <StatCard
        title="Monthly Expenses"
        value="$2,890.00"
        change="+3.2% from last month"
        icon={FiCreditCard}
        isPositive={false}
      />
      <StatCard
        title="Savings Rate"
        value="28.5%"
        change="+4% from last month"
        icon={FiPieChart}
        isPositive={true}
      />
    </div>
  );
};

export default FinanceOverview;