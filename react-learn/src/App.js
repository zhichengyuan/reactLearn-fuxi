// import React,{useReducer} from  'react'
import React,{useState} from  'react'
import { CSSTransition,TransitionGroup } from 'react-transition-group';
import "animate.css"
import './App.css'


export default function App() {
    const [show, setShow] = useState(true);
    const [tasksList,setTasksList] = useState([
        {id:2,name:'任务1'},
        {id:3,name:'任务2'},
    ])
    return (
      <div>
          <div className="container">
            <TransitionGroup appear component={null}>
                {
                    tasksList.map(t => (
                        <CSSTransition timeout={2000} key={t.id}>
                            <div>
                                {t.name}
                                <button onClick={() => {
                                    var newTasks = tasksList.filter(it => it.id !== t.id);
                                    setTasksList(newTasks)
                                }}>删除</button>
                            </div>
                        </CSSTransition>
                    ))
                }
            </TransitionGroup>
        </div>
        <button onClick={() => {
            var name = window.prompt('请输入任务名称');
            setTasksList([...tasksList,{id:name,name}])
        }}>添加一个任务</button>
      </div>
    );
  };