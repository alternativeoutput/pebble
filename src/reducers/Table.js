import { ADD_USER } from "../constants/action-types"

export const addUser = (user) => ({
    type: ADD_USER,
    user: user
})

export const INITIAL_STATE =
    {name: 'XXXXX', _id: 'XXX', key: 'XXX'}

const reducer = (state = INITIAL_STATE, action) => {
    return state
}

export default reducer
