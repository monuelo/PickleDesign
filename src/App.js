import React, { Component } from 'react';
import './App.css';
import Border from './components/Border/Border';
import NavToogle from './components/NavToogle/NavToogle';
import Footer from './sections/Footer/Footer';
import Masthead from './sections/Masthead/Masthead';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Border />
        <NavToogle />
        <Masthead/>
        <Footer />
      </div>
    );
  }
}

export default App;
