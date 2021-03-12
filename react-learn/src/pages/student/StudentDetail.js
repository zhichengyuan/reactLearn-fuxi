import React from 'react'

export default function StudentDetail(props) {
    return (
        <div>
            <h1>学生详情</h1>
            <h2>学号:{props.match.params.id}</h2>
        </div>
    )
}
