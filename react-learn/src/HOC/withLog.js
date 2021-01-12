import React from 'react'

export default function withLog(Comp) {
    return class LogWrapper extends React.Component {
        componentDidMount(){
            console.log(`日志：组件${Comp.name}被创建了！${Date.now()}`)
        }
        componentWillUnmount(){
            console.log(`日志：组件${Comp.name}被销毁了了！${Date.now()}`)
        }
        render() {
            return <Comp {...this.props}/>
        }
    }
}

