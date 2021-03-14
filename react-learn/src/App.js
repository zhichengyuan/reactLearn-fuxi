// import React,{useReducer} from  'react'
import React from  'react'
import { BrowserRouter as Router,Route,Link, Switch} from 'react-router-dom'
import './App.css'
import Home from './Home'
import Login from './Login'
import Personal from './Personal'
import ProtectedRoute from './ProtectedRoute'

class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <ul>
                        <li>
                            <Link to='/'>首页</Link>
                        </li>
                        <li>
                            <Link to='/login'>登录页</Link>
                        </li>
                        <li>
                            <Link to='/personal'>个人中心</Link>
                        </li>
                    </ul>
                    <div>
                        <Switch>
                            <Route path="/login" component={Login}/>
                            <ProtectedRoute path="/personal" component={Personal}/>
                            {/* render和children的区别：render时匹配后才会运行，children无论是否匹配都会运行 */}
                            {/* <Route path="/personal" render={() => {
                                return <h1>dsfasdfs</h1>
                            }} /> */}
                            <Route path="/" component={Home}/>
                        </Switch>
                    </div>
                </div>
            </Router>
        )
    }
}
export default App;