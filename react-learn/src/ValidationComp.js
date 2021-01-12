import React, { Component } from 'react';
import PropTypes from 'prop-types'

export class A {

}

export class B extends A {

}


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
        d:PropTypes.node.isRequired,//d必填，而且必须是一个可以渲染的内容，字符串、数字、React元素
        e:PropTypes.element,//e必须是一个React元素
        f:PropTypes.elementType,//必须是一个组件类型
        g:PropTypes.instanceOf(A),//g必须是A的实例
        sex:PropTypes.oneOf(["男",'女']).isRequired,//属性必须是数组当中的一个
        h:PropTypes.arrayOf(PropTypes.number),//数组的每一项必须满足类型要求
        i:PropTypes.objectOf(PropTypes.number),//每一个属性值必须满足类型要求
        j:PropTypes.shape({//属性必须满足该对象的要求
            name:PropTypes.string.isRequired,//name必填，必须是一个字符串
            age:PropTypes.number,//age必须是一个数字
            address:PropTypes.shape({
                province:PropTypes.string,
                city:PropTypes.string
            })
        }),
        k:PropTypes.arrayOf(PropTypes.shape({
            name:PropTypes.string.isRequired,
            age:PropTypes.number.isRequired
        })),
        m:PropTypes.oneOfType([PropTypes.string,PropTypes.number]),
        score:function (props,propName,componentName){
            console.log(props,propName,componentName);
            const val = props[propName];
            //必填
            if(val === undefined || val === null) {
                return new Error(`invalid prop ${propName} in ${componentName},${propName} is Required`)
            }
            //必须是一个数字
            if(typeof val !== 'number') {
                return new Error(`invalid prop ${propName} in ${componentName}, ${propName} is not a number`)
            }
            //取值范围0~100
            
            if(val < 0 || val > 100) {
                return new Error(`invalid prop ${propName} in ${componentName}, ${propName} must is between 0 and 100`)
            }
        }
    
    }
    render() {
        const F=this.props.f;
        return (
            <div>
                {this.props.a} {this.props.d}
                <F/>
            </div>
        );
    }
}

export default ValidationComp;