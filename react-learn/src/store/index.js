import { createStore } from '../redux'
// import { createStore,bindActionCreators } from 'redux'
import * as usersAction from './action/usersAction'
import reducer from './reducer'

const store = createStore(reducer);


console.log(store)
console.log(store.getState())

// 创建一个监听器
const unSubscribe = store.subscribe(() => {
    console.log('状态改变了',store.getState())
})

store.dispatch(usersAction.createAddUserAction({
    id:3,
    name:'用户3',
    age:23
}))
console.log(store.getState())

unSubscribe();//取消监听

store.dispatch(usersAction.createAddUserAction({
    id:4,
    name:'用户3',
    age:23
}))


