import React from 'react';

class User extends React.Component {
    render() {
        return (<div className="User">USER: {this.props.name}</div>);
    }
}

export default User;
