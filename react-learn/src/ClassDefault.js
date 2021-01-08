import React, { Component } from 'react';

class ClassDefault extends Component {
    static defaultProps = {
        a:1,
        b:2,
        c:3,
        d:4,
        e:5,
    }
    constructor(props) {
        super(props);
        console.log(props)
    }
    render() {
        return (
            <div>
                a:{this.props.a},b:{this.props.b},c:{this.props.c}
            </div>
        );
    }
}

//属性默认值
// ClassDefault.defaultProps = {
//     a:1,
//     b:2,
//     c:3
// }

export default ClassDefault;