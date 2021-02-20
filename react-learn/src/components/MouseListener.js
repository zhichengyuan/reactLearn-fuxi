import React, { Component } from 'react'
import './style.css'

export default class MouseListener extends Component {

    state = {
        x:0,
        y:0
    }

    divRef = React.createRef()

    handleMouseMove = e => {
        // 更新x和y的值
        // console.log(e.e.pageX,e.pageY);
        const {left,top} = this.divRef.current.getBoundingClientRect();
        const x = e.pageX - left;
        const y = e.pageY - top;
        this.setState({
            x,
            y
        })
        
    }
    render() {
        return (
            <div ref={this.divRef} className="point" onMouseMove={this.handleMouseMove}>
              { this.props.render?this.props.render(this.state):'默认值'}
            </div>
        )
    }
}
