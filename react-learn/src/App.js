// import React,{useReducer} from  'react'
import React,{useState,useRef,useEffect} from  'react'

export default function App() {
    // const inpRef = useRef();
    const [n, setN] = useState(5);
    const nRef = useRef(n);//{current:10}
    useEffect(() => {
        const timer = setInterval(() => {
            nRef.current --;
            setN(nRef.current);
            if(nRef.current === 0) {
                clearInterval(timer)
            }
        },1000)
        return () => {
            clearTimeout(timer);
        }
    }, [])
    return <div>
        <h1>{n}</h1>   
    </div>
}

