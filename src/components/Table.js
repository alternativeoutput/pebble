import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import User from './User';
import { addUser } from '../reducers/Table'
import { wakeupUser } from '../reducers/Table'

import { v4 as uuidv4 } from 'uuid'

const mapStateToProps = state => (
    { user_tbl: state.user,
      table: state.table })

function mapDispatchToProps(dispatch, props) {
    return {
        dispatch,
            ...bindActionCreators({
                addUser
            }, dispatch)};
}

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
        let user_tbl = this.props.user_tbl;
        let table = this.props.table;
        let adder = "";

        if (table.user.length < 5) {
            adder = (<div>Name: <input type="text" ref={new_user_name => (this.new_user_name = new_user_name)}/>&nbsp;<button onClick={this.handleClick}>Add User</button></div>);
        }
        return (
                <div className="container">
                <strong>Table: {table.name}</strong>
                <table className="tableComponent"><tbody>
                { table.user.map(
                    (_id, index) =>
                        (<User
                         {...(this.props.wakeupUser !== undefined ? this.props.wakeupUser : wakeupUser)(index)}
                         {...user_tbl[_id]}/>
                        )
                ) }
            </tbody></table>{adder}<hr/><br/></div>);
        }
}

const Table = connect(mapStateToProps, mapDispatchToProps)(ConnectedTable);
export default Table;
