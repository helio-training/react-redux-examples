import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Cart from './Cart';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Helio</h2>
        </div>
        <Cart />
      </div>
    );
  }
}

export default App;
