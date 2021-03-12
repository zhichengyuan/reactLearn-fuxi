import React,{useState} from 'react'
import StudentSearchBar from '../../components/StudentSearchBar'
import StudentTable from '../../components/StudentTable'
import useSearchStudentList from '../../myHooks/useSearchStudents'
import Pager from '../../components/common/Pager'
import qs from 'query-string'


/**
 * 该函数用于获取地址栏参数中提供的查询条件，返回一个对象
 * 如果某些条件在地址栏中缺失，该函数会使用默认值
 * @param {} search 
 */
function getQuery(search) {
    const queryDefault = {
        page:1,
        limit:10,
        key:'',
        sex:-1
    }
    let query = qs.parse(search);
    query = Object.assign({},queryDefault,query);
    query.limit = +query.limit;
    query.page = +query.page;
    query.sex = +query.sex;
    return query;
}

function changeLocation(query,history) {
    //根据条件对象，改变地址
    const search = qs.stringify(query)
    console.log(query,history);
    history.push("?" + search)
}

export default function StudentList(props) {
    const query = getQuery(props.location.search);
    const [panelNumber,] = useState(5);
    const res = useSearchStudentList(query.page,query.limit,query.key,query.sex);
    console.log(query);
    return (
        <div>
            <StudentSearchBar
                defaultValue= {{
                    key:query.key,
                    sex:query.sex
                }}
                onSearch={(search) => {
                    const newQuery = {
                        ...query,
                        key:search.key,
                        sex:search.sex,
                        page:1
                    }
                    changeLocation(newQuery,props.history)
                }}
            />
            <StudentTable stus={res? res.datas:[]}/>
            <div>
                <Pager 
                    panelNumber={panelNumber} 
                    current={query.page} 
                    limit={query.limit} 
                    total={res?res.cont:0}
                    onPageChange={newPage => {
                       
                        const newQuery = {
                            ...query,
                            page:newPage
                        }
                        changeLocation(newQuery,props.history)
                    }}
                    />
            </div>
        </div>
    )
}
