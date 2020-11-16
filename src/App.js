import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import './App.css';
import Soda from './Soda';
import Chocolate from './Chocolate';
import Chips from './Chips';

function App() {


  return (
    <div className="App">
      <h1>Hello Router!</h1>
        <BrowserRouter>
        <Route >
          <Soda />
        </Route>
        <Route>
          <Chocolate />
        </Route>
        <Route>
          <Chips />
        </Route>
        </BrowserRouter>
      </div>
  );
}

export default App;
