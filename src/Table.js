import React from 'react';
import User from './User';

class Table extends React.Component {
    constructor() {
        super();
        this.users = [{'name': 'Alexander', 'key': 'azz'}, {'name': 'Rudolph', 'key': 'uzz'}];
    }

    render() {
        const chi = this.users.map(x => { return (<User {...x}/>); });
        console.log(chi);
        return (<div className="Table">TABLE: {this.props.name}<div>
                {chi}</div></div>);
    }
}

export default Table;
