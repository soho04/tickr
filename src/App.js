import './App.css';
import NavigationBar from './components/NavigationBar';
import Hero from  './components/Hero';
import React, { useState } from 'react';
import Dashboard from './components/Dashboard';

function App() {

  return (
    <div>
      {/* <NavigationBar/>
      <Hero /> */}
      <Dashboard />
    </div>
  );
}

export default App;
