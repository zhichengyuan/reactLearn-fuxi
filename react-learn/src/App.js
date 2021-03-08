// import React,{useReducer} from  'react'
import React from  'react'
import { TransitionGroup } from 'react-transition-group';
import FadeTransition from './components/common/FadeTransition'

class App extends React.Component {
    state ={
        tasks:[
            {id:1,name:'任务1'},
            {id:2,name:'任务2'},
            {id:3,name:'任务3'},
        ]
    }

    render() {
        console.log(this.state.tasks);
        
        const list = this.state.tasks.map(t => (
            <FadeTransition timeout={1000} appear key={t.id}>
                <li>
                    {t.name}
                    <button onClick={() => {
                        this.setState({
                            tasks:this.state.tasks.filter(it => it.id !== t.id)
                        })
                    }}>删除</button>
                </li>
            </FadeTransition>
        ))
        console.log(list);
        return <div>
            <TransitionGroup component="ul">
                {list}
            </TransitionGroup>
            
            <button onClick={() => {
                var name = window.prompt('请输入任务名称');
                this.setState({
                    tasks:[...this.state.tasks,{id:name,name}]
                })
            }}>添加</button>
        </div>
    }
}

export default App;