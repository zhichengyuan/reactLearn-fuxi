import React from 'react'
import Student from './Student'

export default function StudentList(props) {
    var stus =  props.stus.map((item,i) => <Student {...item} key={i} />)
    return (
        <ul>
            {stus}
        </ul>
    )
}
