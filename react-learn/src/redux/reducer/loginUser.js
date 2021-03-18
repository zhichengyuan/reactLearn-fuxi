import { SETLOGINUSERTYPE } from '../action/loginUserAction'
const initialState = null;

//eslint-disable-next-line
export default (state = initialState, { type, payload }) => {
    switch (type) {
    case SETLOGINUSERTYPE:
        return payload
    default:
        return state
    }
}
