import React, { Component } from 'react'

const ctx = React.createContext()
const ctx2 = React.createContext()

function ChildA(props) {
    return (
        <ctx2.Provider value={{
            a:123,
            c:"hello"
        }}>
            <div>
                <h1>ChildA</h1>
                <h2>
                    <ctx.Consumer>
                        {value => <>{value.a},{value.b}</>}
                    </ctx.Consumer>
                </h2>
                <ChildB></ChildB>
            </div>
        </ctx2.Provider>
    )
}

class ChildB extends Component {
    
    render() {
        return(
                <ctx.Consumer>
                    {value => (
                        <>
                            <p>
                                ChildB，来自上下文的数据：a:{value.a},b:{value.b}
                                <button onClick={() => {
                                    value.changeA(value.a + 2)
                                }}>后代组件的按钮，点击a+2</button>
                            </p>
                            <p>
                                <ctx2.Consumer>
                                    {val => (
                                        <>
                                        来自于ctx2的数据
                                        a:{val.a},c:{val.c}
                                        </>
                                    )}
                                </ctx2.Consumer>
                            </p>
                        </>
                    )}
                </ctx.Consumer>
            )
        
    }
}

export default class NewContext extends Component {
    state = {
        a:0,
        b:'adsd',
        changeA:(newA) => {
            this.setState({
                a:newA
            })
        }
    }
    render() {
        const Provider = ctx.Provider;
        return (
            <Provider value={this.state}>
                <div>
                    新的API
                    <ChildA/>
                    <button onClick={() => {
                        this.setState({
                            a:this.state.a + 1
                        })
                    }}>父组件加1</button>
                </div>
            </Provider>
            
        )
    }
}
