import {takeEvery,delay,put} from 'redux-saga/effects'
import { actionTypes,increase,decrease } from '../action/counter'

function* asyncIncrease() {
        var result =  yield delay(2000,12);
        console.log('触发了asyncIncrease',result);
        yield put(increase());
}
function* asyncDecrease() {
        yield delay(2000);
        console.log('触发了asyncDecrease');
        yield put(decrease());
}
//eslint-disable-next-line
export default function* () {
    
        yield takeEvery(actionTypes.asyncIncrease,asyncIncrease)
        yield takeEvery(actionTypes.asyncDecrease,asyncDecrease)
        console.log('正在监听asyncIncrease、asyncDecrease')
    
}