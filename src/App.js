import './App.css';
import NavigationBar from './components/NavigationBar';
import Hero from  './components/Hero';
import React, { useState } from 'react';

function App() {
  const [open, setOpen] = useState(true);

  return (
    <div>
      <NavigationBar open = {open} setOpen={setOpen}/>
      <div className={`${open ? "pl-72" : "pl-20"} transition-all duration-300`}>
        <Hero/>
      </div>
    </div>
  );
}

export default App;
