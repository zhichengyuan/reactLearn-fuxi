// import React,{useReducer} from  'react'
import React,{useState} from  'react'

class Test extends React.Component {
    render () {
        return <div>
            <h1>{this.props.text}</h1>
            <button onClick={() => {
                let newValue = this.props.text + 1;
                this.props.onClick && this.props.onClick(newValue)
            }}>+1</button>
        </div>
    }
}

export default function App() {
    const [txt, setTxt] = useState(1)
    const [n, setN] = useState(0)
    return <div>
        {/* 函数的地址每次渲染都发生了变化，导致了子组件跟着重新渲染，若子组件是经过优化的组件，则可能导致优化失效 */}
       <Test text={txt} onClick={(value) => {
           setTxt(value);
       }}/>
       <input type="number" value={n} onChange={(e) => {
           setN(e.target.value)
       }}/>
    </div>
}

