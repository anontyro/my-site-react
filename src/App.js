import React, { Component } from 'react';
import Main from './routing/Main';
import './App.css';
import Navbar from './components/_layout/_standard/Navbar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Main />
      </div>
    );
  }
}

export default App;
