import React, { Component } from 'react'
import Comp from './Comp'
export default class App extends Component {
 
  render() {
    
    return (
      <div>
        <Comp html={<h1>的事发生飞洒发</h1>}>
          <h2>children</h2>
        </Comp>
        <Comp >
          <h2>children</h2>
        </Comp>
        
      </div>
      
    )
  }
}
