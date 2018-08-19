import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => (
    { "props": state });

class ConnectedUser extends Component {
    render() {
        let user = this.props;

        return (<tr><td>User: {user.name}</td>
                <td><button onClick={user.wakeupUser}>Wake Up</button></td></tr>);
    }
}

const User = connect(mapStateToProps)(ConnectedUser);
export default User;
