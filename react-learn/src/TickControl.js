import React, { Component } from 'react'
import Tick from './MyCom'

export default class TickControl extends Component {
    state = {
        isOver:false//倒计时是否完成
    }
    constructor(props){
        super(props)
        // this.handleOver = this.handleOver.bind(this);
    }
    handleClick(){
        console.log('点击了')
    }
    //结果：handleClick不在原型上，而在对象上
    handleOver = () => {
        this.setState({
            isOver:true
        })
    }
    render() {
        let status = '正在倒计时';
        if(this.state.isOver) {
            status = '倒计时完成'
        }
        return (
            <div>
                <Tick onClick={this.handleClick} onOver={this.handleOver.bind(this)} number={10}></Tick>

                <h2>{status}</h2>
            </div>
        )
    }
}
