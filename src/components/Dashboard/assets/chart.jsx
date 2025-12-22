import React, { useLayoutEffect, useRef } from 'react';
import { createChart, CandlestickSeries } from 'lightweight-charts';

const Chart = () => {
  const chartContainerRef = useRef(null);

  useLayoutEffect(() => {
    
    if (!chartContainerRef.current) return;
    
    // Create chart on the ref DOM node once component mounts
    const chart = createChart(chartContainerRef.current, {
      width: 800,
      height: 500,
      layout: {
      background: { color: '#ffffff' },
      textColor: '#000',
      },
      grid: {
        vertLines: { color: '#eee' },
        horzLines: { color: '#eee' },
      },
      timeScale: {
        timeVisible: true,
        secondsVisible: false,
      },
    });

    // Add candlestick series
    const candleSeries = chart.addSeries(CandlestickSeries)

    // Set the data
    candleSeries.setData([
    { time: { year: 2025, month: 7, day: 1 }, open: 100, high: 105, low: 95, close: 102 },
    { time: { year: 2025, month: 7, day: 2 }, open: 102, high: 106, low: 100, close: 104 },
    { time: { year: 2025, month: 7, day: 3 }, open: 104, high: 108, low: 103, close: 107 },
    { time: { year: 2025, month: 7, day: 4 }, open: 107, high: 110, low: 105, close: 108 },
    ]);


    // Cleanup on component unmount
    return () => {
      chart.remove();
    };
  }, []);

  return <div id="chart" ref={chartContainerRef} style={{ width: 800, height: 500 }} />;
};

export default Chart;
