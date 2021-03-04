import React,{useState} from  'react'
import useTimer from './myHooks/useTimer'

function Test() {
    
    let res = useTimer(10,1000);
    // console.log(res);
    return <h1>倒计时{res}</h1>
}

export default function App() {
    const [show, setShow] = useState(true)
    return <div>
        {
            show && <Test/>
        }
        <button onClick={() => {
            setShow(!show)
        }}>显示/隐藏</button>
    </div>
}