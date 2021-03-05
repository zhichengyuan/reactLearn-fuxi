// import React,{useReducer} from  'react'
import React,{useRef,useImperativeHandle} from  'react'

function Test(props,ref) {
    useImperativeHandle(
        ref,
        () => {
            //如果不给依赖项，则每次运行函数组件都会调用该方法
            //如果使用了依赖项，则第一次调用后，会进行缓存，只有依赖项发生变化时才会重新调用函数
            //相当于给ref.current = 1
            console.log('123')
            return {
                method(){
                    console.log('调用了方法')
                }
            }
        },[]
    )
    return <h1 ref={ref}>Test Component</h1>
}

const TestWrapper = React.forwardRef(Test);

// class Test extends React.Component{
//     method() {
//         console.log('我被调用了')
//     }
//     render() {
//         return <h1>Test Component</h1>
//     }
// }

export default function App() {
    const testRef = useRef();
    return <div>
        {/* <Test ref={testRef}></Test> */}
        <TestWrapper ref={testRef}></TestWrapper>
        <button onClick={() => {
        console.log(testRef.current);
            
            testRef.current.method();
        }}>点击调用Test组件的method方法</button>
    </div>
}

