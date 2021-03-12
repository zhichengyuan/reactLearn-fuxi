import React from 'react'
import {Route,Switch} from 'react-router-dom'
import Layout from '../../components/Layout'
import Header from '../../components/Header'
import Menu from '../../components/Menu'
import Welcome from '../Welcome'
import StudentAdd from '../student/StudentAdd'
import StudentList from '../student/StudentList'
import StudentDetail from '../student/StudentDetail'
import CourseAdd from '../courses/CourseAdd'
import CourseList from '../courses/CourseList'


export default function Admin() {
    return (
        <Layout
            header={<Header></Header>}
            aside={<Menu/>}
        >
            <Switch>
                <Route path="/" exact component={Welcome}/>
                <Route path="/students" exact component={StudentList}/>
                <Route path="/students/:id" exact component={StudentDetail}/>
                <Route path="/students/add" exact component={StudentAdd}/>
                <Route path="/courses" exact component={CourseList}/>
                <Route path="/courses/add" exact component={CourseAdd}/>
            </Switch>
            
        </Layout>
    )
}
