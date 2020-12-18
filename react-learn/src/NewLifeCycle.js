import React, { Component } from 'react'

export default class NewLifeCycle extends Component {
    state = {
        n:0
    }

    // static getDerivedStateFromProps(nextProps,prevState) {
    //     console.log('getDerivedStateFromProps');
    //     return null;
    // }

    getSnapshotBeforeUpdate = (prevProps,prevState) => {
        console.log('getSnapshotBeforeUpdate');
        return 122323;
    }

    componentDidUpdate(prevProps,prevState,snap) {
        console.log('componentDidUpdate',snap);
    }
    render() {
        return (
            <div>
                <h1>{this.state.n}</h1>
                <p>
                    <button onClick={() => {
                        this.setState({
                            n:this.state.n+1
                        })
                    }}>+1</button>
                </p>
            </div>
        )
    }
}
