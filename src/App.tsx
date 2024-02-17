import React from 'react';
import './App.css';
import Labs from "./Labs";
import HelloWorld from './Labs/A3/HelloWorld';
import Kanbas from './Kanbas'; /** Imports index.tsx */
import JavaScript from './Labs/JavaScript';

function App() {
  /** 
   * Each component represents the contents of the corresponding index.tsx file
   * within each folder
   */
  return (
    <div>
      <Labs />
      <Kanbas />
      <HelloWorld />
      <JavaScript/>
    </div>
  );
}

export default App;