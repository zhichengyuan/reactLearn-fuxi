import ActionTypes from './ustils/ActionTypes'
import isPlainObject from './ustils/isPlaginObject'


/**
 * 实现createStore的功能
 */
//eslint-disable-next-line
export default function (reducer,defaultState) {
    let currentReducer = reducer,//当前使用的reducer
          currentState = defaultState;//当前仓库中的状态
    const listeners = [];//记录所有的监听器（订阅者）
    function dispatch(action) {
        //验证actiion
        if(!isPlainObject(action)) {
            throw new TypeError('action must be a plain object')
        }
        //验证action的type属性是否存在
        if(action.type === undefined) {
            throw new TypeError("action must has a property of type")
        }
        currentState = currentReducer(currentState,action);
        for (const listener of listeners) {
            listener();
        }
    }
    function getState() {
        return currentState;
    }
    /**
     * 添加一个监听器（订阅器）
     */
    function subscribe(listener) {
        listeners.push(listener);//将监听器加入到数组中
        let isRemove = false;

        return function () {
            //将listener从数组中移除
            if(isRemove) {
                return;
            }
            const index = listeners.indexOf(listener);
            listeners.splice(index,1)
            isRemove = true
        }
    }
    //创建仓库时，需要分发一次初始的action
    dispatch({
        type:ActionTypes.INIT(),
    })
    return {
        dispatch,
        getState,
        subscribe
    }   
}