import './App.css';
import NavigationBar from './components/NavigationBar';
import Hero from  './components/Hero';
import React, { useState } from 'react';
import Dashboard from './components/Dashboard/Dashboard';

function App() {

  const [open, setOpen] = useState(true);

  return (
    <>
    <div className="flex-1">
      <NavigationBar open={open} setOpen={setOpen} />
      <Dashboard open={open}/>
    </div>
    </>
  );
}

export default App;
