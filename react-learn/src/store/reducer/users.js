
import { ADDUSER,DELETEUSER,UPDATAUSER,SETUSERS,SETLOADING} from '../action/usersAction'

const initialState = {
    isLoading:false,//是否正在加载
    datas:[]//用户数组  
};

//eslint-disable-next-line
export default (state = initialState, { type, payload }) => {
    switch (type) {
        case ADDUSER:
            return {
                ...state, 
                datas:[...state.datas,payload]
            };
        case DELETEUSER:
            return {
                ...state,
                datas:state.datas.filter(it => it.id !== payload)
            };
        case UPDATAUSER:
            return {
                ...state,
                datas:state.datas.map(it => it.id === payload.id ? {...it,...payload}:it)
            };
        case SETUSERS:
            return {
                ...state,
                datas:payload
            };
        case SETLOADING:
            return {
                ...state,
                isLoading:payload
            };
        default:
            return state
    }
}
