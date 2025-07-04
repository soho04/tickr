import React from "react";
import { FiTrendingDown, FiTrendingUp } from "react-icons/fi";

export const StatCards = () => {
  return (
    <>
      <Card data={{
        symbol: "AAPL",
        date: "2023-10-01",
        market_open: "$134.56",
        market_close: "$135.67",
        earnings: "$1.23/share",
        volume: "1,234,567",
        pe_ratio: "25.4",
        market_cap: "$2.5T",
        dividend_yield: "-",
        _52_week_high: "$150.00",
        _52_week_low: "$120.00",
        beta: "1.2",
        sector: "Technology",
        
      }} />     
    </>
  );
};

const Card = ({ data }) => {
  return (
    <div className="col-span-4 p-4 rounded border border-stone-300 bg-white">
      {Object.entries(data).map(([key, value]) => {
        const label = key
          .replace(/_/g, " ")
          .replace(/^_/, "")
          .replace(/(\b\w)/g, c => c.toUpperCase()); 

        return (
          <div key={key} className="flex justify-between">
            <span className="font-medium">{label}:</span>
            <span>{value}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Card;