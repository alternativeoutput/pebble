import React from 'react';
import { connect } from "react-redux";
import { wakeupUser } from "../actions/index";

const mapDispatchToProps = dispatch => {
    return {
        wakeupUser: key => dispatch(wakeupUser(key))
    };
};

class ConnectedUser extends React.Component {
    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this);
    }


    handleClick(event) {
        const k = this.props.k;
        console.log(this.props);
        this.props.wakeupUser({key: k});
    }
    render() {
        return (<div className="User">User: {this.props.name} <button onClick={this.handleClick}>Wake Up</button></div>);
    }
}

const User = connect(null, mapDispatchToProps)(ConnectedUser);

export default User;
