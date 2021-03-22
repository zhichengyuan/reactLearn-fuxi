import { createStore,applyMiddleware } from 'redux'
// import { createStore,bindActionCreators } from 'redux'
import reducer from './reducer'
import logger from 'redux-logger'
import thunk from 'redux-thunk'



//应用中间件，方式1：
export default createStore(reducer,
    applyMiddleware(
        thunk,
        logger
    )
);





