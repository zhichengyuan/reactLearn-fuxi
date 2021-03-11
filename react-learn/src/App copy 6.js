
import React from  'react'
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import qs from 'query-string'

function NotFound() {
    return <h1>找不到页面</h1>
}
function News(props) {
    //http://localhost:3000/news?year=2019&month=12&day=6
    //http://localhost:3000/news/2019/12/6

    console.log(props.match)
 
    return <div>
        <p>显示{props.match.params.year}年{props.match.params.month}月{props.match.params.day}日的新闻</p>
     
    </div>
}


class App extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/news/:year(\d+)/:month(\d+)/:day(\d+)?" exact component={News}/>
                    <Route  component={NotFound}/>
                </Switch>
            </Router>
        )
    }
}
export default App;