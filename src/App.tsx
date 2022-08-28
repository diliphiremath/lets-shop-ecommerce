import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './containers/Home/Home';
import WishesHome from './containers/WishesHome/WishesHome';
import RoutesList from './common/RoutesList';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header></Header>
      </header>
      <div>
        <Router>
          <RoutesList></RoutesList>
        </Router>
      </div>
      <footer className="App-footer">
        <Footer></Footer>
      </footer>
    </div>
  );
}

export default App;
