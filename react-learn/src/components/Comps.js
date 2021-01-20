import React, { Component } from 'react';

class A extends Component {
    method(){
        console.log('调用了组件A的方法')
    }

    render(){
        return <h1>组件A</h1>
    }
}



class Comps extends Component {
    constructor(props) {
        super(props);
        this.txt = React.createRef();
    }

    state = {
        show:true
    }
    handleClick = () => {
        // console.log(this)
        this.setState({
            show:!this.state.show
        })
        // this.tet.focus()
        // this.txt.current.focus();
        // this.refs.compA.method()
    }
    componentDidMount(){
        console.log(this.txt)
    }
    getRef = el => {
        console.log('函数被调用',el)
        this.tet = el
    }
    render() {
        return (
            <div>
                {
                    this.state.show && <><input type="text" ref={this.txt}/>
                    <input type="text" ref={this.getRef}/></>
                }
                
                <button onClick={this.handleClick}>显示/隐藏</button>
            </div>
        );
    }
}

export default Comps;