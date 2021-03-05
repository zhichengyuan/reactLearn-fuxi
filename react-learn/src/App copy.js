// import React,{useReducer} from  'react'
import React,{useState,useRef} from  'react'

export default function App() {
    const inpRef = useRef()
    const [n, setN] = useState(0)
    return <div>
        <input type="text" ref={inpRef}/>
        <button onClick={() => {
            console.log(inpRef.current.value)
        }}>得到值</button>  
        <input type="number" value={n} onChange={(e) => {
            setN(e.target.value)
        }}/>      
    </div>
}

