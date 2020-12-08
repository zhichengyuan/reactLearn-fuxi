import React from 'react'

export default function MyFuncComp(props) {
    console.log(props);
    if(props.ui) {
        return props.ui
    }
    return (
    <h1>函数组件内容,目前数字为：{props.number}</h1>
    )
}
