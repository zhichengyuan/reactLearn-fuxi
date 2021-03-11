


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
    return <h1>组件C</h1>
}

class App extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/a"  component={A}></Route>
                    <Route path="/a/b" component={B}></Route>
                    <Route component={C}></Route>
                </Switch>
            </Router>
            
        )
    }
}

export default App;