import { createStore,bindActionCreators } from 'redux'
import * as usersAction from './action/usersAction'
import reducer from './reducer'

const store = createStore(reducer);


console.log(store)

//创建一个监听器
const unSubscribe = store.subscribe(() => {
    console.log('状态改变了',store.getState())
})

const boundUserAction = bindActionCreators(usersAction,store.dispatch);

console.log(boundUserAction);

//得到一个increase action，并直接分发
boundUserAction.createAddUserAction({
    id:3,
    name:'用户3',
    age:23
});//向仓库分发action
unSubscribe();//取消监听
boundUserAction.createDeleteUserAction(3);

