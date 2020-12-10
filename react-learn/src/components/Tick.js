import React, { Component } from 'react'

export default class Tick extends Component {
    //初始化状态
    state ={
        left:this.props.number
    }

    timer = setInterval(() => {
        this.setState({
            left:this.state.left -1
        })
        if(this.state.left === 0) {
            clearInterval(this.timer);
        }
    },1000)
    constructor(props) {
        super(props);
        //初始化状态
        
        // this.timer = setInterval(() => {
        //     this.setState({
        //         left:this.state.left -1
        //     })
        //     //重新渲染
        //     this.render()
        // },1000)
    }
    render() {
        return (
            <div>
                <h1>倒计时剩余时间：{this.state.left}</h1>
            </div>
        )
    }
}
