import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header></Header>
      </header>
    <footer>
      <Footer></Footer>
    </footer>
    </div>
  );
}

export default App;
