import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './containers/Home/Home';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header></Header>
      </header>
      <div>
        <Home></Home>
      </div>
    <footer className="App-footer">
      <Footer></Footer>
    </footer>
    </div>
  );
}

export default App;
