import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const ExpensePieChart = () => {
  const data = {
    labels: ['Housing', 'Food', 'Transport', 'Entertainment', 'Utilities'],
    datasets: [
      {
        data: [35, 25, 15, 15, 10],
        backgroundColor: [
          '#6366F1',
          '#10B981',
          '#F59E0B',
          '#EC4899',
          '#3B82F6',
        ],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        position: 'right',
      },
    },
    maintainAspectRatio: false,
  };

  return (
    <div className="h-64">
      <Pie data={data} options={options} />
    </div>
  );
};

export default ExpensePieChart;