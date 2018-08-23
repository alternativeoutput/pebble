import { ADD_USER } from "../constants/action-types"
import { bindActionAttrs } from '../store/bindIndexToActionCreators'
import { wakeupUser as wakeupUser_user } from './User'

export const addUser = (user) => ({
    type: ADD_USER,
    user: user
})

export const INITIAL_STATE =
    {name: 'XXXXX', _id: 'XXX', key: 'XXX'}

const reducer = (state = INITIAL_STATE, action) => {
    return state
}

export const wakeupUser = (index) => {
    return () => (bindActionAttrs(wakeupUser_user(), "index", index));
}

export default reducer
