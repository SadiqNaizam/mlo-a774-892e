import React from 'react';
import StatCard from './StatCard';
import PieChart from './PieChart';

const StatsCardGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <StatCard />
      <PieChart />
    </div>
  );
};

export default StatsCardGrid;
