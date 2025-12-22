import React from "react";
import { StatCards } from "./Cards";
import TradingViewWidget from "./StockChart";

const Grid = () => {
  return (
    
    <div className="px-4 grid gap-3 grid-cols-12 max-w-6xl w-full mx-auto">

      {/* TOP SECTION */}
      {/* Main Chart: Spans 8 of 12 columns */}
      <div className="col-span-12 md:col-span-8 h-[400px] rounded-border overflow-hidden bg-slate-100">
        <TradingViewWidget />
      </div>

      {/* Right Sidebar: Spans 4 of 12 columns */}
      {/* Uses flex-col to stack two cards and fill the chart's height */}
      <div className="col-span-12 md:col-span-4 flex flex-col gap-3">
        <div className="flex-1">
          <StatCards title="Gross Revenue" />
        </div>
        <div className="flex-1">
          <StatCards title="Avg Order" />
        </div>
      </div>

      {/* BOTTOM SECTION */}
      {/* Three equal cards: Each spans 4 of 12 columns */}
      <div className="col-span-12 md:col-span-4">
        <StatCards title="Trailing Year" />
      </div>

      <div className="col-span-12 md:col-span-4">
        <StatCards title="Trailing Year" />
      </div>

      <div className="col-span-12 md:col-span-4">
        <StatCards title="Trailing Year" />
      </div>

    </div>
  );
};

export default Grid;