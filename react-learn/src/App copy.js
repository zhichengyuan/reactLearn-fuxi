// import React,{useReducer} from  'react'
import React,{useState} from  'react'
import { CSSTransition } from 'react-transition-group';
import './App.css'

function Comp1(show) {
    return <h1>组件1</h1>
}
function Comp2(show) {
    return <h1>组件2</h1>
}

export default function App() {
    const [show, setShow] = useState(true)
    return (
      <div>
          <CSSTransition appear timeout={2000} in={show}>
                <h1>一个标题</h1>
          </CSSTransition>
          <button onClick={() => setShow(!show)}>按钮</button>
      </div>
    );
  };