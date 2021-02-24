import React, { Component } from 'react'
import {getAllStudents} from './services/student'

class StudentList extends Component {
    render() {
        const stus = this.props.stuList.map(it => <Student key={it.id} name={it.name} age={it.age} address={it.address}/>)
        return (
            <ul>
                {stus}
            </ul>
        );
    }
}

class Student extends Component {
    render() {
        return <li>
                <span>{this.props.name}</span>
                <span>{this.props.age}</span>
                <span>{this.props.address}</span>
            </li>
    }
}

export default class App extends Component {

    state = {
        stuList:[]
    }

    loadStudents = async () => {
        const stus = await getAllStudents();
        this.setState({
            stuList:stus
        })
    }

    render() {
        return (
            <div>
                {/* 显示学生集合 */}
                <button onClick={this.loadStudents}>加载学生数据</button>
                <button onClick={() => {
                    this.setState({
                        stuList:[]
                    })
                }}>清空数据</button>
                <button onClick={() => {
                    this.setState({
                        stuList:this.state.stuList.sort(() => Math.random() - 0.5)
                    })
                }}>打乱顺序</button>

                <StudentList stuList={this.state.stuList}/>
            </div>
        )
    }
}

// document.querySelector("#root").onclick = function(e) {
//     console.log('真实的dom事件：id为root的div被点击了');
//     e.stopPropagation();
// }