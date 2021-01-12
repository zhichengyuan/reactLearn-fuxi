import React, { Component } from 'react'
import types from '../../../utils/commonTypes'
import PropTypes from 'prop-types'
/**
 * 一组单选框
 */
export default class Select extends Component {
    
    /**
     * 默认属性
     */
    static defaulProps = {
        datas:[],
        chooseData:''
    }

    static propTypes = {
        datas: types.groupDatas,
        name:PropTypes.string.isRequired,
        chooseData:PropTypes.string.isRequired,
        onChange:types.onChange
    }

    handleChange= e => {
        let newValue = e.target.value;//读取表单的值
        this.props.onChange && this.props.onChange(newValue,this.props.name,e)
    }
    /**
     * 得到一组option
     */
    getOptions(){
        return this.props.datas.map(it => (
            <option key={it.value} value={it.value}>{it.text}</option>
        ))
        
    }
    render() {
        const options = this.getOptions();
        return (
                <select name={this.props.name} value={this.props.chooseData}
                        onChange={this.handleChange}
                    >
                        {options}
                </select>
        )
    }
}
