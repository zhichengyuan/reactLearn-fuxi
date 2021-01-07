import React, { Component } from 'react'
import FuncDefault from './FuncDefault'
import ClassDefault from './ClassDefault'
import ValidationComp from './ValidationComp'
export default class App extends Component {
  
  render() {
    
    return (
      <div>
        <ValidationComp a={1} b/>
      </div>
      
    )
  }
}
