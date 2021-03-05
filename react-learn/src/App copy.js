// import React,{useReducer} from  'react'
import React,{useState,useRef,useEffect} from  'react'

class Test extends React.Component{
    method() {
        console.log('我被调用了')
    }
    render() {
        return <h1>Test Component</h1>
    }
}

export default function App() {
    const testRef = useRef();
    return <div>
        <Test ref={testRef}></Test>
        <button onClick={() => {
            testRef.current.method();
        }}>点击调用Test组件的method方法</button>
    </div>
}

