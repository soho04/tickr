import React from 'react';
import { ChevronDown } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

// Mock data for the gauges
const gaugeData = [
  { name: 'Safe', value: 70, color: '#10b981' }, // emerald-500
  { name: 'Risk', value: 30, color: '#ef4444' }, // red-500
];

// Reusable Gauge Component
const RiskGauge = ({ label }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-24 h-12 relative">
        <ResponsiveContainer width="100%" height="200%">
          <PieChart>
            <Pie
              data={gaugeData}
              cx="50%"
              cy="50%"
              startAngle={180}
              endAngle={0}
              innerRadius={35}
              outerRadius={45}
              paddingAngle={0}
              dataKey="value"
              stroke="none"
            >
              {gaugeData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        {/* Needle indicator (simplified as a dot for sleekness) */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)]"></div>
      </div>
      <span className="text-zinc-500 text-xs font-medium mt-3">{label}</span>
    </div>
  );
};

// Reusable Progress Bar Component
const ProgressBar = ({ label, value, color }) => {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex justify-between text-xs font-bold">
        <span className={color}>{value}</span>
      </div>
      <div className="h-2 w-full bg-zinc-800 rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full ${color.replace('text', 'bg')}`}
          style={{ width: value }}
        ></div>
      </div>
      <span className="text-zinc-500 text-xs font-medium text-center mt-1">{label}</span>
    </div>
  );
};

const RecentTransactions = () => {
  return (
    <div className="bg-[#111114] border border-white/5 rounded-3xl p-6 h-full flex flex-col relative overflow-hidden">
      {/* Subtle glowing dots background effect */}
      <div className="absolute top-10 right-10 w-1 h-1 bg-cyan-400 rounded-full shadow-[0_0_15px_5px_rgba(34,211,238,0.1)] pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-1 h-1 bg-cyan-400 rounded-full shadow-[0_0_15px_5px_rgba(34,211,238,0.1)] pointer-events-none"></div>

      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-white font-bold text-sm">Recent Transactions</h3>
        <ChevronDown className="text-zinc-500 w-4 h-4 cursor-pointer hover:text-white transition-colors" />
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col justify-between">
        {/* Top Section: Progress Bars */}
        <div className="grid grid-cols-2 gap-8">
          <ProgressBar label="Daily P/L" value="39%" color="text-emerald-500" />
          <ProgressBar label="Risk Level" value="59%" color="text-red-500" />
        </div>

        {/* Bottom Section: Gauges */}
        <div className="grid grid-cols-2 gap-8 mt-6">
          <RiskGauge label="Risk Level" />
          <RiskGauge label="Risk Level" />
        </div>
      </div>
    </div>
  );
};

export default RecentTransactions;