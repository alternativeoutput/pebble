import React, { Component } from 'react';
import Table from './components/Table';
import { addUser } from './reducers/Table'

import './App.css';

class App extends Component {
    render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Yojne</h1>
        </header>
        <div>
            <Table name="Table One" addUser={addUser}/>
        </div>
      </div>
    );
  }
}

export default App;
