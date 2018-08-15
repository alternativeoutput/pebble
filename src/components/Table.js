import React from 'react';
import { connect } from "react-redux";
import User from './User';

const mapStateToProps = state => {
    return { "table": state.table };
};

const ConnectedTable = ({ table }) => (
        <div className="Table"><strong>Table: {table.name}</strong><div>
            {table.users.map(x => (<User {...x}/>))}
    </div></div>);

const Table = connect(mapStateToProps)(ConnectedTable);
export default Table;
