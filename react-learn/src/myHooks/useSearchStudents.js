import {useState,useEffect} from 'react'
import { searchStudents } from '../services/student'

/**
 * 根据页码和也容量获取数据，得到一个响应结果
 * 并且，当页码和页容量变化时，重新获取数据
 * @param {*} page 
 * @param {*} limit 
 */
export default function useSearchStudentList(page =1,limit=10,key="",sex=-1) {
    const [resp, setResp] = useState()
    useEffect(() => {
        (async () => {
            const resp = await searchStudents({page,limit,key,sex});
            setResp(resp)
        })()
    }, [page,limit,key,sex])
    return resp;
}