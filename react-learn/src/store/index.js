//用于创建仓库，并导出
import { createStore,applyMiddleware } from 'redux'
// import { createStore,bindActionCreators } from 'redux'
import reducer from './reducer'
import logger from 'redux-logger'
// import thunk from 'redux-thunk'
import promise from 'redux-promise'



//应用中间件，方式1：
export default createStore(reducer,
    applyMiddleware(
        // thunk,
        promise,
        logger
    )
);





