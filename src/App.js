import React, { Component } from 'react';
import Table from './Table';
import User from './User';

import logo from './logo.svg';
import './App.css';

class App extends Component {
    render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          <Table name="Tavolo 1">
            <User name="Agostino"/>
          </Table>
        </div>
      </div>
    );
  }
}

export default App;
