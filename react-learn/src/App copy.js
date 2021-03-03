import React,{useState,useEffect} from  'react'
var ref = React.createRef();
let timer = null;//定时器ID


function stop() {
    clearInterval(timer);
}
/**
 * 一个可移动的快,该组件每次渲染完成后，始终从0坐标在1秒钟内，移动到目标点坐标
 */

 function MovableBlock(props) {
     console.log('渲染组件')
     useEffect(() => {
         console.log("副作用函数")
         stop();
         //渲染完成后
         const div = ref.current;
         let curTimes = 0;//当前移动的次数
         const disX = props.left / 100;//横坐标上每次移动的距离
         const disY = props.top / 100 ;//纵坐标上每次移动的距离
         timer = setInterval(() => {
            curTimes ++;//移动次数—+1
            const newLeft = curTimes * disX;
            const newTop = curTimes * disY;
            div.style.left = newLeft + 'px';
            div.style.top = newTop + 'px';
            if(curTimes === 100) {
                stop()
            }
         },16)
         return stop
     },[props.left,props.top])
     return <div ref={ref} style={{
         width:100,
         height:100,
         position:"fixed",
         background:"#f40"
     }}></div>
 }

export default function App() {
    const [point, setPoint] = useState({x:0,y:0})
    const [show, setShow] = useState(true)
    const txtX = React.createRef();
    const txtY = React.createRef();
    return <div style={{
        paddingTop:200
    }}>
        {
            show && (
                <div>
                    x: <input type="number" ref={txtX} />
                    y: <input type="number" ref={txtY}  />
                    <button onClick={() => {
                        setPoint({
                            x:parseInt(txtX.current.value),
                            y:parseInt(txtY.current.value),
                        })
                    }}>确定</button>
                    <MovableBlock top={point.x} left={point.y}/>
                </div>
            )
        }
        <button onClick={() => {
            setShow(!show)
        }}>显示/隐藏</button>
    </div>
}