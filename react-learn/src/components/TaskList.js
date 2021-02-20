import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Task from './Task'

class TaskList extends Component {

    static propTypes = {
        tasks:PropTypes.arrayOf(PropTypes.shape({
            name:PropTypes.string.isRequired,
            isFinish:PropTypes.bool.isRequired
        })).isRequired
    }
    render() {
        console.log('TaskList Render')
        const ts = this.props.tasks.map((it,i) => <Task
            key={i}
            {...it}
        />)
        return (
           <ul>
               {ts}
           </ul>
        );
    }
}

export default TaskList;