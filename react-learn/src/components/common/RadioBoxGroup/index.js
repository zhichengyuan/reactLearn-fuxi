import React, { Component } from 'react'
import types from '../../../utils/commonTypes'
import PropTypes from 'prop-types'
/**
 * 一组单选框
 */
export default class RadioBoxGroup extends Component {

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
     * 得到一组多选框
     */
    getRadioBox(){
        return this.props.datas.map(it => (
            <label key={it.value}>
                <input 
                type="radio" 
                name={this.props.name}
                value={it.value}
                checked={this.props.chooseData === it.value}
                onChange={this.handleChange}
                />
                {it.text}
            </label>
        ))
    }
    render() {
        const bs = this.getRadioBox();
        return (
            <div>
                {bs}
            </div>
        )
    }
}
