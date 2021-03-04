import {useState,useEffect} from 'react'
import {getAllStudents} from '../services/student'

export default function useAllStudents() {
    const [students, setStudents] = useState([]);
    useEffect(() => {
        (async () => {
            const stus = await getAllStudents();
            setStudents(stus)
        })()
    }, [])
    return students;
}