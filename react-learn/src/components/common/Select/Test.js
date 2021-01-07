import React, { Component } from 'react'
import Select from './index'
import {getAllStudents} from '../../../services/student'

export default class Test extends Component {
    state ={
        datas:[
            {value:'football',text:'足球'},
            {value:'basketball',text:'篮球'},
            {value:'movie',text:'电影'},
        ],
        name:'lovess',
        choose:''
    }
    async componentDidMount(){
        const stus = await getAllStudents();
        this.setState({
            datas:stus.map(it => ({value:it.id.toString(),text:it.name}))
        })
    }
    render() {
        return (
            <div>
                <Select {...this.state}
                onChange={newArr => {
                    this.setState({
                        choose:newArr
                    })
                }}
                />
            </div>
        )
    }
}
