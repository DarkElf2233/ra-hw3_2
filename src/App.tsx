import React from 'react';
import './App.css';

import { Listing } from './components/Listing';

import dataInJson from './db/data.json'

function App() {
  const data = JSON.parse(dataInJson)

  return (
    <div className="wrapper">
      <Listing 
        items={}
      />
    </div>
  );
}

export default App;
