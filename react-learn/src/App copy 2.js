// import React,{useReducer} from  'react'
import React from  'react'
import FadeTransition from './components/common/FadeTransition'

class App extends React.Component {
    state ={
        show:true
    }

    render() {
        return <div>
            <FadeTransition appear timeout={1000} in={this.state.show}>
                <h1>标题</h1>
            </FadeTransition>
            <button onClick={() => {
                this.setState({
                    show:!this.state.show
                })
            }}>切换显示状态</button>
        </div>
    }
}

export default App;