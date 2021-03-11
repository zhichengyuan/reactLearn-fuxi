import React, { Component } from 'react'

export default class StudentSearchBar extends Component {
    
    constructor(props) {
        super(props);
        const def = {
            key:"",
            sex:-1
        };
        this.state = Object.assign({},def,this.props.defaultValue)
    }
    handleRadioChange = e => {
        console.log(e.target.value);
        this.setState({
            sex:+e.target.value
        })
    }
    render() {
        return (
            <div>
                关键字：
                <input type="text" value={this.state.key} onChange={e => {
                    this.setState({
                        key:e.target.value
                    })
                }}></input>
                性别：
                <label><input onChange={this.handleRadioChange} checked={this.state.sex === -1} type="radio" name="sex" value={-1}/>不限</label>
                <label><input onChange={this.handleRadioChange} checked={this.state.sex === 0} type="radio" name="sex" value={0}/>男</label>
                <label><input onChange={this.handleRadioChange} checked={this.state.sex === 1} type="radio" name="sex" value={1}/>女</label>
                <button>查询</button>
            </div>
        )
    }
}
