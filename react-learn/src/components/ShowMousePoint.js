import React, { Component } from 'react'
import './style.css'

export default class ShowMousePoint extends Component {

    state = {
        x:0,
        y:0
    }

    divRef = React.createRef()

    handleMouseMove = e => {
        // 更新x和y的值
        // console.log(e.e.pageX,e.pageY);
        const {left,top} = this.divRef.current.getBoundingClientRect();
        const x = e.clientX - left;
        const y = e.clientY - top;
        this.setState({
            x,
            y
        })
        
    }
    render() {
        return (
            <div ref={this.divRef} className="point" onMouseMove={this.handleMouseMove}>
                <p>
                    鼠标x：{this.state.x}
                    鼠标y：{this.state.y}
                </p>
            </div>
        )
    }
}
