import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import User from './User';
import bindIndexToActionCreators from '../store/bindIndexToActionCreators'
import { wakeupUser } from '../reducers/User'

const mapStateToProps = state => (
    { "table": state.table })

const userDispatchProperties =
  index =>
    dispatch => bindActionCreators(
        bindIndexToActionCreators({wakeupUser}, index),
      dispatch)



class ConnectedTable extends Component {
    render() {
        let table = this.props.table;

        return (
                <div className="container">
                <strong>Table: {table.name}</strong>
                <table className="tableComponent"><tbody>
                {table.users.map((x, index) => (<User {...userDispatchProperties(index)(this.props.dispatch)} {...x}/>))}
            </tbody></table></div>);
    }
}

const Table = connect(mapStateToProps)(ConnectedTable);
export default Table;
