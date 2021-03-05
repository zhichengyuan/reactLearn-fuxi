// import React,{useReducer} from  'react'
import React,{useState,useLayoutEffect,useRef,useDebugValue} from  'react'

function useTest() {
    const [stus, ] = useState([])
    useDebugValue('学生集合')
    return stus
}

export default function App() {
    const [n, setN] = useState(0);
    useState('abc')
    const h1Ref = useRef();
    useTest();
    useLayoutEffect(()=> {
        h1Ref.current.innerText = Math.random().toFixed(2);
    })
    return <div>
        <h1 ref={h1Ref}>{n}</h1>
        <button onClick={() => {
            setN(n+1)
        }}>n+1</button>
    </div>
}

