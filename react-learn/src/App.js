import React, { Component } from 'react'
import ReactDOM from 'react-dom'

function ChildA(){
    return ReactDOM.createPortal(<div className="child-a" style={{
        marginTop:200
    }}>
        <h1>1</h1>
    <ChildB/>
</div>,document.querySelector('.modal'))
}
function ChildB() {
    return <div className="child-b">
        <h1>2</h1>
    </div>
}

export default class App extends Component {
    render() {
        return (
            <div className="app" onClick={(e) => {
                console.log('APP被点击了',e.target)
            }}>
                <h1>APP</h1>
                <ChildA/>
            </div>
        )
    }
}
