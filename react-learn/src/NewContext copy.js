import React, { Component } from 'react'

const ctx = React.createContext()

function ChildA(props,context) {
    return <div>
        <h1>ChildA</h1>
        <h2>
            <ctx.Consumer>
                {value => <>{value.a},{value.b}</>}
            </ctx.Consumer>
        </h2>
        <ChildB></ChildB>
    </div>
}

class ChildB extends Component {
    /**
     * 声明需要使用哪些上下文的数据
     */
    static contextType = ctx

    constructor(props,context) {
        super(props,context);//将参数的上下文交给父类处理
        console.log(this.context);
    }

    render() {
        return <p>
            ChildB，来自上下文的数据：a:{this.context.a},b:{this.context.b}
            <button onClick={() => {
                this.context.changeA(this.context.a + 2)
            }}>后代组件的按钮，点击a+2</button>
        </p>
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
