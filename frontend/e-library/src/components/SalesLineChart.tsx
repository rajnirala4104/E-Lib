
import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { date: 'Jan', sales: 1200 },
  { date: 'Feb', sales: 2100 },
  { date: 'Mar', sales: 800 },
  { date: 'Apr', sales: 1600 },
  { date: 'May', sales: 900 },
  { date: 'Jun', sales: 1750 },
  { date: 'Jul', sales: 2200 },
];

const SalesLineChart:React.FC = () => {
  return (
    <div className="p-4 bg-white">
      <h2 className="text-xl font-semibold mb-4">Sales Over Time</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="sales"
            stroke="#0891B2" // Tailwind blue-500
            strokeWidth={2}
            dot={{ r: 4 }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SalesLineChart;
