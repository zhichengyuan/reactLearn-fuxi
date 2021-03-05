// import React,{useReducer} from  'react'
import React,{useState} from  'react'
import { CSSTransition } from 'react-transition-group';
import './App.css'

function MyTransition({show,children}) {
    return <CSSTransition mountOnEnter appear timeout={2000} in={show}>
                {children}
            </CSSTransition>
}

function Comp1() {
    return <h1 className="title">组件1</h1>
}
function Comp2() {
    // return <h1>组件2</h1>
    return  <h1 className="title">组件2</h1>
           
}

export default function App() {
    const [show, setShow] = useState(true)
    return (
      <div className="container">
          
          <div className="comp-container">
              <MyTransition show={show}>
                    <Comp1 ></Comp1>
              </MyTransition>
              <MyTransition show={show}>
                    <Comp2 ></Comp2>
              </MyTransition>
            
          </div>
          <button onClick={() => setShow(!show)}>按钮</button>
      </div>
    );
  };