//创建一个唯一的reducer

import { combineReducers } from 'redux'
import students from './student'
import counter from './counter'

export default combineReducers({
    students,
    counter
})
