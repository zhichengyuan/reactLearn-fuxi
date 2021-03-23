//创建一个唯一的reducer
// import loginUser from './loginUser'
// import users from './users'
import { combineReducers } from 'redux'
import students from './student'

export default combineReducers({
    students
})
