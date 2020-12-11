import React, { Component } from 'react'

export default class MyCom extends Component {
    constructor(props){
        super(props);
        this.state = {
            number:props.number
        }
        const timer = setInterval(() => {
            this.setState({
                number:this.state.number -1
            })
            if(this.state.number === 0 ){
                clearInterval(timer);
                //倒计时完成
                this.props.onOver && this.props.onOver();
            }
        }, 1000);
    }
    render() {
        return (
            <div onClick={this.props.onClick}>
                倒计时：{this.state.number}
            </div>
        )
    }
}
