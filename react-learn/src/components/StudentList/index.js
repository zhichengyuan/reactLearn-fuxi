import React from 'react'
import PropTypes from 'prop-types'

// 学生列表
export default function StudentList(props) {
    const {stus} = props;
    const list = stus.map(it => (
    <li key={it.id}>{it.name} - {it.sex ===1?'男':'女'}</li>
    ))
    return (
       <ul>
           {list}
       </ul>
    )
}
StudentList.defaultProps = {
    stus:[]
}
StudentList.propTypes = {
    page:PropTypes.array
}
