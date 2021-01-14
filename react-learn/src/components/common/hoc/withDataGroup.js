//根据数据渲染出一组表单组件

import React from 'react'
import types from '../../../utils/commonTypes'

export default function withDataGroup(Comp) {
    return class DataGroupWrapper extends React.Component {
        static defaultProp = {
            datas:[]
        }
        static propTypes = {
            datas:types.groupDatas
        }
        render() {
            const comps =this.props.datas.map(it => <Comp key={it.value} info={it} {...this.props}/>)
            return (
                <>
                    {comps} 
                </>
            )
        }
    }
}
