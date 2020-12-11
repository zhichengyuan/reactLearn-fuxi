import React, { Component } from 'react'
import Pager from './Pager'
import StudentList from './StudentList'
import Modal from './Modal'
var appkey = 'demo13_1545210570249';
// var appkey = 'yuanzhicheng_1563606632795';
var baseurl = 'http://open.duyiedu.com';

export default class Test extends Component {
    state = {
        current:1,
        total:0,
        limit:9,
        panelNumber:5,
        students:[],
        isLoading:false
    }
    componentDidMount(){
        this.fetchStudents();
    }
    handlePageChange = (target) => {
        this.setState({
            current:target
        })
        this.fetchStudents();
    }
    async fetchStudents() {
        this.setState({
            isLoading:true
        })
        const res = await fetch(`${baseurl}/api/student/findByPage?appkey=${appkey}&page=${this.state.current}&size=${this.state.limit}`)
                .then(resp => resp.json())
                .then(resp => resp.data)
                
                this.setState({
                    total:res.cont,
                    students:res.findByPage,
                    isLoading:false
                })
    }

    render() {
        return (
            <div>
                <StudentList stus={this.state.students} />
                <div>
                    <Pager
                        {...this.state}
                        onPageChange={this.handlePageChange}
                    />
                </div>
                <Modal show={this.state.isLoading}/>
            </div>
        )
    }
}
