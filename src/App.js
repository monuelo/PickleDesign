import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Border from './components/Border/Border';
import NavToogle from './components/NavToogle/NavToogle';
import Footer from './sections/Footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Border />
        <NavToogle />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <Footer />
      </div>
    );
  }
}

export default App;
