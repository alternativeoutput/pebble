// src/js/reducers/index.js
import { ADD_USER, WAKEUP_USER } from "../constants/action-types";
const initialState = {
    'table': {'name': 'TabOne',
              'users': [{'name': 'Alexander', 'key': 'azz'},
                        {'name': 'Markus', 'key': 'izz'},
                        {'name': 'Rudolph', 'key': 'uzz'}]
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
    let new_state;
    console.log(action);
    switch (action.type) {
    case ADD_USER:
        new_state = copy_app(state);

        new_state.table.users.push(action.user);
        return new_state;

    case WAKEUP_USER:
        new_state = copy_app(state);
        // let wakedup_user = state.table.users[action.index];

        new_state.table.users = [
                ...state.table.users.slice(0, action.index),
                ...state.table.users.slice(action.index + 1)];
        console.log("TODO MOVE TO WAKED_UP");
        return new_state;
    default:
        return state;
    }
};

export default rootReducer;
export const wakeupUser = user => ({ type: WAKEUP_USER });
