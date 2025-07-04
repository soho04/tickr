import React from "react";
import { StatCards } from "./Cards";
import TradingViewWidget from "./StockChart";

const Grid = () => {
    return (
        <div className="px-4 grid gap-3 grid-cols-12 max-w-5xl w-full mx-auto">
            <div className="col-span-8 row-span-2 h-96 rounded-border">
                <TradingViewWidget />
            </div>
            <StatCards />
        </div>
    );
}

export default Grid;