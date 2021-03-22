import { createStore,bindActionCreators } from '../redux'
// import { createStore,bindActionCreators } from 'redux'
import * as usersAction from './action/usersAction'
import reducer from './reducer'

const store = createStore(reducer);
const oldDispatch = store.dispatch;//保留原本的dispatch函数
store.dispatch = function(action) {//更改store中的dispatch
    console.log('中间价1')
    console.log('旧数据1',store.getState());
    console.log('action1',action);
    oldDispatch(action)
    console.log('新数据',store.getState());
    console.log(' ')
}
// oldDispatch = store.dispatch;//保留原本的dispatch函数
// store.dispatch = function(action) {//更改store中的dispatch
//     console.log('中间价2')
//     console.log('旧数据2',store.getState());
//     console.log('action',action);
//     oldDispatch(action)
//     console.log('新数据',store.getState());
//     console.log(' ')
// }
const bindUserAction = bindActionCreators(usersAction,store.dispatch);
// console.log(bindUserAction)

// 创建一个监听器
const unSubscribe = store.subscribe(() => {
    //输出之前的状态，输出新的状态，输出触发的action
    console.log('监听器1',store.getState());
})

// bindUserAction({
//     id:3,
//     name:'用户3',
//     age:23
// })
bindUserAction.createAddUserAction({
    id:3,
    name:'用户3',
    age:23
})
// store.dispatch(usersAction.createAddUserAction({
//     id:3,
//     name:'用户3',
//     age:23
// }))
// console.log(store.getState())

unSubscribe();//取消监听



