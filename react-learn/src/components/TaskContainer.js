import React, { Component } from 'react';
import TaskList from './TaskList'
import AddTask from './AddTask'

class TaskContainer extends Component {
    state = {
        tasks:[]
    }

    addTask = (task) => {
        console.log(task);
        this.setState({
            tasks:[...this.state.tasks,task]
        })
    }   

    componentDidMount() {
        const ts = [];
        for(let i=1;i<=10;i++) {
            ts.push({
                name:`任务${i}`,
                isFinish:Math.random() > 0.5
            })
        }
        this.setState({
            tasks:ts
        })
    }

    render() {
        return (
            <div>
                <TaskList tasks={this.state.tasks}/>
                <AddTask onAdd={this.addTask}/>
            </div>
        );
    }
}

export default TaskContainer;