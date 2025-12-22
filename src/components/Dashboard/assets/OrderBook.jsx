import React from 'react';
import { ChevronDown } from 'lucide-react'; // Ensure you have lucide-react installed

const OrderBook = () => {
  // Mock data matching the structure in your image: 
  // Text Label | Green Value | Red Value
  const marketDepth = [
    { name: 'Limit Order', bid: '0.1%', ask: '58.60%' },
    { name: 'Market Depth', bid: '3.8%', ask: '44.7%' },
    { name: 'Stop Loss', bid: '2.8%', ask: '54.9%' },
    { name: 'Large Cap', bid: '1.9%', ask: '58.7%' },
    { name: 'Small Cap', bid: '1.3%', ask: '38.7%' },
    { name: 'Lev. Tokens', bid: '0.4%', ask: '48.3%' },
    { name: 'Derivatives', bid: '0.0%', ask: '36.9%' },
    { name: 'Index Fund', bid: '12.8%', ask: '39.0%' },
  ];

  return (
    <div className="bg-[#111114] border border-white/5 rounded-3xl p-6 h-full flex flex-col font-mono text-sm">
      {/* Header Section */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-white font-sans font-bold text-sm tracking-wide">
          Order Book
        </h3>
        <ChevronDown className="text-zinc-600 w-4 h-4 cursor-pointer hover:text-white transition-colors" />
      </div>

      {/* Column Headers */}
      <div className="grid grid-cols-12 text-zinc-500 mb-4 text-xs font-sans uppercase tracking-wider">
        <div className="col-span-6">Type</div>
        <div className="col-span-3 text-right">Bids</div>
        <div className="col-span-3 text-right">Asks</div>
      </div>

      {/* List Content */}
      <div className="flex-1 space-y-3 overflow-y-auto pr-1 custom-scrollbar">
        {marketDepth.map((item, i) => (
          <div 
            key={i} 
            className="grid grid-cols-12 items-center group cursor-pointer hover:bg-white/5 p-1 rounded-lg transition-colors"
          >
            {/* Column 1: Name (Text) */}
            <div className="col-span-6 text-zinc-300 font-sans font-medium text-xs group-hover:text-white">
              {item.name}
            </div>

            {/* Column 2: Bid (Green) */}
            <div className="col-span-3 text-right text-emerald-400 font-bold text-xs">
              {item.bid}
            </div>

            {/* Column 3: Ask (Red) */}
            <div className="col-span-3 text-right text-red-400 font-bold text-xs">
              {item.ask}
            </div>
          </div>
        ))}
      </div>
      
      {/* Optional: Bottom fade or footer if needed */}
      <div className="mt-2 h-px w-full bg-gradient-to-r from-transparent via-white/5 to-transparent" />
    </div>
  );
};

export default OrderBook;