// import React,{useReducer} from  'react'
import React from  'react'
import { BrowserRouter as Router,Route,NavLink,Redirect, Switch} from 'react-router-dom'
import './App.css'

function A(props) {
    return <h1>A页</h1>
}


function B(props) {
    return <h1>B页</h1>
}

function NavBar() {
    return <div>
        <p>
            <NavLink to='/a'
                activeStyle={{
                    fontSize:'18px'
                }}
                innerRef={node => {console.log(node)}}
            >去a页</NavLink>
        </p>
        <p>
            <NavLink 
             activeClassName="selected"
             to ={{
                 pathname:'/b',
                 hash:'#2323',
                 search:"?name=34&sex=1"
             }}
            >去b页</NavLink>
        </p>
        <p>
            <NavLink 
             to ="/abc"
            >其他页面</NavLink>
        </p>
    </div>
}

class App extends React.Component {
    render() {
        return (
            <div>
                <Router>
                    <NavBar></NavBar>
                    <Switch>
                        <Route path="/a" component={A}/>
                        <Route path="/b" component={B}/>
                        <Redirect 
                        from='/abc/:id'
                        to="/a/:id"/>
                    </Switch>
                </Router>
                
            </div>
        )
    }
}
export default App;