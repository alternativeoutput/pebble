import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => (
    { "props": state });

class ConnectedUser extends Component {
    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        this.props.wakeupUser();
    }

    render() {
        let user = this.props;

        return (<tr><td>User: {user.name}</td>
                <td><button onClick={this.handleClick}>Wake Up</button></td></tr>);
    }
}

const User = connect(mapStateToProps)(ConnectedUser);
export default User;
