// import React,{useReducer} from  'react'
import React from  'react'
import { SwitchTransition } from 'react-transition-group';
import FadeTransition from './components/common/FadeTransition'

class App extends React.Component {
    state ={
        show:true
    }

    render() {
        return <div>
            <SwitchTransition>
                <FadeTransition timeout={1000} appear key={this.state.show}>
                    <h1>{this.state.show?'显示':'隐藏'}</h1>
                </FadeTransition>
            </SwitchTransition>
            
            <button onClick={() => {
                this.setState({
                    show:!this.state.show
                })
            }}>切换显示状态</button>
        </div>
    }
}

export default App;