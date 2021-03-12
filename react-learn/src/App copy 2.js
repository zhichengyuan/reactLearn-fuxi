// import React,{useReducer} from  'react'
import React from  'react'
import { BrowserRouter as Router,Route,Link} from 'react-router-dom'
// import Link from './Link'

function A(props) {
    return <h1>A页</h1>
}


function B(props) {
    return <h1>B页</h1>
}

function NavBar() {
    return <div>
        <p>
            <Link to='/a'
                innerRef={node => {console.log(node)}}
            >去a页</Link>
        </p>
        <p>
            <Link 
             to ={{
                 pathname:'/b',
                 hash:'#2323',
                 search:"?name=34&sex=1"
             }}
            >去b页</Link>
        </p>
    </div>
}

class App extends React.Component {
    render() {
        return (
            <div>
                <Router>
                    <NavBar></NavBar>
                    <Route path="/a" component={A}/>
                    <Route path="/b" component={B}/>
                </Router>
                
            </div>
        )
    }
}
export default App;