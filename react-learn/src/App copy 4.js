
import React from  'react'
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import qs from 'query-string'

function NotFound() {
    return <h1>找不到页面</h1>
}
function A(props) {
    //http://localhost:3000/a?a=d&b=12#c=121&d=343
    console.log(props.match)
 
    return <div>
        <p>组件A</p>
     
    </div>
}


class App extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/a" exact component={A}/>
                    <Route  component={NotFound}/>
                </Switch>
            </Router>
        )
    }
}
export default App;