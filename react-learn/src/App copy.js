// import React,{useReducer} from  'react'
import React,{useState} from  'react'
import { CSSTransition,SwitchTransition } from 'react-transition-group';
import './App.css'
import "animate.css"


export default function App() {
    const [show, setShow] = useState(true)
    return (
      <div className="container">
          <SwitchTransition mode="out-in">
              <CSSTransition appear timeout={1000} key={show}>
                  <div>
                        <h1>{show? "title1" : "title2"}</h1>
                  </div>
              </CSSTransition>
          </SwitchTransition>
          <button onClick={() => setShow(!show)}>按钮</button>
      </div>
    );
  };