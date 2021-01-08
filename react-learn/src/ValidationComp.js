import React, { Component } from 'react';
import PropTypes from 'prop-types'

class ValidationComp extends Component {

    //先混合属性
    static defaultProps = {
        b:false
    }

    //再调用相应的函数进行验证
    static propTypes = {
        a:PropTypes.number.isRequired,//必须是数字并且必填
        b:PropTypes.bool.isRequired,//必须是bool并且必填
        onClick:PropTypes.func,//必须是函数
        c:PropTypes.any,//1.可以设置必填 2.队列保持整齐（所有属性都在该对象中）
        d:PropTypes.node.isRequired,//1.可以设置必填 2.队列保持整齐（所有属性都在该对象中）
        e:PropTypes.element,//e必须是一个React元素
        f:PropTypes.elementType,//必须是一个组件类型
    }
    render() {
        return (
            <div>
                {this.props.a} {this.props.d}
            </div>
        );
    }
}

export default ValidationComp;