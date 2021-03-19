import { ADDUSER,DELETEUSER,UPDATAUSER} from '../action/usersAction'

const initialState = [
    {id:1,name:"用户1",age:11},
    {id:2,name:"用户2",age:121},
];

//eslint-disable-next-line
export default (state = initialState, { type, payload }) => {
    switch (type) {
        case ADDUSER:
            return [ ...state, payload ];
        case DELETEUSER:
            return state.filter(it => it.id !== payload);
        case UPDATAUSER:
            return state.map(it => it.id === payload.id ? {...it,...payload}:it);
        default:
            return state
    }
}
