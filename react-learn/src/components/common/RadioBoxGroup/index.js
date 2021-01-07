import React, { Component } from 'react'

/**
 * 一组单选框
 */
export default class RadioBoxGroup extends Component {
    
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
                checked={this.props.choose === it.value}
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
