import React from 'react';

const User = props =>
      (<tr><td>User: {props.name}</td>
       <td><button onClick={props.wakeupUser}>Wake Up</button></td></tr>)

export default User;
