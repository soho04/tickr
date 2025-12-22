import React from "react";
import { StatCards } from "./Cards";
import { PortfolioAllocation } from "./Chart";
import OrderBook from "./OrderBook";
import TradingViewWidget from "./StockChart";
import Watchlist from "./List";
import RecentTransactions from "./RecentTransactions";

const Grid = () => {
  return (
    <div className="p-6 grid grid-cols-12 gap-6 max-w-[1600px] mx-auto bg-[#09090b]">
      
      {/* === LEFT COLUMN: MAIN DASHBOARD (Spans 9 of 12) === */}
      <div className="col-span-12 xl:col-span-9 flex flex-col gap-6">
        
        {/* Top Row: Chart & Order Book */}
        <div className="grid grid-cols-12 gap-6 h-[500px]">
          {/* Main Chart (Takes 8 of 12 inside this section) */}
          <div className="col-span-12 lg:col-span-8 rounded-3xl overflow-hidden bg-[#111114] border border-white/5 shadow-2xl">
            <TradingViewWidget />
          </div>
          
          {/* Order Book (Takes 4 of 12 inside this section) */}
          <div className="col-span-12 lg:col-span-4 h-full">
            <OrderBook />
          </div>
        </div>

        {/* Bottom Row: Metrics & Data */}
        <div className="grid grid-cols-12 gap-6 h-[320px]">
          {/* Portfolio Allocation */}
          <div className="col-span-12 md:col-span-4 h-full">
            <PortfolioAllocation />
          </div>

          {/* Recent Transactions */}
          <div className="col-span-12 md:col-span-4 h-full">
            <RecentTransactions />
          </div>

          {/* Extra Data Card (Symbol Info) */}
          <div className="col-span-12 md:col-span-4 h-full bg-[#111114] border border-white/5 rounded-3xl p-6 relative overflow-hidden">
             <StatCards title="Day Range" />
             {/* You can swap this with another component if needed */}
          </div>
        </div>
      </div>

      {/* === RIGHT COLUMN: SIDEBAR (Spans 3 of 12) === */}
      <div className="col-span-12 xl:col-span-3 h-full min-h-[844px]"> 
        {/* Watchlist takes up the full height of the dashboard */}
        <div className="h-full bg-[#111114] border border-white/5 rounded-3xl overflow-hidden flex flex-col">
           <Watchlist />
        </div>
      </div>

    </div>
  );
};

export default Grid;