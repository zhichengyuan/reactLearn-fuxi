import React, { Component } from 'react'
import withLog from './HOC/withLog'

class A extends Component {
  render() {
    return <h1>组件A{this.props.a}</h1>
  }
}

let AComp = withLog(A);


export default class App extends Component {
  ARef = React.createRef();
  componentDidMount() {
    console.log(this.ARef)
  }
  render() {
    return (
      <div>
        ddd
        <AComp str='1212' a={'dssss'}/> 
      </div>
      
    )
  }
}
