import React,{useState} from  'react'
import usePageStudents from './myHooks/usePageStudent'

function Test() {
    const [page, setPage] = useState(1);
    
    const stus = usePageStudents(page,10);
    if(stus) {
        const list = stus.findByPage.map(it => <li key={it.id}>{it.name}</li>)
        return <div>
            <input type="number" value={page} onChange={(e) => {
                setPage(parseInt(e.target.value))
            }}/>
            <h1>总数：{stus.cont}</h1>
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
    </div>
}