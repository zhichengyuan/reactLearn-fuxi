import React from 'react'
import StudentSearchBar from '../../components/StudentSearchBar'

export default function StudentList() {
    return (
        <div>
            <StudentSearchBar
                defaultValue= {{
                    key:'',
                    sex:1
                }}
            />
            学生列表页面
        </div>
    )
}
