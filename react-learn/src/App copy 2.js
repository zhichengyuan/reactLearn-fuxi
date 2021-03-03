import React,{useState,useEffect} from  'react'


function Text(props) {
    console.log('组件渲染了')
    useEffect(() => {
        console.log('副作用函数，仅挂载时运行一次')
        return () => {
            console.log('清理函数，仅卸载时运行一次')
        }
    }, [])
    const [, forceUpdate] = useState({})
    return <h1>Text组件
        <button onClick={() => {
            forceUpdate({})
        }}>强制刷新</button>
    </h1>
}


export default function App() {
    const [point, setPoint] = useState({x:0,y:0})
    const [show, setShow] = useState(true)
    return <div style={{
        paddingTop:200
    }}>
        {
            show && <Text/>
        }
        <button onClick={() => {
            setShow(!show)
        }}>显示/隐藏</button>
    </div>
}