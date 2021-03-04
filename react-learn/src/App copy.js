import React from  'react'
import useAllStudents from './myHooks/useAllStudents'

function Test() {
    const stus = useAllStudents();
    if(stus) {
        const list = stus.map(it => <li key={it.id}>{it.name}</li>)
        return <div>
            <ul>
                {list}
            </ul>
        </div>
    }
    return null;
    
}

export default function App() {
    return <div>
        <Test/>
        {/* <StudentContainer/> */}
    </div>
}