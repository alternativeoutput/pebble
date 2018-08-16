// src/js/reducers/index.js
import { WAKEUP_USER } from "../constants/action-types";
const initialState = {
    'table': {'name': 'TabOne',
              'users': [{'name': 'Alexander', 'k': 'azz', 'key': 'azz'},
                        {'name': 'Markus', 'k': 'izz', 'key': 'izz'},
                        {'name': 'Rudolph', 'k': 'uzz', 'key': 'uzz'}]
             },
    'standup': {'title': "StandUp", 'users': []}
};

function copy_user(user)
{
    return { 'name': user.name,
            'k': user.k,
            'key': user.key };
}

function copy_table(table)
{
    return { 'name': table.name, 'users': table.users.map(x => copy_user(x)) };
}

function copy_standup(standup)
{
    return { 'title': standup.title, 'users': standup.users.map(x => copy_user(x)) };
}

function copy_app(app)
{
    return {'table': copy_table(app.table),
            'standup': copy_standup(app.standup)};
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
    case WAKEUP_USER:
        let new_state = copy_app(state);

        for (let i = 0 ; i < state.table.users.length ; i++) {
            if (new_state.table.users[i].k === action.payload.key) {
                new_state.table.users = [...state.table.users.slice(0, i),
                                         ...state.table.users.slice(i + 1)];
                break;
            }
        }

        return new_state;
    default:
        return state;
    }
};

export default rootReducer;
export const wakeupUser = user => ({ type: WAKEUP_USER, payload: user });
