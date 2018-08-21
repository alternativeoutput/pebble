import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import User from './User';
import bindIndexToActionCreators from '../store/bindIndexToActionCreators'
import { addUser } from '../reducers/Table'
import { wakeupUser } from '../reducers/User'

import { v4 as uuidv4 } from 'uuid'

const mapStateToProps = state => (
    { user: state.user,
      table: state.table })

function mapDispatchToProps(dispatch, props) {
    return {
        dispatch,
            ...bindActionCreators({
                addUser
            }, dispatch)};
}

const userDispatchProperties =
  index =>
    dispatch => bindActionCreators(
        bindIndexToActionCreators({wakeupUser}, index),
      dispatch)



class ConnectedTable extends Component {
    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        event.preventDefault();
        let name = this.new_user_name.value;
        this.new_user_name.value = "";

        if (name === "") {
            alert("User name is empty");
            return false;
        }
        let uu = uuidv4();
        this.props.addUser({name: name, _id: uu, key: uu});
    }

    render() {
        let table = this.props.table;
        let user = this.props.user;
        let adder = "";

        if (table.user.length < 5) {
            adder = (<div>Name: <input type="text" ref={new_user_name => (this.new_user_name = new_user_name)}/>&nbsp;<button onClick={this.handleClick}>Add User</button></div>);
        }
        return (
                <div className="container">
                <strong>Table: {table.name}</strong>
                <table className="tableComponent"><tbody>
                {
                    table.user.map((_id, index) => (
                            <User
                        {...userDispatchProperties(index)(this.props.dispatch)}
                        {...user.filter((item) => (
                            item._id === _id))[0]}/>)) }
            </tbody></table>{adder}</div>);
    }
}

const Table = connect(mapStateToProps, mapDispatchToProps)(ConnectedTable);
export default Table;
