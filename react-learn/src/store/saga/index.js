import {all} from 'redux-saga/effects'
import counterTask from './counterTask';
import studentTask from './studentTask';
/**
 * saga任务
 */
//eslint-disable-next-line
export default function* () {
    yield all([counterTask(),studentTask()])
    console.log('saga完成')
}

// next() {value:指令对象，done：false}
