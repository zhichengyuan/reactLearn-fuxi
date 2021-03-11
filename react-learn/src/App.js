// import React,{useReducer} from  'react'
import React from  'react'
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Login from './pages/Login'
import Admin from './pages/Admin'


class App extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/login" exact component={Login}/>
                    <Route path="/" component={Admin}/>
                </Switch>
            </Router>
        )
    }
}
export default App;