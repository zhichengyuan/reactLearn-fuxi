// import React,{useReducer} from  'react'
import React from  'react'
import { BrowserRouter as Router,Route,Link, Switch} from 'react-router-dom'
import './App.css'
import RootRouter from './RootRouter'


class App extends React.Component {
    render() {
        return (
            <Router>
                <nav>
                    <Link to="/">首页</Link>
                    <Link to="/news" >新闻页</Link>
                </nav>
                <div>
                    {/* 匹配网站的顶级页面 */}
                    <RootRouter/>
                </div>
            </Router>
        )
    }
}
export default App;