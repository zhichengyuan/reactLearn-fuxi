import React, { Component } from 'react'
// import Banner from './components/common/Banner/Test'

function A(props,ref) {
  return <h1 ref={ref}>
    组件A
<span>{props.words}</span>
    </h1>
}
//传递函数组件A，得到一个新的组NewA
const NewA = React.forwardRef(A)
export default class App extends Component {
  ARef = React.createRef();
  componentDidMount() {
    console.log(this.ARef)
  }
  render() {
    return (
      <div>
        <NewA ref={this.ARef} words="dddd"/>
      </div>
      
    )
  }
}
