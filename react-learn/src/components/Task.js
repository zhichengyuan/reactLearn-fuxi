import React, { PureComponent } from 'react';
import PropTypes from 'prop-types'
import './Task.css'
import { ObjectEqual } from '../utils/helper'

function Task(props) {
        console.log('task render')
        return (
            <div>
                <li className={props.isFinish ? 'finish':''}>{props.name}</li>
            </div>
        );
}

Task.prototypes = {
    name:PropTypes.string.isRequired,//任务名称
    isFinish:PropTypes.bool.isRequired//任务是否完成
}

function memo(FuncComp) {
    return class Memo extends PureComponent {
        render() {
            return <>
            {FuncComp(this.props)}
            </>
        }
    }
}

export default memo(Task);


// class Task extends PureComponent {

//     static propTypes = {
//         name:PropTypes.string.isRequired,//任务名称
//         isFinish:PropTypes.bool.isRequired//任务是否完成
//     }

//     // shouldComponentUpdate(nextProps,nextState) {
//     //     if(ObjectEqual(this.props,nextProps) && ObjectEqual(this.state,nextState)) {
//     //         return false;
//     //     }
//     //     return true;
//     // }

//     render() {
//         console.log('task render')
//         return (
//             <div>
//                 <li className={this.props.isFinish ? 'finish':''}>{this.props.name}</li>
//             </div>
//         );
//     }
// }

// export default Task;