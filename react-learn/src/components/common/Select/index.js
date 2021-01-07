import React, { Component } from 'react'

/**
 * 一组单选框
 */
export default class Select extends Component {
    
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
                <select name={this.props.name} value={this.props.choose}
                        onChange={this.handleChange}
                    >
                        {options}
                </select>
        )
    }
}
