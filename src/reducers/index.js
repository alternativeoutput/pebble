// src/js/reducers/index.js
import { ADD_USER, WAKEUP_USER } from "../constants/action-types";
const initialState = {
    user: {'azz': {name: 'Alexander', _id: 'azz', key: 'azz'},
           'izz': {name: 'Markus',    _id: 'izz', key: 'izz'},
           'uzz': {name: 'Rudolph',   _id: 'uzz', key: 'uzz'}},
    table: [{name: 'TabOne', user: [], key: "tazz"},
            {name: 'TabTwo', user: ['azz', 'izz', 'uzz'], key: "tizz"},
            {name: 'TabThree', user: [], key: "tuzz"}
           ],
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

function copytbl(tbl, copy_el)
{
    return Object.keys(tbl).reduce(function(previous, current) {
        previous[current] = copy_el(tbl[current]);
        return previous;
    }, {});
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
    return {user: copytbl(app.user, copy_user),
            table: app.table.map((el) => (copy_table(el))),
            standup: copy_standup(app.standup)};
}

const rootReducer = (state = initialState, action) => {
    let new_state;
    console.log('root reducer');
    console.log(action);
    switch (action.type) {
    case ADD_USER:
        new_state = copy_app(state);
        new_state.user[action.user._id] = copy_user(action.user);
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
