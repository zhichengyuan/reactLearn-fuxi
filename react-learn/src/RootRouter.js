import React from 'react'
import {Route,Switch} from 'react-router-dom'
import routeConfig from './routeConfig'

/**
 * 根据一个路由配置数组，遍历该数组，得到一组Route组件
 * @param {*} routes 
 */
function getRoutes(routes) {
    
    let rt = routes.map((rt,i) => {
        const {children,...rest} = rt;
        return <Route key={i} {...rest}/>
    })
    return <Switch>
        {rt}
    </Switch>
}

/**
 * 使用Route组件，根据不同的路径，渲染顶级页面
 */

export default function RootRouter() {
    console.log(getRoutes(routeConfig));
    return (
        <>
            {/* 返回一组Route */}
            {getRoutes(routeConfig)}
        </>
    )
}
