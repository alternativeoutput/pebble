import React from 'react';

class User extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (<div className="User">USER: {this.props.name}</div>);
    }
}

export default User;
