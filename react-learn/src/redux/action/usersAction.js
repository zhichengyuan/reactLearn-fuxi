export const ADDUSER = Symbol('add-user');
export const DELETEUSER = Symbol('delete-user');
export const UPDATAUSER = Symbol('updata-user');

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


