import React, { Component } from 'react';
import { connect } from 'react-redux';
import { wakeupUser } from '../reducers/User';

const mapStateToProps = state => (
    {});

class ConnectedUser extends Component {
    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        event.preventDefault();
        (this.props.wakeupUser === undefined ? wakeupUser() : this.props.wakeupUser());
    }

    render() {
        let user = this.props;

        return (<tr><td>User: {user.name}</td>
                <td><button onClick={this.handleClick}>Wake Up</button></td></tr>);
    }
}

const User = connect(mapStateToProps)(ConnectedUser);
export default User;
