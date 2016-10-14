import React, { Component } from 'react';
import HeroesList from './HeroesList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <h1>Star Wars App</h1>
          <HeroesList />
      </div>
    );
  }
}

export default App;
