import {actionTypes} from '../../action/student/searchResult'
//默认状态
const initialState ={
    students:[],
    total:0,
    isLoading:false
}
/**
 * 控制查询条件数据的reducer
 * @param {*} state 
 * @param {*} action 
 */
//eslint-disable-next-line
export default function (state = initialState,action) {
    switch (action.type) {
        case actionTypes.setStudentsAndTotal:
            return {
                ...state,
                students:action.payload.datas,
                total:action.payload.total
            };
        case actionTypes.setIsLoading:
            return {
                ...state,
                isLoading:action.payload
            }
        default:
            return state;
    }
}