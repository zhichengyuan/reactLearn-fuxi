import {useEffect,useState} from 'react'
/**
 * 组件首次渲染后，启动一个Interval计时器
 * 组件卸载后，清楚该计时器
 */
// export default (func,duration) => {
//     const [number, setNumber] = useState(10);
//     useEffect(() => {
//         console.log('dddssss')
//         const timer = setInterval(func,duration)
//         return () => {
//             clearInterval(timer);
//         }
//     },[])
// }
export default (number,duration) => {
    const [newnumber, setNewnumber] = useState(number);
    useEffect(() => {
        const timer = setInterval(()=>{
            number --;
            setNewnumber(number);
            if(number === 0) {
                clearInterval(timer);
            }
        },duration)
        return () => {
            clearInterval(timer);
        }
        
    },[number])
    return newnumber;
}