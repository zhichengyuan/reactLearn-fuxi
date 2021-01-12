import React, { Component } from 'react'
import {A,B} from './components/Comps'
import withLogin from './HOC/withLogin'

const ALog = withLogin(A)
const BLog = withLogin(B)
export default class App extends Component {
  render() {
    return (
      <div>
        <ALog isLogin a={1}/>
        <BLog isLogin b={2}/>
      </div>
      
    )
  }
}
