// src/js/reducers/index.js
import { ADD_USER, WAKEUP_USER } from "../constants/action-types";
const initialState = {
    user: [{name: 'Alexander', _id: 'azz', key: 'azz'},
           {name: 'Markus',    _id: 'izz', key: 'izz'},
           {name: 'Rudolph',   _id: 'uzz', key: 'uzz'}],
    table: {name: 'TabOne',
            user: ['azz', 'izz', 'uzz']
           },
    standup: {title: "StandUp",
              user: []}
};

function copy_user(user)
{
    return { name: user.name,
             _id: user._id,
             key: user.key
           };
}

function copy_table(table)
{
    return { name: table.name,
             user: table.user.slice()
           };
}

function copy_standup(standup)
{
    return { title: standup.title,
             user: standup.user.slice()
           }
}

function copy_app(app)
{
    return {user: app.user.map(x => copy_user(x)),
            table: copy_table(app.table),
            standup: copy_standup(app.standup)};
}

const rootReducer = (state = initialState, action) => {
    let new_state;
    console.log('root reducer');
    console.log(action);
    switch (action.type) {
    case ADD_USER:
        new_state = copy_app(state);

        new_state.user.push(action.user);
        new_state.table.user.push(action.user._id);
        return new_state;

    case WAKEUP_USER:
        new_state = copy_app(state);
        // let wakedup_user = state.table.users[action.index];

        new_state.table.user = [
                ...state.table.user.slice(0, action.index),
                ...state.table.user.slice(action.index + 1)];
        console.log("TODO MOVE TO WAKED_UP");
        return new_state;
    default:
        return state;
    }
};

export default rootReducer;
export const wakeupUser = user => ({ type: WAKEUP_USER });
