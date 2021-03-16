// import React,{useReducer} from  'react'
import React from  'react'
import { BrowserRouter as Router} from 'react-router-dom'
import * as Pages from './page'
import './App.css'
import TransitionRoute from './TransitionRoute'

class App extends React.Component {
    render() {
        return (
            <div className="main">
                <Router>
                    <Pages.NavBar></Pages.NavBar>
                    <div className="page-container">
                        <TransitionRoute path='/' exact component={Pages.Home}/>
                        <TransitionRoute path='/news' exact component={Pages.News}/>
                        <TransitionRoute path='/personal' exact component={Pages.Personal}/>
                    </div>
                    
                </Router>
            </div>
        )
    }
}
export default App;