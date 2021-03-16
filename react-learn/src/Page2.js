import React from 'react'
import Prompt from './Prompt'

export default class Page2 extends React.Component {
    state = {
        val:''
    }
    
    render() {
        return (
            <div>
                <Prompt when={this.state.val !== ''}
                    message='真的要跳转吗？'
                />
                <textarea value={this.state.val} cols="30" rows="10"
                    onChange={e => {
                        this.setState({
                            val:e.target.value
                        })
                    }}
                ></textarea>
            </div>
        )
    }
}


