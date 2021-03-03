import {useState,useEffect} from 'react'
import {getAllStudents} from '../services/student'

export default function useAllStudents() {
    const [students, setStudents] = useState([])
    useEffect(() => {
        (async () => {
            const stus = await getAllStudents();
            console.log(stus);
            setStudents(stus)
        })()
    }, [])
    return students;
}