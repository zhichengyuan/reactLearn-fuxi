import React, { Component } from 'react'
import types from '../../../utils/commonTypes'
import PropTypes from 'prop-types'

// class checkbox extends Component {
//     static propTypes = {
//         name:PropTypes.string.isRequired,
//         onChange:PropTypes.func,
//         info:types.singleData.isRequired,
//         choosDatas:types.chooseDatas
//     }

//     handleChange= e => {
//         let val = e.target.value;//读取表单的值
//         let newArr;
//         if(e.target.type ==='checkbox') {
//             //对val进行特殊处理
//             if(e.target.checked) {
//                 newArr = [...this.props.chooseDatas,val];
//             }else {
//                 newArr = this.props.chooseDatas.filter(it => it !==val)
//             }
//         }
//         this.props.onChange && this.props.onChange(newArr);
//     }
//     return(){
//         return (
//             <label>
//                 <input 
//                 type="checkbox" 
//                 name={this.props.name}
//                 value={this.props.info.value}
//                 checked={this.props.chooseDatas.includes(this.props.info.value)}
//                 onChange={this.handleChange}
//                 />
//                 {this.props.info.text}
//             </label>
//         )
//     }
// }

/**
 * 一组多选框
 */
export default class index extends Component {
    
    /**
     * 默认属性
     */
    static defaulProps = {
        datas:[],
        chooseDatas:[]
    }

    static propTypes = {
        datas: types.groupDatas,
        name:PropTypes.string.isRequired,
        chooseDatas:types.chooseDatas,
        onChange:types.onChange
    }

    handleChange= e => {
        let val = e.target.value;//读取表单的值
        let newArr;
        if(e.target.type ==='checkbox') {
            //对val进行特殊处理
            if(e.target.checked) {
                newArr = [...this.props.chooseDatas,val];
            }else {
                newArr = this.props.chooseDatas.filter(it => it !==val)
            }
        }
        this.props.onChange && this.props.onChange(newArr,this.props.name,e)
    }
    /**
     * 得到一组多选框
     */
    getCheckBox(){
        return this.props.datas.map(it => (
            <label key={it.value}>
                <input 
                type="checkbox" 
                name={this.props.name}
                value={it.value}
                checked={this.props.chooseDatas.includes(it.value)}
                onChange={this.handleChange}
                />
                {it.text}
            </label>
        ))
    }
    render() {
        const bs = this.getCheckBox();
        return (
            <div>
                {bs}
            </div>
        )
    }
}
