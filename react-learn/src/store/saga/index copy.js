import {take} from 'redux-saga/effects'
import { actionTypes } from '../action/counter';
/**
 * saga任务
 */
//eslint-disable-next-line
export default function* () {
    const action = yield take(actionTypes.asyncIncrease)
    console.log('发生异步的increase action',action);
    let result = yield 3;
    console.log('dddd',result)
}

// next() {value:指令对象，done：false}
