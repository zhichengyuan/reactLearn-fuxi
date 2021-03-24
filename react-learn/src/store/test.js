import store from './index'
import {createChange} from './action/student/searchCondition'
import { setIsLoading,fetchStudents } from './action/student/searchResult'
// import { fetchUser } from './action/usersAction'

// store.dispatch(fetchUser());//正在加载
// console.log(store.getState())
store.dispatch(createChange({
    key:'1',
    page:2
}))
store.dispatch(setIsLoading(true));
store.dispatch(fetchStudents(store.getState().students.condition));


