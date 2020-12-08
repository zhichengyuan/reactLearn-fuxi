import React, { Component } from 'react';

class MyClassComp extends Component {
    
    render() {
        if(this.props.obj) {
            return (
                <>
                    <p>{this.props.obj.name}</p>
                    <p>{this.props.obj.age}</p>
                </>
            )
        }
        return (
        <h1>类组件内容{this.props.number}</h1>
        );
    }
}

export default MyClassComp;