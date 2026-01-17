import React from 'react';
import { Navbar } from './components/Navbar';
import { Home } from './sections/Home';
import { About } from './sections/About';
import { Projects } from './sections/Projects';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Home />
      <About />
      <Projects />
    </div>
  )
}

export default App

