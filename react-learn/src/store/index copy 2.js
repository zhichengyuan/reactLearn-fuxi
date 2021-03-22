import { createStore,bindActionCreators,applyMiddleware } from 'redux'
// import { createStore,bindActionCreators } from 'redux'
import * as usersAction from './action/usersAction'
import reducer from './reducer'

const logger1 = store => next => action => {
    console.log('中间价1')
    console.log('旧数据1',store.getState());
    console.log('action1',action);
    next(action)
    console.log('新数据',store.getState());
    console.log(' ')
}

const logger2 = store => next => action => {
    console.log('中间价2')
    console.log('旧数据2',store.getState());
    console.log('action2',action);
    next(action)
    console.log('新数据2',store.getState());
    console.log(' ')
}
/**
 * 一个中间函数
 */
// function logger1(store) {
//     //下面返回的函数，是最终要应用的dispatch
//     return function(next) {
//         return function(action) {
//             console.log('中间价1')
//             console.log('旧数据1',store.getState());
//             console.log('action1',action);
//             next(action)
//             console.log('新数据',store.getState());
//             console.log(' ')
            
//         }
//     }
    
// }
// function logger2(store) {
//     return function(next) {
//         return function(action) {
//             console.log('中间价2')
//             console.log('旧数据2',store.getState());
//             console.log('action2',action);
//             next(action)
//             console.log('新数据2',store.getState());
//             console.log(' ')
            
            
//         }
//     }
// }


//应用中间件，方式1：
// const store = createStore(reducer,applyMiddleware(logger1,logger2));

//方式2：
const store =  applyMiddleware(logger1,logger2)(createStore)(reducer)


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



