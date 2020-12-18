import React, { Component } from 'react'
import OldLifeCycle from './OldLifeCycle'

export default class App extends Component {
  state = {
    number:1,
    show:true
  }
  handleClick = () => {
    this.setState({
      number:this.state.number+1
    })
  }
  render() {
    const comp = this.state.show ?<OldLifeCycle n={this.state.number}></OldLifeCycle>:null;
    return (
      <div>
        {comp}
        <button onClick={this.handleClick}>加一</button>
        <button onClick={() => {
          this.setState({
            show:!this.state.show
          })
        }}>显示/隐藏</button>
      </div>
    )
  }
}
