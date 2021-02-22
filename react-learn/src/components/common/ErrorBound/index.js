import React, { PureComponent } from 'react'

export default class ErrorBound extends PureComponent {

    state = {
        hasError:false
    }

    // static getDerivedStateFromError() {
    //     console.log('发生错误了');
    //     return {
    //         hasError:true
    //     }
    // }

    componentDidCatch(error,info) {
        console.dir(error)
        console.dir(info)
        this.setState({
            hasError:true
        })
    }

    render() {
        if(this.state.hasError) {
            return <h1>出现错误了！</h1>
        }
        return this.props.children
    }
}
