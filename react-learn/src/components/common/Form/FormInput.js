import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ctx from './formContext'

//一定处于上下文中
export default class FormInput extends Component {

    static contextType = ctx;

    static defaultProps = {
        type:'text'
    }

    static propTypes = {
        name:PropTypes.string.isRequired,//文本框的名称
        type:PropTypes.string.isRequired
    }
    render() {
        return (
            <input 
            value={this.context.formData[this.props.name] || ""} 
            type={this.props.type}
            onChange={e => {
                this.context.changeFormData(this.props.name,e.target.value)
            }}
            />
        )
    }
}
