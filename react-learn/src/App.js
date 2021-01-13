import React, { Component } from 'react'
import {A,B} from './components/Comps'
import withLogin from './HOC/withLogin'
import withLog from './HOC/withLog'

let AComp = withLogin(withLog(A,'dsds'))
let BComp = withLogin(withLog(B,'fsss'))
export default class App extends Component {
  render() {
    return (
      <div>
        <AComp isLogin a={1}/>
        <BComp isLogin b={2}/>
      </div>
      
    )
  }
}
