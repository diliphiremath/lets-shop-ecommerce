import React from 'react';
import './App.css';
import RoutesList from './common/RoutesList';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div>
        <Router>
          <RoutesList></RoutesList>
        </Router>
      </div>      
    </div>
  );
}

export default App;
