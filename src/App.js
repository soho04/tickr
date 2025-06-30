import './App.css';
import NavigationBar from './components/NavigationBar';
import Hero from  './components/Hero';
import React, { useState } from 'react';

function App() {

  return (
    <div>
      <NavigationBar/>
      <Hero />
    </div>
  );
}

export default App;
