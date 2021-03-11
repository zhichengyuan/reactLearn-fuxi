
import React from  'react'
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import qs from 'query-string'

function NotFound() {
    return <h1>找不到页面</h1>
}
function A(props) {
    //http://localhost:3000/a?a=d&b=12#c=121&d=343
    console.log(props.location)
    var query = qs.parse(props.location.search);
    var hash = qs.parse(props.location.hash);
    console.log(query);
    console.log(hash);
    return <div>
        <p>组件A</p>
        <p>访问地址：{props.location.pathname}</p>
        <p>
            地址参数：a:{query.a},b:{query.b}
        </p>
        <p>
            hash：c:{hash.c},d:{hash.d}
        </p>
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