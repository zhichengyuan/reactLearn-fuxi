// import React,{useReducer} from  'react'
import React,{useState} from  'react'
import { CSSTransition } from 'react-transition-group';
import './App.css'

function Comp1({show}) {
    return <CSSTransition mountOnEnter appear timeout={2000} in={show}>
                <h1 className="title">组件1</h1>
            </CSSTransition>
}
function Comp2({show}) {
    // return <h1>组件2</h1>
    return <CSSTransition mountOnEnter appear timeout={2000} in={show}>
                <h1 className="title">组件2</h1>
            </CSSTransition>
}

export default function App() {
    const [show, setShow] = useState(true)
    return (
      <div className="container">
          
          <div className="comp-container">
            <Comp1 show={show}></Comp1>
            <Comp2 show={!show}></Comp2>
          </div>
          <button onClick={() => setShow(!show)}>按钮</button>
      </div>
    );
  };