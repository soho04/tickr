import React from 'react';
import { AreaChart, Area, ResponsiveContainer, Defs, LinearGradient, Stop } from 'recharts';
import { ChevronDown, MoreHorizontal } from 'lucide-react';

// 1. Mock Data for the Sparklines
// Using different data sets to make the waves look realistic
const chartDataA = [
  { value: 40 }, { value: 35 }, { value: 50 }, { value: 45 }, { value: 60 }, 
  { value: 55 }, { value: 65 }, { value: 75 }, { value: 70 }, { value: 80 }
];

const chartDataB = [
  { value: 20 }, { value: 25 }, { value: 35 }, { value: 30 }, { value: 55 }, 
  { value: 45 }, { value: 60 }, { value: 75 }, { value: 70 }, { value: 80 }
];

// 2. Reusable Sparkline Card Item
const WatchlistItem = ({ title, price, change, data, isActive }) => {
  return (
    <div className="group relative flex flex-col gap-2 p-4 hover:bg-white/5 transition-colors rounded-2xl cursor-pointer">
      {/* Header Row */}
      <div className="flex justify-between items-start z-10">
        <div>
          <h4 className="text-zinc-400 text-xs font-medium uppercase tracking-wider">{title}</h4>
          <div className="flex items-baseline gap-2 mt-1">
            <span className="text-white text-lg font-bold">{price}</span>
            <span className={`text-xs font-medium ${change.startsWith('+') ? 'text-emerald-400' : 'text-red-400'}`}>
              {change}
            </span>
          </div>
        </div>
        {/* Glowing Dot indicator for "Active" item */}
        {isActive && (
          <div className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)] animate-pulse" />
        )}
      </div>

      {/* Sparkline Chart */}
      <div className="h-24 w-full -mx-2">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#22d3ee" stopOpacity={0.3} /> {/* Cyan-400 */}
                <stop offset="95%" stopColor="#22d3ee" stopOpacity={0} />
              </linearGradient>
            </defs>
            <Area
              type="monotone"
              dataKey="value"
              stroke="#22d3ee"
              strokeWidth={2}
              fill="url(#colorGradient)"
              animationDuration={1500}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Decorative background glow for active item */}
      {isActive && (
         <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-transparent rounded-2xl pointer-events-none" />
      )}
    </div>
  );
};

// 3. Main Container Component
const Watchlist = () => {
  return (
    <div className="w-full max-w-sm bg-[#111114] border border-white/5 rounded-3xl overflow-hidden shadow-2xl">
      {/* Card Header */}
      <div className="flex items-center justify-between px-6 py-5 border-b border-white/5">
        <h3 className="text-white font-semibold text-sm">Watchlist</h3>
        <button className="text-zinc-500 hover:text-white transition-colors">
          <ChevronDown size={18} />
        </button>
      </div>

      {/* List Content */}
      <div className="flex flex-col">
        {/* Item 1 */}
        <div className="border-b border-white/5">
          <WatchlistItem 
            title="Bitcoin" 
            price="$64,230.50" 
            change="+2.4%" 
            data={chartDataA} 
          />
        </div>

        {/* Item 2 (Active Style) */}
        <div className="border-b border-white/5">
           <WatchlistItem 
            title="Ethereum" 
            price="$3,450.00" 
            change="+1.8%" 
            data={chartDataB}
            isActive={true} 
          />
        </div>
      </div>

      {/* Bottom "List View" Section (as seen in second image) */}
      <div className="bg-[#0c0c0e] px-6 py-4">
        <div className="flex items-center justify-between mb-3">
             <span className="text-zinc-500 text-xs font-bold uppercase tracking-widest">Recent</span>
             <MoreHorizontal size={14} className="text-zinc-600" />
        </div>
        
        {/* Compact Row */}
        <div className="flex items-center justify-between group cursor-pointer">
            <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-zinc-800 flex items-center justify-center text-[10px] text-zinc-400 font-mono">
                    SOL
                </div>
                <div>
                    <p className="text-sm text-zinc-300 group-hover:text-white transition-colors">Solana</p>
                    <p className="text-[10px] text-zinc-600">Vol: 2.8M</p>
                </div>
            </div>
            <div className="text-right">
                <p className="text-sm text-white font-mono">145.20</p>
                <p className="text-[10px] text-emerald-500">+4.2%</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Watchlist;