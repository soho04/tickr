import React from 'react';
import Grid from './assets/Grid';

const Dashboard = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#000]">
      {/* 1. Header with Logo and Text */}
      <header className="px-8 py-3 bg-[#1e1f23] border-gray-200 justify-center">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2">
          {/* Logo Icon */}
          <div className="w-10 h-10 bg-[#000] rounded-xl flex items-center justify-center shadow-sm">
            <div className="w-5 h-5 border-2 border-white rounded-full border-t-transparent animate-spin-slow" />
          </div>
          
          {/* Brand Text */}
          <div className="flex flex-col items-center">
            <h1 className="text-xl font-semibold tracking-tighter text-white transition-all duration-300 ease-in-out">
              Tickr
            </h1>
            <span className="text-xs text-slate-500 font-medium tracking-widest uppercase">
              Tickr v5.3
            </span>
          </div>
        </div>
      </header>

      {/* 3. Main Grid Content */}
      <main className="flex-1 py-6">
        <Grid />
      </main>
    </div>
  );
};

export default Dashboard;