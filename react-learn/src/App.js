// import React,{useReducer} from  'react'
import React,{useState} from  'react'
import './App.css'

import { Transition } from 'react-transition-group';

const duration = 2000;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
}

const transitionStyles = {
  entering: { opacity: 1 },
  entered:  { opacity: 1 },
  exiting:  { opacity: 0 },
  exited:  { opacity: 0 },
};


export default function App() {
    const [inProp, setInProp] = useState(true);
    return (
      <div>
        <Transition in={inProp} timeout={duration} appear
            addEndListener={(node,done) => {
                console.log(node,done);
                node.addEventListener("transitionend",()=> {
                    console.log('过渡结束了')
                },{once:true})
                // done()
            }}
        >
            {state => {
                console.log(state);
                return <div className={state}>
                    I'm a fade Transition!
                </div>
            }}
        {/* {state => (
            <div style={{
                ...defaultStyle,
                ...transitionStyles[state]
            }}>
                I'm a fade Transition!
            </div>
        )} */}
        </Transition>
        <button onClick={() => setInProp(!inProp)}>
          Click to Enter
        </button>
      </div>
    );
  };