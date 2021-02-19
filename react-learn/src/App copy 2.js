import React, { Component } from 'react'
// import Banner from './components/common/Banner/Test'

class A extends Component {
  render() {
    return <h1 ref={this.props.ref1}>
    组件A
      s<span>{this.props.words}</span>
    </h1>
  }
}


//传递函数组件A，得到一个新的组NewA
// const NewA = React.forwardRef(A)
export default class App extends Component {
  ARef = React.createRef();
  componentDidMount() {
    console.log(this.ARef)
  }
  render() {
    return (
      <div>
        <A ref1={this.ARef} words="dddd"/>
      </div>
      
    )
  }
}
