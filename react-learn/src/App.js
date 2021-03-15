// import React,{useReducer} from  'react'
import React from  'react'
import { BrowserRouter as Router,} from 'react-router-dom'
import Link from './BetterLink'
import './App.css'
import RootRouter from './RootRouter'


class App extends React.Component {
    render() {
        return (
            <Router>
                <nav>
                    <Link to={{name:'home'}}>首页</Link>
                    <Link to={{name:'news'}} >新闻页</Link>
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