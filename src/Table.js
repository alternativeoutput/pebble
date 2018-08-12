import React from 'react';

class Table extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (<div className="Table">TABLE: {this.props.name}<div>{this.props.children}</div></div>);
    }
}

export default Table;
