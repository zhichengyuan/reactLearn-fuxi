import {take} from 'redux-saga/effects'
import { actionTypes } from '../action/counter'
//eslint-disable-next-line
export default function* () {
    while(true) {
        const action = yield take(actionTypes.asyncIncrease)
        console.log('监听到了async-increase',action)
    }
}