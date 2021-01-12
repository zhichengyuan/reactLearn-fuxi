import React, { Component } from 'react'

export class A extends Component {
    //不再关注该组件不相关的事情
    render() {
    return <h1>A{this.props.a}</h1>
    }
}
export class B extends Component {
    //不再关注该组件不相关的事情
    render() {
        return <h1>B{this.props.b}</h1>
    }
}
