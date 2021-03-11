
import React from  'react'
import { BrowserRouter as Router,Route,Switch,withRouter} from 'react-router-dom'
// import qs from 'query-string'

const AWrapper = withRouter(A)

function News(props) {
    //http://localhost:3000/news?year=2019&month=12&day=6
    //http://localhost:3000/news/2019/12/6
 
    return <div>
      <h1>新闻列表</h1>
        <AWrapper/>
    </div>
}

function A(props) {
    console.log(props);
    return <button onClick={() => {
        props.history.push('/')
    }}>返回首页</button>
}

function Index() {
    return <h1>
        首页
    </h1>
}

function NotFound() {
    return <h1>找不到页面</h1>
}


class App extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path='/news'component={News}/>
                    <Route path='/' exact component={Index}/>
                    <Route  component={NotFound}/>
                </Switch>
            </Router>
        )
    }
}
export default App;