import React, { Component } from 'react'
import types from '../../../utils/commonTypes'
import PropTypes from 'prop-types'
import withDataGroup from '../hoc/withDataGroup'


class Radio extends Component {
    static propTypes = {
        name:PropTypes.string.isRequired,
        info:types.singleData.isRequired,//当前单选框的value
        value:PropTypes.string.isRequired,//当前选中的value值
        onChange:PropTypes.func
    }
    handleChange= e => {
        let newValue = e.target.value;//读取表单的值
        this.props.onChange && this.props.onChange(newValue)
    }
    render(){
        return (
            <label>
                <input 
                type="radio" 
                name={this.props.name}
                value={this.props.info.value}
                checked={this.props.value === this.props.info.value}
                onChange={this.handleChange}
                />
                {this.props.info.text}
            </label>
        )
    }
}

/**
 * 一组单选框
 */
export default withDataGroup(Radio)