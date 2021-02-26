import React,{useState} from  'react'

// export default class App extends Component {
//     render() {
//         return (
//             <div>
//                 <button onClick={() => {
//                     //不会运行shouldComponentUpdate
//                     this.forceUpdate();//强制刷新
//                 }}></button>
//             </div>
//         )
//     }
// }


export default function App() {
    const [,forceUpdate] = useState({})
    return <div>
        <p >
            <button onClick={() => {
                forceUpdate({})
            }}>强制刷新</button>
        </p>
        
    </div>
}