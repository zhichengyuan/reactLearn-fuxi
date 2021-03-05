// import React,{useReducer} from  'react'
import React,{useState,useRef,useEffect} from  'react'

export default function App() {
    // const inpRef = useRef();
    const timerRef = useRef();
    const [n, setN] = useState(5);
    useEffect(() => {
        if(n===0) {
            return
        }
        timerRef.current = setTimeout(() => {
            console.log(n)
            setN(n - 1)
        },1000)
        return () => {
            clearTimeout(timerRef.current);
        }
    }, [n])
    return <div>
        <h1>{n}</h1>   
    </div>
}

