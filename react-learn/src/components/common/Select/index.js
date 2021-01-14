import React, { Component } from 'react'
import types from '../../../utils/commonTypes'
import PropTypes from 'prop-types'
import withDataGroup from '../hoc/withDataGroup'

class Option extends Component {
    static propTypes = {
        info:types.singleData.isRequired,//当前单选框的value
    }
    render(){
        return <option value={this.props.info.value}>{this.props.info.text}</option>
    }
}

const OptGroup = withDataGroup(Option)

class Select extends Component {
    static propTypes = {
        name:PropTypes.string.isRequired,
        value:PropTypes.string.isRequired,
        onChange:types.onChange
    }
    handleChange= e => {
        let newValue = e.target.value;//读取表单的值
        this.props.onChange && this.props.onChange(newValue)
    }
    render() {
        return <select name={this.name} value={this.props.value}
        onChange={this.handleChange}>
            <OptGroup {...this.props}/>
        </select>
    }
}


/**
 * 一组单选框
 */
export default Select
