import React, { Component } from 'react'
import Student from './Student'

export default class StudentList extends Component {
    
    render() {
        let students = this.props.stus.map(item => <Student key={item.id} {...item}/>)
        return (
            <ul>
                {students}
            </ul>
        )
    }
}
