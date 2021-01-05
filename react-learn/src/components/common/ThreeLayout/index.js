import React from 'react'
import './index.css'

export default function ThreeLayout(props) {
    const defaultProps = {
        leftWidth:200,
        rightWidth:200,
        minWidth:800,
        gap:0,//间隙
    }
    const datas = Object.assign({},defaultProps,props)
    return (
        <div className="three-layout" style={{
            minWidth:datas.minWidth
        }}>
            <div className="main">
                {datas.children}
            </div>
            <div className="aside-left"  style={{
                width:datas.leftWidth,
                marginRight:datas.gap
            }}>
                {datas.left}
            </div>
            <div className="aside-right" style={{
                width:datas.rightWidth,
                marginLeft:datas.gap
            }}>
                {datas.right}
            </div>
        </div>
    )
}
