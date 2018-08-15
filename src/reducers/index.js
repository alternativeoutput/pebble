// src/js/reducers/index.js
const initialState = {
    'table': {'name': 'TabOne',
              'users': [{'name': 'Alexander', 'key': 'azz'},
                        {'name': 'Rudolph', 'key': 'uzz'}]
             }
};
const rootReducer = (state = initialState, action) => state;
export default rootReducer;
