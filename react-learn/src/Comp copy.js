import React, { Component } from 'react'

export default class Comp extends Component {
    state = {
        n:0
    }
    handleClick = () => {
        this.setState({
            n:this.state.n + 1
        },() => {
            //状态完成改变之后触发,该回调运行在render之后
            console.log(this.state.n)
        })
        console.log(this.state.n);//还没有重新渲染，说明目前状态还没有改变
    }
    render() {
        console.log('render')
        return (
            <div>
                <h1>{this.state.n}</h1>
                <p>
                    <button onClick={this.handleClick}>点击</button>
                </p>
            </div>
        )
    }
}
