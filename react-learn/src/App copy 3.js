// import React,{useReducer} from  'react'
import React from  'react'
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom'

function A() {
    return <h1>组件A</h1>
}
function B() {
    return <h1>组件B</h1>
}
function C() {
    return <h1>
        找不到组件
        <Route path="/abc" component={D}></Route>
        </h1>
}
function D() {
    return <span>组件D</span>
}

class App extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/a" exact  component={A}></Route>
                    <Route path="/a/b" exact component={B}></Route>
                    <Route component={C}></Route>
                </Switch>
            </Router>
            
        )
    }
}

export default App;