import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CurrentlyReading from './CurrentlyReading';
import Read from './Read';
import WantToRead from './WantToRead';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">MyReads</h1>
        </header>
        <p className="App-intro">
          <CurrentlyReading />
          <Read />
          <WantToRead />


        </p>
      </div>
    );
  }
}

export default App;
