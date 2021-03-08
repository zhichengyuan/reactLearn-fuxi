// import React,{useReducer} from  'react'
import React,{useState} from  'react'
import { CSSTransition } from 'react-transition-group';
import './App.css'
import "animate.css"

function MyTransition({show,children}) {
    return <CSSTransition mountOnEnter appear timeout={800} in={show}
            classNames={{
                exitActive:"animate__fadeOutLeft",
                exitDone:"exit-done",
                enterActive:"animate__fadeInRight",
                appearActive:"animate__fadeInRight"
                // enterActive:"animate__bounceIn"
            }}
            >
                {children}
            </CSSTransition>
}

function Comp1() {
    return <h1 className="title animate__animated animate__faster">组件1</h1>
}
function Comp2() {
    // return <h1>组件2</h1>
    return  <h1 className="title animate__animated animate__faster">组件2</h1>
           
}

export default function App() {
    const [show, setShow] = useState(true)
    return (
      <div className="container">
          
          <div className="comp-container">
              <MyTransition show={show}>
                    <Comp1 ></Comp1>
              </MyTransition>
              <MyTransition show={!show}>
                    <Comp2 ></Comp2>
              </MyTransition>
            
          </div>
          <button onClick={() => setShow(!show)}>按钮</button>
      </div>
    );
  };