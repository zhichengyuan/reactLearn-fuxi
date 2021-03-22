import { getAllStudents } from '../../services/student'
export const ADDUSER = Symbol('add-user');
export const DELETEUSER = Symbol('delete-user');
export const UPDATAUSER = Symbol('updata-user');
export const SETUSERS = Symbol('set-users');
export const SETLOADING = Symbol('set-loading');//设置加载装态

export const createAddUserAction = (user) => ({
    type: ADDUSER,
    payload:user
})

export const createDeleteUserAction = (id) => ({
    type: DELETEUSER,
    payload:id
})
export const createUpdataUserAction = (id,newUserData) => ({
    type: UPDATAUSER,
    payload:{
        ...newUserData,
        id,
    }
})

export const createSetUsersAction = (users) => ({
    type:SETUSERS,
    payload:users //用户数组
})

/**
 * 返回一个设置加载状态的action
 */
export const createSetLoadingAction = (isLoading) => ({
    type:SETLOADING,
    payload:isLoading//加载状态
})

export function fetchUser() {
    //由于与thunk的存在，允许action 是一个带有副作用的函数
    return async function (dispatch) {
        dispatch(createSetLoadingAction(true))
        const users = await getAllStudents()
        const action = createSetUsersAction(users);
        dispatch(action);
        dispatch(createSetLoadingAction(false));//设置为没有正在加载
        
    }
}

