import React, { Component } from 'react';
import { connect } from 'react-redux';
import Table from './components/Table';
import { addUser } from './reducers/Table'

import './App.css';

const mapStateToProps = state => (
    { table: state.table })

/*  {...tableDispatchProperties(tindex)(this.props.dispatch)} */

class ConnectedApp extends Component {
    render() {
        return (
                <div className="App">
                <header className="App-header">
                <h1 className="App-title">Welcome to Yojne</h1>
                </header>
                <div>
                {this.props.table.map(
                    (table, tindex) =>
                        (<Table {...this.props.table[tindex]}
                         addUser={addUser}/>
                        ))
                }
            </div></div>);
    }
}
const App = connect(mapStateToProps)(ConnectedApp);

export default App;
