import store from './index'
import { fetchUser } from './action/usersAction'

store.dispatch(fetchUser());//正在加载


