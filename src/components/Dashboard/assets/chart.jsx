import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'AAPL', value: 35 }, { name: 'TSLA', value: 25 },
  { name: 'BTC', value: 20 }, { name: 'NVDA', value: 15 }, { name: 'ETH', value: 5 }
];
const COLORS = ['#fbbf24', '#f59e0b', '#71717a', '#3f3f46', '#27272a'];

export const PortfolioAllocation = () => (
  <div className="bg-[#111114] border-0 rounded-2xl p-6 h-full">
    <h3 className="text-zinc-400 text-xs font-bold uppercase tracking-widest mb-4">Top 5 Holdings</h3>
    <div className="h-48">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie data={data} innerRadius={60} outerRadius={80} paddingAngle={8} dataKey="value" stroke="none">
            {data.map((_, i) => <Cell key={i} fill={COLORS[i % COLORS.length]} />)}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  </div>
);
export default PortfolioAllocation