// import React,{useReducer} from  'react'
import React from  'react'
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom'

function NotFound() {
    return <h1>找不到页面</h1>
}
function A(props) {
    console.log(props)
    return <div>
        <p>组件A</p>
        <button onClick={() => {
            props.history.push('/b','状态数据')
        }}>跳转到/b</button>
    </div>
}
function B(props) {
    console.log(props)
    return <div>
        <p>组件B</p>
        <p>
            获取状态数据：{props.history.location.state}
        </p>
        <button onClick={() => {
            props.history.push('/a')
        }}>跳转到/a</button>
    </div>
}


class App extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/a" exact component={A}/>
                    <Route path="/b" exact component={B}/>
                    <Route  component={NotFound}/>
                </Switch>
            </Router>
        )
    }
}
export default App;