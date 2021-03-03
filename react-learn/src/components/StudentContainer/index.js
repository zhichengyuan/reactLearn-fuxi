import React,{useState,useEffect} from 'react'
import StudentList from '../StudentList/index'
import Pager from '../common/Pager'
import { getStudents} from '../../services/student'

/**
 * 分页组件
 * 属性
 * 1、current：初始页码
 * 2、total：总数据量
 * 3、limit：页容量，每页显示的数据量
 * 4、panelNumber:数字页码最多显示多少个
 * 
 */

/**
 * 用于提供数据，以及控制数据的变化
 */
export default function StudentContainer() {
    const [students,setStudents] = useState([]);
    const [panelNumber, setPanelNumber] = useState(5);
    const [current, setCurrent] = useState(1);
    const [total, setTotal] = useState(0);
    const [limit, setLimit] = useState(10)
    useEffect(() => {
        (async function() {
            if(current == '') {
                return
            }
            const resp = await getStudents(current,limit);
            
            setTotal(resp.cont)
            setStudents(resp.findByPage);
            
        })()
        
    }, [current,limit])//空数组的目的，是让该副作用函数没有任何依赖项，从而仅在首次挂载时运行
    return (
        <div>
            <StudentList stus={students}/>
            <div>
            <Pager 
                panelNumber={panelNumber} 
                current={current} 
                limit={limit} 
                total={total}
                onPageChange={newPage => setCurrent(newPage)}
                />
            </div>
            <div>
                最多显示的数字页码：<input type="number" value={panelNumber} onChange={(e) => {
                    setPanelNumber(e.target.value)
                }}/>
            </div>
            <div>
                每页显示的条数：<input type="number" value={limit} onChange={(e) => {
                    setLimit(e.target.value)
                }}/>
            </div>
            
            
            {/* <input type="number" value={current} onChange={(e) => {
                setCurrent(e.target.value)
            }}/> */}
        </div>
    )
}
