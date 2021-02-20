import React, { PureComponent } from 'react';

class AddTask extends PureComponent {
    state = {
        name:""
    }
    render() {
        console.log('add Render')
        return (
            <div>
                <input type="text" value={this.state.name}
                    onChange={e => {
                        this.setState({
                            name:e.target.value
                        })
                    }}
                />
                <button onClick = {() => {
                    this.props.onAdd && this.props.onAdd({
                        name:this.state.name,
                        isFinish:Math.random() > 0.5
                    })
                }}>添加任务</button>
            </div>
        );
    }
}

export default AddTask;