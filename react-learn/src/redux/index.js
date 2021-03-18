import { createStore,bindActionCreators } from 'redux'
import * as usersAction from './action/usersAction'
import reducer from './reducer'

const store = createStore(reducer);

console.log(store.getState())

const boundUserAction = bindActionCreators(usersAction,store.dispatch);

console.log(boundUserAction);

//得到一个increase action，并直接分发
boundUserAction.createAddUserAction({
    id:3,
    name:'用户3',
    age:23
});//向仓库分发action

// store.dispatch(usersAction.createAddUserAction({
//     id:4,
//     name:'用户4',
//     age:23
// }))

console.log(store.getState())
