import React, { Component } from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Dog Dating App</h1>
        </header>
        <HomeScreen />
      </div>
    );
  }
}

export default App;
