import React, { Component } from 'react'
import Modal from './common/Modal'

export default class Test extends Component {
    state = {
        showModal:true
    }
    showModal = () => {
        this.setState({
            showModal:true
        })
    }
    hideModal = () => {
        this.setState({
            showModal:false
        })
    }
    render() {
        return (
            <div>
                {
                    this.state.showModal ?
                        (<Modal onClose={this.hideModal}>
                            <h1>的似的是的</h1>
                            <button onClick={this.hideModal}>隐藏蒙层</button>
                        </Modal>) :
                        null
                }
                <button onClick={this.showModal}>显示蒙层</button>
            </div>
        )
    }
}
