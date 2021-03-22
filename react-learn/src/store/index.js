import { createStore,bindActionCreators,applyMiddleware } from '../redux'
// import { createStore,bindActionCreators } from 'redux'
import * as usersAction from './action/usersAction'
import reducer from './reducer'
import logger from 'redux-logger'



//应用中间件，方式1：
const store = createStore(reducer,applyMiddleware(logger));


const bindUserAction = bindActionCreators(usersAction,store.dispatch);

// 创建一个监听器
const unSubscribe = store.subscribe(() => {
    //输出之前的状态，输出新的状态，输出触发的action
    console.log('监听器1',store.getState());
})


bindUserAction.createAddUserAction({
    id:3,
    name:'用户3',
    age:23
})

unSubscribe();//取消监听



