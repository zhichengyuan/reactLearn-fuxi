// import React,{useReducer} from  'react'
import React from  'react'
import { BrowserRouter as Router,Route,Link} from 'react-router-dom'
import './App.css'
import routeConfig from './RouteConfig'

function User({match}) {
    return <div>
        <h1>User组件固定的区域</h1>
        <Link to={routeConfig.user.pay.root}>支付</Link>
        <Link to={routeConfig.user.update}>更新</Link>
        <div style={{
            width:500,
            height:500,
            background:"lightblue",
            margin:"0 auto"
        }}>
            {/* User组件变化的区域：根据地址的不同发生变化 */}
            <Route path={routeConfig.user.update} component={UserUpdate}/> 
            <Route path={routeConfig.user.pay.root} component={UserPay}/>
        </div>
    </div>
}

function UserUpdate(props) {
    return <h1>
        修改用户信息
    </h1>
}

function UserPay() {
    return <h1>
        支付
    </h1>
}

class App extends React.Component {
    render() {
        return (
            <div>
               <Router>
                   <Route path={routeConfig.user.root} component={User}></Route>
               </Router>
                
            </div>
        )
    }
}
export default App;