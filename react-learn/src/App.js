import React, { Component } from 'react'
var prev
export default class App extends Component {
    render() {
        return (
            <div onClick={(e) => {
                console.log(prev === e);
                console.log('react div被点击了')
            }}>
                <button onClick={(e) => {
                    console.log("react:按钮被点击了");
                    prev = e;
                    // e.persist();
                    setTimeout(() => {
                        console.log(e.type);
                    },0)
                    // console.log(e.nativeEvent)
                    // e.nativeEvent.stopImmediatePropagation()
                    // console.log(e.isPropagationStopped());
                    // e.stopPropagation();
                    // console.log(e.isPropagationStopped());
                }}>按钮</button>
            </div>
        )
    }
}

// document.querySelector("#root").onclick = function(e) {
//     console.log('真实的dom事件：id为root的div被点击了');
//     e.stopPropagation();
// }