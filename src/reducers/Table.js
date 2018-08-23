import { ADD_USER } from "../constants/action-types"
import bindIndexToActionCreators from '../store/bindIndexToActionCreators'
import { wakeupUser as wakeupUserOrig} from "./User"

export const addUser = (user) => ({
    type: ADD_USER,
    user: user
})

export const INITIAL_STATE =
    {name: 'XXXXX', _id: 'XXX', key: 'XXX'}

const reducer = (state = INITIAL_STATE, action) => {
    return state
}

export const wakeupUser = (index) => (
    bindIndexToActionCreators({wakeupUser: wakeupUserOrig}, "index", index));

export default reducer
